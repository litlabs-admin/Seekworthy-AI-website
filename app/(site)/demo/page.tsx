import type { Metadata } from "next";
import { Placeholder } from "@/components/ui/Placeholder";

export const metadata: Metadata = { title: "Book a demo · SeekWorthy AI", robots: { index: false } };

export default function Page() {
  return <Placeholder title="Book a demo" />;
}
