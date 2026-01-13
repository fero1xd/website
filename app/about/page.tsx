import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { EmptyState } from "@/components/empty-state";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="max-w-3xl mx-auto w-full px-6 flex-1 flex flex-col">
        <Header />

        <main className="flex-1 py-16">
          <section>
            <h1 className="text-2xl font-bold tracking-tight text-primary">
              About
            </h1>
          </section>

          <section className="mt-8 space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              I'm Pranjal Butola, a 19 year old university student based in
              Uttarakhand, India.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Currently in my second year, I spend most of my time diving into
              backend engineering and figuring out how things work under the
              hood.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding or studying, I'm usually playing video games
              or writing about whatever I'm into at the moment, whether that's a
              new tech stack I'm exploring or something completely random things
              that caught my attention.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-sm font-mono text-muted-foreground uppercase tracking-wider">
              Experience
            </h2>
            <div className="mt-6 space-y-6">
              <EmptyState
                title="No Experience"
                description="Ideally, you wouldn't be seeing this"
              />
            </div>
            {/* <div className="mt-6 space-y-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-base font-medium">
                    Senior Product Designer
                  </h3>
                  <p className="text-sm text-muted-foreground">Studio</p>
                </div>
                <span className="text-sm text-muted-foreground font-mono">
                  2022–
                </span>
              </div>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-base font-medium">Product Designer</h3>
                  <p className="text-sm text-muted-foreground">Craft Labs</p>
                </div>
                <span className="text-sm text-muted-foreground font-mono">
                  2020–22
                </span>
              </div>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-base font-medium">UI/UX Designer</h3>
                  <p className="text-sm text-muted-foreground">Freelance</p>
                </div>
                <span className="text-sm text-muted-foreground font-mono">
                  2018–20
                </span>
              </div>
            </div> */}
          </section>

          <section className="mt-12">
            <h2 className="text-sm font-mono text-muted-foreground uppercase tracking-wider">
              Contact
            </h2>
            <div className="mt-6">
              <p className="text-muted-foreground leading-relaxed">
                Feel free to reach out at{" "}
                <a
                  href="mailto:pranjalbutola12@gmail.com"
                  className="text-primary hover:underline"
                >
                  pranalbutola12@gmail.com
                </a>{" "}
                or connect on{" "}
                <a
                  href="https://x.com/pranjal_fxd_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  X
                </a>
                .
              </p>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}
