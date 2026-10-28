import Link from "next/link";
import { Container } from "./Container";

/** Placeholder for routes that live outside this marketing page (signup, login, demo, legal). */
export function Placeholder({ title }: { title: string }) {
  return (
    <main>
      <Container>
        <div className="flex min-h-[60vh] flex-col items-start justify-center gap-4 px-5 py-20 t:px-8">
          <h1 className="t-h2 text-ink">{title}</h1>
          <Link href="/" className="t-body link-accent">
            ← Back to home
          </Link>
        </div>
      </Container>
    </main>
  );
}
