import { useRef, useState, type KeyboardEvent } from "react";
import { assets } from "../config/siteConfig";

type Template = {
  id: string;
  name: string;
  src: string;
  alt: string;
  caption: string;
};

const templates: Template[] = [
  {
    id: "polite-exit",
    name: "The Polite Exit",
    src: assets.heroCharacter,
    alt: "Lavender Bye Buy whale waving goodbye, cream mask raised, red SELL control in one fin, and a gold ETH suitcase in the other.",
    caption: "Thanks for the support. I’ll be going now.",
  },
  {
    id: "two-meanings",
    name: "Two Meanings",
    src: assets.storyCharacter,
    alt: "Bye Buy whale with a farewell mask, sly grin, waving fin, SELL control, and ETH suitcase.",
    caption: "The wave says “bye-bye.” The other fin says SELL.",
  },
  {
    id: "the-crew",
    name: "The Crew",
    src: assets.communityCharacter,
    alt: "Bye Buy whale mascot with the cream mask, suitcase, and hidden SELL control.",
    caption: "Come for the joke. Stay kind.",
  },
];

function wrapLines(
  context: CanvasRenderingContext2D,
  text: string,
  maxWidth: number,
): string[] {
  const words = text.trim().split(/\s+/);
  const lines: string[] = [];
  let line = "";
  words.forEach((word) => {
    const next = line ? `${line} ${word}` : word;
    if (context.measureText(next).width > maxWidth && line) {
      lines.push(line);
      line = word;
    } else {
      line = next;
    }
  });
  if (line) lines.push(line);
  return lines.slice(0, 5);
}

async function renderMeme(src: string, caption: string): Promise<Blob> {
  const image = new Image();
  image.src = src;
  await image.decode();
  const canvas = document.createElement("canvas");
  canvas.width = 1200;
  canvas.height = 1200;
  const context = canvas.getContext("2d");
  if (!context) throw new Error("Canvas is unavailable.");

  context.fillStyle = "#FFF5E4";
  context.fillRect(0, 0, canvas.width, canvas.height);
  const frame = 920;
  const scale = Math.min(frame / image.width, frame / image.height);
  const width = image.width * scale;
  const height = image.height * scale;
  context.drawImage(image, (1200 - width) / 2, 40, width, height);

  context.fillStyle = "#7352B5";
  context.fillRect(0, 980, 1200, 220);
  context.fillStyle = "#FFF5E4";
  context.font = "600 48px Fredoka, Trebuchet MS, sans-serif";
  context.textAlign = "center";
  const lines = wrapLines(context, caption || "Bye Buy", 1040);
  lines.forEach((entry, index) => {
    context.fillText(entry, 600, 1048 + index * 58);
  });

  const blob = await new Promise<Blob | null>((resolve) => {
    canvas.toBlob(resolve, "image/png");
  });
  if (!blob) throw new Error("Could not create the image.");
  return blob;
}

