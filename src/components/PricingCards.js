import Link from "next/link";
import { Check, Download } from "lucide-react";
import { siteContent } from "@/content/site";

export default function PricingCards({ compact = false }) {
  const maxFeatureCount = Math.max(...siteContent.plans.map((plan) => plan.features.length));

  return (
    <div className={compact ? "pricing-grid pricing-grid-compact" : "pricing-grid"}>
      {siteContent.plans.map((plan) => (
        <article className={plan.featured ? "price-card price-card-featured" : "price-card"} key={plan.name}>
          <div className="price-card-top">
            <span>{plan.name}</span>
            {plan.featured ? <strong>Populaire</strong> : null}
          </div>
          <div className="price-line">
            <strong>{plan.price}</strong>
            <span>{plan.period}</span>
          </div>
          <p className="price-summary">{plan.summary}</p>
          <ul>
            {plan.features.map((feature) => (
              <li key={feature}>
                <Check aria-hidden="true" />
                <span>{feature}</span>
              </li>
            ))}
            {Array.from({ length: maxFeatureCount - plan.features.length }).map((_, index) => (
              <li className="price-feature-empty" aria-hidden="true" key={`empty-${index}`}>
                <Check />
                <span>&nbsp;</span>
              </li>
            ))}
          </ul>
          {!compact ? <p className="plan-limit">{plan.limits}</p> : null}
          <Link className={plan.featured ? "button button-primary" : "button button-dark"} href="/telechargement">
            <Download aria-hidden="true" />
            {plan.cta}
          </Link>
        </article>
      ))}
    </div>
  );
}
