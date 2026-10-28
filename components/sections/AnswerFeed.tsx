import { engines, site } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { EngineLogo } from "@/components/ui/EngineLogo";
import { LiveDot } from "@/components/ui/LiveDot";
import { Pill } from "@/components/ui/Pill";
import { Reveal } from "@/components/ui/Reveal";

/** Template columns Engine 170 · Prompt · Result · Status 112, gap 20. Result is widened (1.25fr) so the longer SeekWorthy results stay on one line like the template rows. */
const ROW = "d:grid d:grid-cols-[170px_minmax(0,1fr)_minmax(0,1.25fr)_112px] d:gap-5 d:px-8";

export function AnswerFeed() {
  const { feed } = site;
  return (
    <Container aria-labelledby="feed-title" railsClassName="bg-surface">
      <div className="hair hair-b relative flex flex-col gap-1 px-5 py-[18px] t:flex-row t:items-center t:justify-between t:gap-5 t:px-8">
        <div className="flex items-center gap-2">
          <LiveDot />
          <h2 id="feed-title" className="t-ui text-ink">
            {feed.title}
          </h2>
        </div>
        <p className="t-small text-muted">{feed.detail}</p>
      </div>

      <table className="block w-full" role="table" aria-labelledby="feed-title">
        <thead className="hidden d:block" role="rowgroup">
          <tr className={`hair hair-b hair-soft relative py-3 ${ROW}`} role="row">
            <th role="columnheader" className="t-small text-left font-normal text-muted">{feed.columns.engine}</th>
            <th role="columnheader" className="t-small text-left font-normal text-muted">{feed.columns.prompt}</th>
            <th role="columnheader" className="t-small text-left font-normal text-muted">{feed.columns.result}</th>
            <th role="columnheader" className="t-small text-right font-normal text-muted">{feed.columns.status}</th>
          </tr>
        </thead>
        <tbody className="flex flex-col gap-px bg-line-soft" role="rowgroup">
          {feed.rows.map((row, i) => {
            const engine = engines.find((e) => e.id === row.engine) ?? engines[0]!;
            return (
              <Reveal
                key={i}
                as="tr"
                role="row"
                y={10}
                duration={0.5}
                delay={i * 0.15}
                className={`grid grid-cols-[1fr_auto] gap-x-2 gap-y-[10px] bg-surface px-5 py-[22px] t:px-5 d:items-center d:py-[18px] ${ROW}`}
              >
                <td role="cell" className="col-start-1 row-start-1 flex items-center d:col-auto d:row-auto">
                  <EngineLogo engine={engine} size="default" />
                </td>
                <td role="cell" className="col-span-2 row-start-2 t-body text-ink d:col-auto d:row-auto">
                  {row.prompt}
                </td>
                <td role="cell" className="col-span-2 row-start-3 t-body text-body d:col-auto d:row-auto">
                  {row.result}
                </td>
                <td role="cell" className="col-start-2 row-start-1 flex justify-end d:col-auto d:row-auto">
                  <Pill status={row.status} />
                </td>
              </Reveal>
            );
          })}
        </tbody>
      </table>

      <div className="hair hair-t hair-soft relative px-5 py-4 t:px-8 t:py-[14px]">
        <p className="t-small text-muted">{feed.note}</p>
      </div>
    </Container>
  );
}
