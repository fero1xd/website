import type { Reading } from "@/lib/readings";

type ReadingRowProps = Reading & {
  status: "reading" | "read";
};

export function ReadingRow({
  title,
  author,
  note,
  href,
  finished,
  status,
}: ReadingRowProps) {
  const content = (
    <>
      <span
        className="absolute inset-y-4 left-0 w-px bg-border transition-colors group-hover:bg-primary"
        aria-hidden="true"
      />
      <div className="flex min-w-0 flex-1 flex-col gap-1.5">
        <h3 className="font-medium tracking-[-0.015em] text-foreground transition-colors group-hover:text-primary">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground">by {author}</p>
        {note ? (
          <p className="mt-1 max-w-xl text-sm leading-relaxed text-muted-foreground">
            {note}
          </p>
        ) : null}
      </div>
      <span
        className={
          status === "reading"
            ? "shrink-0 font-mono text-[11px] uppercase tracking-[0.12em] text-primary"
            : "shrink-0 font-mono text-xs text-muted-foreground"
        }
      >
        {status === "reading" ? "Now" : finished}
      </span>
      {href ? (
        <span
          className="shrink-0 text-sm text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary"
          aria-hidden="true"
        >
          ↗
        </span>
      ) : null}
    </>
  );

  const className =
    "group relative flex gap-4 border-b border-border py-5 pl-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring";

  return href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {content}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  ) : (
    <article className={className}>{content}</article>
  );
}