export function MemeLab() {
  const [templateId, setTemplateId] = useState(templates[0].id);
  const [caption, setCaption] = useState(templates[0].caption);
  const [edited, setEdited] = useState(false);
  const [status, setStatus] = useState("");
  const buttonRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const template = templates.find((item) => item.id === templateId) ?? templates[0];

  function selectTemplate(next: Template, focus = false) {
    setTemplateId(next.id);
    if (!edited) setCaption(next.caption);
    if (focus) {
      const index = templates.findIndex((item) => item.id === next.id);
      buttonRefs.current[index]?.focus();
    }
  }

  function onTemplateKeyDown(
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) {
    const forward = event.key === "ArrowRight" || event.key === "ArrowDown";
    const backward = event.key === "ArrowLeft" || event.key === "ArrowUp";
    if (!forward && !backward) return;
    event.preventDefault();
    const delta = forward ? 1 : -1;
    const next = templates[(index + delta + templates.length) % templates.length];
    selectTemplate(next, true);
  }

  async function copyCaption() {
    const text = caption.trim();
    if (!text) {
      setStatus("Add a caption first. The caption field stays editable.");
      return;
    }
    try {
      if (!navigator.clipboard?.writeText) throw new Error("unavailable");
      await navigator.clipboard.writeText(text);
      setStatus("Caption copied.");
    } catch {
      setStatus("Copy failed. Select the caption in the text field and copy it manually.");
    }
  }

  async function downloadMeme() {
    try {
      const blob = await renderMeme(template.src, caption.trim());
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "byebuy-meme.png";
      link.click();
      URL.revokeObjectURL(url);
      setStatus("Meme downloaded.");
    } catch {
      setStatus("Download failed. Copy the caption text instead.");
    }
  }

  async function shareMeme() {
    const text = caption.trim();
    try {
      const blob = await renderMeme(template.src, text);
      const file = new File([blob], "byebuy-meme.png", { type: "image/png" });
      if (navigator.share && navigator.canShare?.({ files: [file] })) {
        await navigator.share({
          title: "Bye Buy",
          text,
          files: [file],
        });
        setStatus("Share sheet opened.");
        return;
      }
      if (navigator.share) {
        await navigator.share({ title: "Bye Buy", text });
        setStatus("Share sheet opened.");
        return;
      }
      throw new Error("Share is unavailable.");
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") {
        setStatus("Share cancelled.");
        return;
      }
      try {
        if (text && navigator.clipboard?.writeText) {
          await navigator.clipboard.writeText(text);
          setStatus("Sharing isn’t available in this browser. Caption copied instead.");
          return;
        }
      } catch {
        /* fall through to the manual message */
      }
      setStatus("Sharing isn’t available here. Select the caption and copy it manually.");
    }
  }

  return (
    <div className="meme-lab">
      <p className="meme-kicker">The Bye Buy Meme Lab</p>
      <h3>Pick a template. Add your caption. Share the joke.</h3>
      <p className="meme-intro">
        No wallet connection needed.
      </p>
      <div
        className="template-picker"
        role="radiogroup"
        aria-label="Meme templates"
      >
        {templates.map((item, index) => {
          const selected = item.id === template.id;
          return (
            <button
              key={item.id}
              ref={(node) => {
                buttonRefs.current[index] = node;
              }}
              type="button"
              role="radio"
              aria-checked={selected}
              tabIndex={selected ? 0 : -1}
              className="template-option"
              onClick={() => selectTemplate(item)}
              onKeyDown={(event) => onTemplateKeyDown(event, index)}
            >
              <img src={item.src} alt="" width={1254} height={1254} />
              <span>{item.name}</span>
            </button>
          );
        })}
      </div>
      <div className="meme-stage">
        <figure className="meme-preview">
          <img
            src={template.src}
            alt={template.alt}
            width={1254}
            height={1254}
          />
          <figcaption>{caption.trim() || "Add a caption."}</figcaption>
        </figure>
        <div className="meme-controls">
          <p className="template-selected">Template selected: {template.name}</p>
          <label htmlFor="meme-caption">Your caption</label>
          <textarea
            id="meme-caption"
            value={caption}
            maxLength={140}
            rows={4}
            onChange={(event) => {
              setEdited(true);
              setCaption(event.target.value);
            }}
          />
          <div className="action-row">
            <button type="button" className="btn btn-primary" onClick={copyCaption}>
              Copy caption
            </button>
            <button type="button" className="btn btn-secondary" onClick={downloadMeme}>
              Download image
            </button>
            <button type="button" className="btn btn-secondary" onClick={shareMeme}>
              Share
            </button>
          </div>
          <p className="status" role="status" aria-live="polite">
            {status}
          </p>
        </div>
      </div>
      <p className="meme-help">
        Choose a template with the arrow keys, edit the caption, then copy,
        download, or share. If image export or sharing is unavailable, the
        caption stays in the text field so you can select and copy it.
      </p>
    </div>
  );
}
