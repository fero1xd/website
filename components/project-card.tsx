import Link from "next/link"

interface ProjectCardProps {
  title: string
  description: string
  year: string
  href: string
}

export function ProjectCard({ title, description, year, href }: ProjectCardProps) {
  return (
    <Link href={href} className="group block py-6 border-b border-border">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h3 className="text-base font-medium group-hover:text-primary transition-colors">{title}</h3>
          <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{description}</p>
        </div>
        <span className="text-sm text-muted-foreground font-mono shrink-0">{year}</span>
      </div>
    </Link>
  )
}
