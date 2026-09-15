import React from 'react';
import { Sparkles, Terminal, Sun, Cloud, CloudRain, Layers, ShieldCheck, Activity } from 'lucide-react';

interface DemoProps {
  demoType: 'dsa' | 'crypto' | 'weather' | 'satellite';
}

export const ProjectDemoPreview: React.FC<DemoProps> = ({ demoType }) => {
  // Demo 1: BitwiseBeast (DSA AI Visualizer)
  if (demoType === 'dsa') {
    return <DSADemoPreview />;
  }

  // Demo 2: CryptoVision Institutional Terminal
  if (demoType === 'crypto') {
    return <CryptoDemoPreview />;
  }

  // Demo 3: Weather Dashboard
  if (demoType === 'weather') {
    return <WeatherDemoPreview />;
  }

  // Demo 4: Studio AI Satellite EO
  return <SatelliteDemoPreview />;
};

// ----------------------------------------------------
// 1. BitwiseBeast DSA Visualizer Simulation
// ----------------------------------------------------
const DSADemoPreview: React.FC = () => {
  const array = [2, 7, 11, 15];
  const target = 9;

  return (
    <div className="w-full h-full bg-[#090a10] rounded-2xl border border-white/10 overflow-hidden flex flex-col font-mono text-xs text-slate-300 select-none">
      {/* Top IDE Window Header */}
      <div className="bg-[#121420] px-4 py-2.5 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <span className="text-slate-400 font-sans font-semibold text-xs ml-2">BitwiseBeast — TwoSum.ts</span>
        </div>
        <div className="flex items-center gap-2 bg-cyan-500/10 text-cyan-400 px-2.5 py-1 rounded-md text-[11px] font-sans font-medium">
          <Sparkles className="w-3 h-3" />
          <span>AI Mentor Active</span>
        </div>
      </div>

      {/* Editor & Visualization Body */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-0 flex-1 p-4">
        {/* Left: Memory Array Pointer Visualizer */}
        <div className="md:col-span-7 p-3 space-y-4 border-r border-white/5 flex flex-col justify-between">
          <div>
            <div className="text-slate-400 mb-2 flex items-center justify-between">
              <span>Target: <strong className="text-emerald-400">{target}</strong></span>
              <span className="text-[10px] text-cyan-400">Pattern: HashMap / Two Pointers</span>
            </div>

            {/* Array Boxes */}
            <div className="flex gap-2 my-4">
              {array.map((val, idx) => {
                const isLeft = idx === 0;
                const isRight = idx === 1;
                const isMatch = isLeft || isRight;

                return (
                  <div
                    key={idx}
                    className={`flex-1 h-14 rounded-xl border flex flex-col items-center justify-center transition-all ${
                      isMatch
                        ? 'bg-cyan-500/20 border-cyan-400 text-white shadow-lg shadow-cyan-500/20 scale-105'
                        : 'bg-white/5 border-white/10 text-slate-400'
                    }`}
                  >
                    <span className="text-sm font-bold">{val}</span>
                    <span className="text-[9px] text-slate-500">idx: {idx}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* AI Execution Log */}
          <div className="bg-black/40 rounded-xl p-3 border border-white/5 space-y-1 text-[11px]">
            <div className="text-cyan-400 font-semibold flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5" />
              <span>Step 2: HashMap Match Found</span>
            </div>
            <p className="text-slate-300 font-sans">
              Complement (9 - 2 = 7) exists at index 1. Return [0, 1]. Time O(N).
            </p>
          </div>
        </div>

        {/* Right: AI Guidance Drawer */}
        <div className="md:col-span-5 p-3 bg-white/[0.02] flex flex-col justify-between">
          <div className="space-y-2">
            <div className="text-xs font-bold text-white flex items-center gap-1.5 font-sans">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Adaptive AI Hint</span>
            </div>
            <p className="text-[11px] text-slate-400 font-sans leading-relaxed">
              "Notice how checking for the complement target - num[i] eliminates the outer nested loop."
            </p>
          </div>

          <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[10px] text-slate-500">
            <span>Progress: 85%</span>
            <span className="text-emerald-400 font-bold">Solved</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// ----------------------------------------------------
// 2. CryptoVision Institutional Terminal Simulation
// ----------------------------------------------------
const CryptoDemoPreview: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#090a10] rounded-2xl border border-white/10 overflow-hidden flex flex-col font-mono text-xs text-slate-300 select-none">
      {/* Top Terminal Header */}
      <div className="bg-[#121420] px-4 py-2.5 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <span className="text-white font-sans font-bold text-xs ml-1 flex items-center gap-1.5">
            <Activity className="w-3.5 h-3.5 text-indigo-400" />
            CryptoVision v2.5 — Terminal
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="hidden sm:inline-block text-[10px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded font-sans font-semibold">
            BULLISH 74%
          </span>
          <div className="flex items-center gap-1 text-[11px] text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="font-sans font-medium text-[10px]">Telemetry Live</span>
          </div>
        </div>
      </div>

      {/* Terminal Workspace Body */}
      <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
        {/* Asset Ticker & Anti-Hype Reality Score */}
        <div className="flex items-center justify-between font-sans">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-white font-bold text-sm">Bitcoin</span>
              <span className="text-slate-400 text-xs font-mono">BTC/USD</span>
              <span className="text-[10px] bg-emerald-500/15 text-emerald-400 font-mono px-1.5 py-0.5 rounded font-semibold">
                +5.42% 24h
              </span>
            </div>
            <div className="text-xl sm:text-2xl font-black text-white font-mono tracking-tight mt-0.5">
              $68,420.50
            </div>
          </div>

          <div className="flex flex-col items-end">
            <div className="flex items-center gap-1 bg-indigo-500/15 text-indigo-300 border border-indigo-500/30 px-2.5 py-1 rounded-lg text-xs font-bold font-sans">
              <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />
              <span>Reality Score: 94/100</span>
            </div>
            <span className="text-[10px] text-slate-400 font-mono mt-1">
              0 Whitepaper Contradictions
            </span>
          </div>
        </div>

        {/* Simulated Institutional SVG Chart with 20-SMA Cross & RSI */}
        <div className="w-full h-24 sm:h-28 relative flex items-end bg-gradient-to-b from-indigo-950/20 to-transparent rounded-xl border border-white/5 p-2">
          {/* Subtle Grid Lines */}
          <div className="absolute inset-0 flex flex-col justify-between pointer-events-none p-2 opacity-15">
            <div className="border-b border-dashed border-white" />
            <div className="border-b border-dashed border-white" />
            <div className="border-b border-dashed border-white" />
          </div>

          <svg className="w-full h-full overflow-visible" viewBox="0 0 300 80">
            <defs>
              <linearGradient id="cryptoVisionGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#6366f1" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#6366f1" stopOpacity="0.0" />
              </linearGradient>
            </defs>

            {/* Gradient Area */}
            <path
              d="M 0 65 Q 40 45, 90 52 T 180 32 T 240 22 T 300 12 L 300 80 L 0 80 Z"
              fill="url(#cryptoVisionGrad)"
            />

            {/* 20-SMA Moving Average Line */}
            <path
              d="M 0 68 Q 60 55, 120 48 T 220 35 T 300 20"
              fill="none"
              stroke="#06b6d4"
              strokeWidth="1.5"
              strokeDasharray="3 3"
              opacity="0.7"
            />

            {/* Price Line */}
            <path
              d="M 0 65 Q 40 45, 90 52 T 180 32 T 240 22 T 300 12"
              fill="none"
              stroke="#818cf8"
              strokeWidth="2.5"
            />

            {/* Active Telemetry Point */}
            <circle cx="300" cy="12" r="4" fill="#a5b4fc" />
            <circle cx="300" cy="12" r="7" fill="#818cf8" className="animate-ping opacity-75" />
          </svg>

          {/* Floating Chart Tag */}
          <div className="absolute top-2 left-3 text-[10px] font-mono text-cyan-400 bg-black/60 px-2 py-0.5 rounded border border-white/10">
            20-SMA Cross &bull; RSI 58.4
          </div>
        </div>

        {/* Institutional Telemetry Metric Matrix */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-sans pt-2 border-t border-white/5 text-[11px]">
          <div className="bg-white/5 p-2 rounded-lg border border-white/5">
            <span className="text-slate-400 block text-[9px] uppercase font-mono">Verified TVL</span>
            <span className="text-white font-bold font-mono text-xs">$84.20B</span>
          </div>
          <div className="bg-white/5 p-2 rounded-lg border border-white/5">
            <span className="text-slate-400 block text-[9px] uppercase font-mono">24h Volume</span>
            <span className="text-white font-bold font-mono text-xs">$34.85B</span>
          </div>
          <div className="bg-white/5 p-2 rounded-lg border border-white/5">
            <span className="text-slate-400 block text-[9px] uppercase font-mono">FDV / Float</span>
            <span className="text-emerald-400 font-bold font-mono text-xs">1.04x (Clean)</span>
          </div>
          <div className="bg-white/5 p-2 rounded-lg border border-white/5">
            <span className="text-slate-400 block text-[9px] uppercase font-mono">Structural Risk</span>
            <span className="text-cyan-300 font-bold font-mono text-xs">0 Red Flags</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// ----------------------------------------------------
// 3. Weather Dashboard Simulation
// ----------------------------------------------------
const WeatherDemoPreview: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#090a10] rounded-2xl border border-white/10 overflow-hidden flex flex-col font-sans text-xs text-slate-300 select-none">
      <div className="bg-[#121420] px-4 py-2.5 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sun className="w-4 h-4 text-amber-400" />
          <span className="text-white font-bold text-xs">Weather Dashboard</span>
        </div>
        <div className="flex items-center gap-1 text-slate-400 bg-white/5 px-2 py-0.5 rounded text-[10px]">
          <span>San Francisco, CA</span>
        </div>
      </div>

      <div className="p-4 space-y-4 flex-1 flex flex-col justify-between">
        {/* Main Weather Card */}
        <div className="flex items-center justify-between bg-gradient-to-r from-blue-600/20 to-cyan-500/20 p-4 rounded-xl border border-cyan-500/20">
          <div>
            <div className="text-3xl font-extrabold text-white font-mono">72°F</div>
            <div className="text-cyan-300 text-xs font-medium">Partly Cloudy</div>
          </div>
          <Sun className="w-10 h-10 text-amber-400 animate-spin-slow" />
        </div>

        {/* Forecast Days */}
        <div className="grid grid-cols-4 gap-2 text-center text-[11px]">
          {[
            { day: 'Mon', temp: '74°', icon: Sun },
            { day: 'Tue', temp: '68°', icon: Cloud },
            { day: 'Wed', temp: '65°', icon: CloudRain },
            { day: 'Thu', temp: '71°', icon: Sun },
          ].map((item) => {
            const IconComp = item.icon;
            return (
              <div key={item.day} className="bg-white/5 p-2 rounded-lg border border-white/5">
                <span className="text-slate-400 block text-[10px]">{item.day}</span>
                <IconComp className="w-4 h-4 mx-auto my-1 text-cyan-400" />
                <span className="text-white font-bold font-mono">{item.temp}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// ----------------------------------------------------
// 4. Studio AI Earth Observation Simulation
// ----------------------------------------------------
const SatelliteDemoPreview: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#090a10] rounded-2xl border border-white/10 overflow-hidden flex flex-col font-sans text-xs text-slate-300 select-none">
      <div className="bg-[#121420] px-4 py-2.5 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-emerald-400" />
          <span className="text-white font-bold text-xs">Studio AI — Earth Observation</span>
        </div>
        <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
          NDVI Mask Active
        </span>
      </div>

      {/* Simulated Satellite Map View with AI Vector Mask */}
      <div className="relative flex-1 bg-slate-900 overflow-hidden">
        {/* Synthetic Terrain Texture */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/60 via-slate-900 to-cyan-950/60 bg-dots-pattern" />

        {/* Vector AI Mask Poly Overlay */}
        <svg className="absolute inset-0 w-full h-full opacity-60">
          <polygon points="30,20 180,40 220,110 80,120" fill="rgba(16, 185, 129, 0.3)" stroke="#10b981" strokeWidth="2" />
          <polygon points="190,10 290,30 270,90 210,70" fill="rgba(6, 182, 212, 0.3)" stroke="#06b6d4" strokeWidth="2" />
        </svg>

        {/* Split Comparison Slider Line */}
        <div className="absolute top-0 bottom-0 left-1/2 w-[2px] bg-cyan-400 shadow-lg shadow-cyan-400 flex items-center justify-center">
          <div className="w-6 h-6 rounded-full bg-cyan-400 text-slate-950 flex items-center justify-center font-bold text-[10px] shadow-md">
            ↔
          </div>
        </div>

        {/* Floating AI Analytics Badge */}
        <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-md p-2.5 rounded-lg border border-white/10 font-mono text-[10px] space-y-1">
          <div className="text-emerald-400 font-bold">Vegetation Index: 0.82</div>
          <div className="text-slate-400">Resolution: 10m Sentinel-2</div>
        </div>
      </div>
    </div>
  );
};
