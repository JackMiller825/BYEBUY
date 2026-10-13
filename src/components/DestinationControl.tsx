import type { ReactNode } from "react";
import { trackCta, type Cta } from "../analytics/tracker";

type DestinationControlProps = {
  label: string;
  href: string | null;
  pendingMessage: string;
  variant?: "primary" | "secondary";
  showNote?: boolean;
  noteId?: string;
  describedBy?: string;
  icon?: ReactNode;
  track?: Cta;
};

export function DestinationControl({
  label,
  href,
  pendingMessage,
  variant = "primary",
  showNote = false,
  noteId,
  describedBy,
  icon,
  track,
}: DestinationControlProps) {
  if (href) {
    return (
      <a
        className={`btn btn-${variant}`}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => {
          if (track) trackCta(track);
        }}
      >
        {icon}
        <span>{label}</span>
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    );
  }

  const descriptionId = showNote ? noteId : describedBy;

  return (
    <span className="destination">
      <button
        type="button"
        className={`btn btn-${variant} is-pending`}
        disabled
        aria-describedby={descriptionId}
      >
        {icon}
        <span>{label}</span>
        <span className="pending-badge">Pending</span>
      </button>
      {showNote ? (
        <span id={noteId} className="pending-note">
          {pendingMessage}
        </span>
      ) : null}
    </span>
  );
}
