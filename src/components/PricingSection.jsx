import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: '$19',
    cadence: '/mo',
    highlight: false,
    features: [
      '1 Agent seat',
      '100 runs / month',
      'Email + Docs actions',
      'Community support',
    ],
  },
  {
    name: 'Growth',
    price: '$49',
    cadence: '/mo',
    highlight: true,
    features: [
      '5 Agent seats',
      '1,500 runs / month',
      'CRM + Data warehouse',
      'Priority support',
    ],
  },
  {
    name: 'Scale',
    price: 'Custom',
    cadence: '',
    highlight: false,
    features: [
      'Unlimited seats',
      'Unlimited runs',
      'SAML SSO + Audit',
      'Dedicated success',
    ],
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="relative bg-[#0b0b0c] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Simple, transparent pricing</h2>
          <p className="mt-4 text-base text-gray-300">Start free and scale with usage. Cancel anytime.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl border bg-white/5 p-6 ${
                tier.highlight ? 'border-amber-400/40 ring-2 ring-amber-400/30' : 'border-white/10'
              }`}
            >
              <div className="mb-2 text-sm font-semibold uppercase tracking-wider text-gray-300">{tier.name}</div>
              <div className="flex items-baseline gap-2">
                <div className="text-4xl font-extrabold text-white">{tier.price}</div>
                <div className="text-sm text-gray-400">{tier.cadence}</div>
              </div>
              <ul className="mt-6 space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-200">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-amber-500/15 text-amber-300 ring-1 ring-amber-400/30">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#cta"
                className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
                  tier.highlight
                    ? 'bg-gradient-to-r from-yellow-400 to-amber-600 text-black shadow-lg shadow-amber-500/25'
                    : 'bg-white/10 text-white ring-1 ring-white/10 hover:bg-white/15'
                }`}
              >
                {tier.highlight ? 'Start free trial' : 'Choose plan'}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
