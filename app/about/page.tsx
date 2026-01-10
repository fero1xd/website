import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="max-w-xl mx-auto w-full px-6 flex-1 flex flex-col">
        <Header />

        <main className="flex-1 py-16">
          <section>
            <h1 className="text-2xl font-bold tracking-tight text-primary">About</h1>
          </section>

          <section className="mt-8 space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              I'm Alex Chen, a designer and developer based in San Francisco. I specialize in creating minimal,
              functional digital experiences that prioritize clarity and user needs.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Currently, I'm a Senior Product Designer at <span className="text-primary">Studio</span>, where I lead
              design for our core product experience. Previously, I worked with startups and agencies helping them build
              products from zero to one.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not designing, I write about the craft on my blog, contribute to open-source projects, and
              experiment with new technologies and creative tools.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-sm font-mono text-muted-foreground uppercase tracking-wider">Experience</h2>
            <div className="mt-6 space-y-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-base font-medium">Senior Product Designer</h3>
                  <p className="text-sm text-muted-foreground">Studio</p>
                </div>
                <span className="text-sm text-muted-foreground font-mono">2022–</span>
              </div>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-base font-medium">Product Designer</h3>
                  <p className="text-sm text-muted-foreground">Craft Labs</p>
                </div>
                <span className="text-sm text-muted-foreground font-mono">2020–22</span>
              </div>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-base font-medium">UI/UX Designer</h3>
                  <p className="text-sm text-muted-foreground">Freelance</p>
                </div>
                <span className="text-sm text-muted-foreground font-mono">2018–20</span>
              </div>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-sm font-mono text-muted-foreground uppercase tracking-wider">Contact</h2>
            <div className="mt-6">
              <p className="text-muted-foreground leading-relaxed">
                Feel free to reach out at{" "}
                <a href="mailto:hello@alexchen.dev" className="text-primary hover:underline">
                  hello@alexchen.dev
                </a>{" "}
                or connect on{" "}
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Twitter
                </a>
                .
              </p>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  )
}
