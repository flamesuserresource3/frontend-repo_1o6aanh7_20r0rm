import React from 'react';
import Spline from '@splinetool/react-spline';
import { Bot, ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] w-full overflow-hidden bg-[#0b0b0c]">
      {/* Top navigation */}
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-2 text-white">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-yellow-400 to-amber-600">
            <Bot className="h-5 w-5 text-black" />
          </span>
          <span className="text-lg font-semibold tracking-tight">Aurea Agent</span>
        </div>
        <nav className="hidden gap-8 text-sm text-gray-300 md:flex">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#pricing" className="hover:text-white">Pricing</a>
          <a href="#cta" className="hover:text-white">Get started</a>
        </nav>
        <a
          href="#cta"
          className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-yellow-400 to-amber-600 px-4 py-2 text-sm font-semibold text-black shadow-lg shadow-amber-500/20 transition-transform hover:scale-[1.02]"
        >
          Launch Agent <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </a>
      </header>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 pb-20 pt-6 md:grid-cols-2">
        {/* Copy */}
        <div className="relative z-10">
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            Automate work with a
            <br />
            <span className="bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
              Black & Gold AI Agent
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-gray-300 md:text-lg">
            Aurea Agent connects to your tools, understands context, and executes tasks end‑to‑end. From data triage to outreach, it moves with precision so your team can move faster.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-full border border-amber-500/30 bg-amber-500/10 px-5 py-2.5 text-sm font-semibold text-amber-300 backdrop-blur transition-colors hover:bg-amber-500/20"
            >
              See pricing
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-full bg-white/10 px-5 py-2.5 text-sm font-semibold text-white ring-1 ring-white/10 backdrop-blur transition-colors hover:bg-white/15"
            >
              Explore features
            </a>
          </div>

          <div className="mt-6 text-xs uppercase tracking-wider text-gray-400">
            Trusted by lean teams shipping at lightning speed
          </div>
        </div>

        {/* 3D Spline */}
        <div className="relative h-[55vh] w-full md:h-[70vh]">
          <div className="absolute inset-0">
            <Spline
              scene="https://prod.spline.design/Geb1kGWmIba9zPiH/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
          </div>
          {/* Soft gradient vignette that doesn't block interactions */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b0b0c] via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}
