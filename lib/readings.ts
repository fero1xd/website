export type Reading = {
  title: string;
  author: string;
  note?: string;
  href?: string;
  finished?: string;
};

// Keep this file as the single source of truth for your bookshelf.
// The entries below are starter content—replace them with your own books.
export const currentlyReading: Reading[] = [
  {
    title: "Designing Data-Intensive Applications",
    author: "Martin Kleppmann",
    note: "Working through the trade-offs behind reliable, scalable systems.",
    href: "https://dataintensive.net/",
  },
  {
    title: "The Linux Programming Interface",
    author: "Michael Kerrisk",
    note: "A slow, practical tour through the Linux system-call API.",
    href: "https://man7.org/tlpi/",
  },
];

export const readBooks: Reading[] = [
  {
    title: "The Pragmatic Programmer",
    author: "David Thomas & Andrew Hunt",
    finished: "2026",
  },
  {
    title: "Clean Architecture",
    author: "Robert C. Martin",
    finished: "2025",
  },
  {
    title: "Computer Networking: A Top-Down Approach",
    author: "James F. Kurose & Keith W. Ross",
    finished: "2025",
  },
];
