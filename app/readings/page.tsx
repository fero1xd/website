import { EmptyState } from "@/components/empty-state";
import { ReadingRow } from "@/components/reading-row";
import { currentlyReading, readBooks } from "@/lib/readings";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Readings",
  description:
    "Books Pranjal is currently reading, along with a log of finished books.",
  openGraph: {
    title: "Readings · Pranjal Butola",
    description:
      "Books Pranjal is currently reading, along with a log of finished books.",
    type: "website",
    images: [
      `/api/og?title=Readings&description=${encodeURIComponent(
        "Books I am reading now and the ones I have finished.",
      )}`,
    ],
  },
};

export default function ReadingsPage() {
  return (
    <>
      <header className="max-w-2xl">
        <p className="text-sm text-muted-foreground">Readings</p>
        <h1 className="mt-3 text-3xl font-medium tracking-tight">
          Notes from the bookshelf.
        </h1>
        <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
          Books I’m making my way through now, and a running record of the ones
          I’ve finished.
        </p>
      </header>

      <section className="mt-12" aria-labelledby="currently-reading-heading">
        <div className="flex items-baseline justify-between gap-4">
          <h2
            id="currently-reading-heading"
            className="text-sm text-muted-foreground"
          >
            Currently reading
          </h2>
          <p className="font-mono text-xs text-muted-foreground">
            {currentlyReading.length}{" "}
            {currentlyReading.length === 1 ? "book" : "books"}
          </p>
        </div>
        <div className="mt-3 border-t border-border">
          {currentlyReading.length > 0 ? (
            currentlyReading.map((book) => (
              <ReadingRow
                key={`${book.title}-${book.author}`}
                {...book}
                status="reading"
              />
            ))
          ) : (
            <EmptyState
              title="Nothing open right now"
              description="The next book is still waiting to be picked."
            />
          )}
        </div>
      </section>

      <section className="mt-14" aria-labelledby="read-heading">
        <div className="flex items-baseline justify-between gap-4">
          <h2 id="read-heading" className="text-sm text-muted-foreground">
            Read
          </h2>
          <p className="font-mono text-xs text-muted-foreground">
            {readBooks.length} {readBooks.length === 1 ? "book" : "books"}
          </p>
        </div>
        <div className="mt-3 border-t border-border">
          {readBooks.length > 0 ? (
            readBooks.map((book) => (
              <ReadingRow
                key={`${book.title}-${book.author}`}
                {...book}
                status="read"
              />
            ))
          ) : (
            <EmptyState
              title="No finished books yet"
              description="Completed books will collect here over time."
            />
          )}
        </div>
      </section>
    </>
  );
}
