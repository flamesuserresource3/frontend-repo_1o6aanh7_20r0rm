import React from 'react';
import { Bot, Zap, Shield, Cpu } from 'lucide-react';

const features = [
  {
    icon: <Bot className="h-5 w-5 text-amber-400" />,
    title: 'Autonomous workflows',
    desc: 'Chain complex tasks across tools and let the agent execute without babysitting.'
  },
  {
    icon: <Zap className="h-5 w-5 text-amber-400" />,
    title: 'Real‑time reasoning',
    desc: 'Understands context, adapts to changes, and recovers from errors on the fly.'
  },
  {
    icon: <Shield className="h-5 w-5 text-amber-400" />,
    title: 'Guardrails & audit',
    desc: 'Granular permissions, review prompts, and complete activity logs for compliance.'
  },
  {
    icon: <Cpu className="h-5 w-5 text-amber-400" />,
    title: 'Connect your stack',
    desc: 'Native actions for email, docs, CRM, and data warehouses with simple OAuth.'
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="relative bg-[#0b0b0c] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Build once, let the agent handle the rest
          </h2>
          <p className="mt-4 text-base text-gray-300">
            Design your workflow in minutes. The agent plans, executes, and reports — safely and fast.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-b from-white/5 to-white/[0.03] p-6 transition-transform hover:-translate-y-0.5"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 ring-1 ring-amber-400/20">
                {f.icon}
              </div>
              <h3 className="text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-300">{f.desc}</p>
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100" style={{background:"radial-gradient(600px 120px at 0% 0%, rgba(251,191,36,0.09), transparent)"}} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
