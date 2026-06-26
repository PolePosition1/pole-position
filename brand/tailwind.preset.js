/* ============================================================
   POLE POSITION — Tailwind Preset
   v1.1.0  ·  "Champion" system  ·  Source of truth: brand/tokens.json
   ------------------------------------------------------------
   Usage (tailwind.config.js):
     module.exports = { presets: [require('./brand/tailwind.preset.js')] }
   Classes: bg-pp-lights-out, text-pp-gold-500, font-display,
   rounded-pp-lg, shadow-pp-glow-gold, bg-pp-gold (gradient)
   ============================================================ */

module.exports = {
  theme: {
    extend: {
      colors: {
        pp: {
          'lights-out': '#0B0D12',
          carbon:       '#15171E',
          'pit-wall':   '#1F222B',
          line:         '#2C313C',
          'flag-white': '#FFFFFF',
          'flag-black': '#0A0A0A',
          gold:  { 200:'#FFE6A8', 400:'#F4CB6A', 500:'#E9B23A', 700:'#B8780F', 900:'#3D2A07' },
          red:   { 400:'#FF5A4D', 500:'#E00000', 700:'#A60000', orange:'#FF3B00' },
          green: { 400:'#5CFFA8', 500:'#00E676', 700:'#00B85E' },
          text:  { DEFAULT:'#FFFFFF', 2:'#E8EAED', muted:'#9AA3AF', faint:'#5A626E' },
        },
      },
      fontFamily: {
        display: ['Saira', 'system-ui', 'sans-serif'],
        body:    ['Inter', 'system-ui', 'sans-serif'],
        mono:    ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      backgroundImage: {
        'pp-gold':  'linear-gradient(135deg, #FFE6A8 0%, #E9B23A 45%, #B8780F 100%)',
        'pp-speed': 'linear-gradient(135deg, #FF3B00 0%, #E00000 100%)',
      },
      borderRadius: { 'pp-sm':'6px', 'pp-md':'10px', 'pp-lg':'16px', 'pp-xl':'24px' },
      boxShadow: {
        'pp-elev-1': '0 1px 2px rgba(0,0,0,0.40)',
        'pp-elev-2': '0 4px 12px rgba(0,0,0,0.50)',
        'pp-glow-gold': '0 0 24px rgba(233,178,58,0.40)',
        'pp-glow-red':  '0 0 20px rgba(224,0,0,0.32)',
      },
    },
  },
};
