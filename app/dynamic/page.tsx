import { cacheTag } from "next/cache";
import Link from "next/link";
import { connection } from "next/server";
import { Suspense } from "react";

export default async function Page() {
  return (
    <div>
      <header>
        <h1>HEADER</h1>
      </header>
      <Link href="/sample">Sample</Link>

      <Suspense fallback={<h1>Loading...</h1>}>
        <Body />
      </Suspense>
    </div>
  );
}

async function Body() {
  await connection();

  await sampleFetch();
  console.log("Body executed");

  return <h1>DYNAMIC CONTENT</h1>;
}

async function sampleFetch() {
  "use cache: remote";
  cacheTag("dynamic-page");
  await fetch("https://google.com");
}
