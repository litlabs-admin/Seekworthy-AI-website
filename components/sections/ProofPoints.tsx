import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { CountUp } from "@/components/ui/CountUp";
import { Footnote } from "@/components/ui/SectionHead";

/** Template "Numbers": 3 stat cells (padding 56/32/48) + footnote row. */
export function ProofPoints() {
  const { proof } = site;
  return (
    <Container aria-label="Proof points">
      <ul className="grid-lines grid grid-cols-1 t:grid-cols-3">
        {proof.metrics.map((m) => (
          <li key={m.label} className="flex flex-col gap-2 px-5 pb-9 pt-10 t:px-8 t:pb-12 t:pt-14">
            <CountUp value={m.value} className="t-stat text-ink" />
            <p className="t-body text-body">{m.label}</p>
          </li>
        ))}
      </ul>
      <Footnote>{proof.supporting}</Footnote>
    </Container>
  );
}
