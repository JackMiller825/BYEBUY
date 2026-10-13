type SectionHeadingProps = {
  id: string;
  title: string;
  lede?: string;
  tone?: "light" | "dark";
  align?: "start" | "center";
};

export function SectionHeading({
  id,
  title,
  lede,
  tone = "light",
  align = "center",
}: SectionHeadingProps) {
  return (
    <div className={`section-heading tone-${tone} align-${align}`}>
      <h2 id={id}>{title}</h2>
      {lede ? <p className="lede">{lede}</p> : null}
    </div>
  );
}
