import Link from "next/link"

interface BlogCardProps {
  title: string
  excerpt: string
  date: string
  slug: string
}

export function BlogCard({ title, excerpt, date, slug }: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`} className="group block py-6 border-b border-border">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h3 className="text-base font-medium group-hover:text-primary transition-colors">{title}</h3>
          <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{excerpt}</p>
        </div>
        <time className="text-sm text-muted-foreground font-mono shrink-0">{date}</time>
      </div>
    </Link>
  )
}
