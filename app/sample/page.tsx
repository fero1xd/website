import { Header } from "@/components/header";
import Welcome from "./blog.mdx";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { revalidateDynamic } from "./actions";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="max-w-xl mx-auto w-full px-6 flex-1 flex flex-col">
        <Header />

        <main className="flex-1 py-16">
          <Link
            href="/dynamic"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to blog
          </Link>
          <button onClick={revalidateDynamic}>Revalidate /dynamic</button>

          <article className="mt-8">
            <header>
              <time className="text-sm font-mono text-muted-foreground">
                December 15, 2024
              </time>
              <h1 className="mt-2 text-2xl tracking-tight text-primary font-bold">
                On Designing with Constraints
              </h1>
            </header>

            <div className="mt-8 prose dark:prose-invert prose-h1:text-xl">
              <Welcome />
            </div>
          </article>
        </main>
      </div>
    </div>
  );
}
