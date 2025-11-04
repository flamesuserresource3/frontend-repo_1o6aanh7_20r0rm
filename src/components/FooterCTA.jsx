import React from 'react';
import { ArrowRight, Bot } from 'lucide-react';

export default function FooterCTA() {
  return (
    <section id="cta" className="relative overflow-hidden bg-[#0b0b0c] py-20">
      <div className="absolute inset-0 -z-0 opacity-40" aria-hidden>
        <div className="pointer-events-none absolute inset-x-0 top-1/2 h-64 -translate-y-1/2 bg-[radial-gradient(50%_60%_at_50%_50%,rgba(251,191,36,0.12),transparent)]" />
      </div>

      <div className="mx-auto max-w-4xl px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-200">
          <Bot className="h-4 w-4" /> Ready in minutes
        </div>
        <h3 className="mt-6 text-3xl font-bold text-white sm:text-4xl">
          Deploy your automation agent today
        </h3>
        <p className="mx-auto mt-4 max-w-2xl text-base text-gray-300">
          Plug into your favorite tools, define your guardrails, and let the agent handle the repetitive work with black‑and‑gold precision.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-yellow-400 to-amber-600 px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-amber-500/25 transition-transform hover:scale-[1.02]"
          >
            Start free trial <ArrowRight className="ml-2 h-4 w-4" />
          </a>
          <a
            href="#features"
            className="inline-flex items-center justify-center rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/10 transition-colors hover:bg-white/15"
          >
            See how it works
          </a>
        </div>
        <p className="mt-5 text-xs text-gray-400">No credit card required. Cancel anytime.</p>
      </div>

      <footer className="mx-auto mt-16 flex w-full max-w-7xl items-center justify-between px-6 text-xs text-gray-400">
        <p>© {new Date().getFullYear()} Aurea Labs. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-gray-200">Privacy</a>
          <a href="#" className="hover:text-gray-200">Terms</a>
          <a href="#" className="hover:text-gray-200">Contact</a>
        </div>
      </footer>
    </section>
  );
}
