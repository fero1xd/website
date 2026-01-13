import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ProjectCard } from "@/components/project-card";
import { EmptyState } from "@/components/empty-state";
import { projects } from "@/lib/projects";

export default function ProectsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="max-w-3xl mx-auto w-full px-6 flex-1 flex flex-col">
        <Header />

        <main className="flex-1 py-16">
          <section>
            <h1 className="text-2xl font-bold tracking-tight text-primary">
              Projects
            </h1>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              A collection of projects spanning libraries, applications, and
              open-source contributions.
            </p>
          </section>

          <section className="mt-12">
            <div>
              {projects.length < 0 ? (
                projects.map((project) => (
                  <ProjectCard key={project.title} {...project} />
                ))
              ) : (
                <EmptyState
                  title="No Projects"
                  description="Ideally, you wouldn't be seeing this"
                />
              )}
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}
