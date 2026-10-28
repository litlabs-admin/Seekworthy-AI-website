import type { Metadata } from "next";
import { Placeholder } from "@/components/ui/Placeholder";

export const metadata: Metadata = { title: "Get started free · SeekWorthy AI", robots: { index: false } };

export default function Page() {
  return <Placeholder title="Get started free" />;
}
