import { engines, site } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { EngineIcons } from "@/components/ui/EngineLogo";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonRow, SectionHead } from "@/components/ui/SectionHead";
import { SectionRule } from "@/components/ui/SectionRule";

/** Template pricing: 3 plans (middle on --surface), engine row under each price, then the Enterprise row. */
export function Pricing() {
  const { pricing } = site;
  return (
    <Container id="pricing" aria-labelledby="pricing-title">
      <SectionHead id="pricing-title" headline={pricing.headline} intro={pricing.intro} />
      <SectionRule>
        <Reveal amount={0.3}>
          <ul className="grid-lines grid grid-cols-1 d:grid-cols-3">
            {pricing.plans.map((plan) => (
              <li
                key={plan.name}
                className={`flex flex-col gap-5 px-5 pb-9 pt-8 t:gap-6 t:px-8 t:py-10 ${plan.featured ? "bg-surface!" : ""}`}
              >
                <div className="flex flex-col gap-[6px]">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="t-h3 text-ink">{plan.name}</h3>
                    {plan.badge && (
                      <span className="hair hair-all hair-accent relative rounded-[6px] px-[9px] py-[3px] t-small-strong text-accent-ink">
                        {plan.badge}
                      </span>
                    )}
                  </div>
                  <p className="t-body text-body">{plan.description}</p>
                </div>

                <p className="flex items-end gap-2">
                  <span className="t-stat text-ink">{plan.price}</span>
                  <span className="t-small pb-2 text-muted">{plan.cadence}</span>
                </p>

                <EngineIcons engines={engines} size={16} gap={7} />

                <ul className="hair hair-t hair-soft relative flex flex-col gap-[10px] pt-6">
                  {plan.features.map((f) => (
                    <li key={f} className="t-body text-body">
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="flex-1" />
                <div>
                  <Button href={plan.button.href} variant={plan.featured ? "primary" : "secondary"}>
                    {plan.button.label}
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </SectionRule>
      <ButtonRow>
        <div className="flex flex-col items-start gap-4">
          <p className="t-body max-w-[640px] text-body">{pricing.enterprise}</p>
          <Button href={pricing.enterpriseButton.href} variant="secondary">
            {pricing.enterpriseButton.label}
          </Button>
        </div>
      </ButtonRow>
    </Container>
  );
}
