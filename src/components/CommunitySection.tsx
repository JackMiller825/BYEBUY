import { assets, siteConfig } from "../config/siteConfig";
import { telegramHref, xHref } from "../config/destinations";
import { DestinationControl } from "./DestinationControl";
import { MemeLab } from "./MemeLab";
import { SectionHeading } from "./SectionHeading";

export function CommunitySection() {
  const telegram = telegramHref();
  const xUrl = xHref();

  return (
    <section
      id="community"
      className="section community"
      aria-labelledby="community-heading"
      style={{ backgroundImage: `url("${assets.communityBackground}")` }}
    >
      <div className="wrap">
        <SectionHeading
          id="community-heading"
          title="Come for the joke. Stay kind."
          lede="The Bye Buy crew makes ocean-sized memes about the friendliest exit in crypto. Share a caption, remix a template, and help newcomers find the real links."
          tone="dark"
        />
        <img
          className="crew-art"
          src={assets.crew}
          alt=""
          width={900}
          height={420}
        />
        <div className="community-layout">
          <MemeLab />
          <div className="community-art">
            <img
              src={assets.communityCharacter}
              alt="Bye Buy whale beside the meme lab, mask raised, suitcase packed, and the red SELL control still in fin."
              width={1254}
              height={1254}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
        <div className="social-row">
          <DestinationControl
            label="Join Telegram"
            href={telegram}
            pendingMessage={siteConfig.messages.linkPending}
            showNote={!telegram}
            noteId="telegram-note"
            track="telegram"
            icon={
              <img
                src={assets.telegramIcon}
                alt=""
                width={128}
                height={128}
              />
            }
          />
          <DestinationControl
            label="Follow on X"
            href={xUrl}
            pendingMessage={siteConfig.messages.linkPending}
            variant="secondary"
            showNote={!xUrl}
            noteId="x-note"
            track="x"
            icon={
              <img src={assets.xIcon} alt="" width={128} height={128} />
            }
          />
        </div>
        <aside className="community-code">
          <h3>Community code</h3>
          <p>
            Be welcoming. Label jokes as jokes. Do not impersonate other
            projects, promise returns, pressure people to buy, or post
            unverified contract links.
          </p>
        </aside>
      </div>
    </section>
  );
}
