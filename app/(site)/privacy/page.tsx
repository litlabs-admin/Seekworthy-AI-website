import type { Metadata } from "next";
import { Placeholder } from "@/components/ui/Placeholder";

export const metadata: Metadata = { title: "Privacy · SeekWorthy AI", robots: { index: false } };

export default function Page() {
  return <Placeholder title="Privacy" />;
}
