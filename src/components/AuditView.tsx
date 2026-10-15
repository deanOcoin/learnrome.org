// dev-only region x event heatmap, reached via ?dev=audit. white outlines mark
// the events where a region's status changed.

import { useEffect, useMemo, useRef, useState } from 'react';
import { EVENTS } from '../data/events';
import { REGION_META } from '../data/regionMeta';
import { buildControlTimeline } from '../lib/resolveControl';
import { ALL_REGION_IDS, STATUS_LABEL, formatYear, type ControlStatus, type RegionId } from '../types';

const CELL_W = 5;
const CELL_H = 10;
const LEFT = 150;
const TOP = 40;

const AUDIT_COLORS: Record<ControlStatus, string> = {
  core: '#d9a441',
  provincial: '#a97e3e',
  client: '#77613d',
  contested: '#544a3a',
  transient: '#b08a55',
  breakaway: '#c9a227',
  lost: '#3a3226',
  unshown: '#1a1f2b',
  'rival-carthage': '#7c4a6e',
  'rival-hellenistic': '#3e6b7a',
  'rival-parthia': '#4a5a8c',
  'rival-celtic': '#3f7d5a',
  'rival-germanic': '#56647a',
  'rival-steppe': '#5f6e52',
};

export default function AuditView() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hover, setHover] = useState<{ r: number; c: number } | null>(null);

  const tl = useMemo(() => buildControlTimeline(EVENTS), []);
  const regions = ALL_REGION_IDS;
  const W = LEFT + EVENTS.length * CELL_W + 20;
  const H = TOP + regions.length * CELL_H + 20;

  useEffect(() => {
    const canvas = canvasRef.current!;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    const ctx = canvas.getContext('2d')!;
    ctx.scale(dpr, dpr);
    ctx.fillStyle = '#0d1321';
    ctx.fillRect(0, 0, W, H);

    // decade markers
    ctx.fillStyle = '#9a94a6';
    ctx.font = '9px Inter, sans-serif';
    EVENTS.forEach((e, c) => {
      if (c % 12 === 0) {
        ctx.save();
        ctx.translate(LEFT + c * CELL_W + 3, TOP - 6);
        ctx.rotate(-Math.PI / 4);
        ctx.fillText(formatYear(e.year), 0, 0);
        ctx.restore();
      }
    });

    regions.forEach((rid, r) => {
      // row label
      ctx.fillStyle = '#9a94a6';
      ctx.textAlign = 'right';
      ctx.fillText(REGION_META[rid]?.name ?? rid, LEFT - 6, TOP + r * CELL_H + CELL_H - 2);
      ctx.textAlign = 'left';

      for (let c = 0; c < EVENTS.length; c++) {
        const status = tl.stateAt(c)[rid];
        ctx.fillStyle = AUDIT_COLORS[status];
        ctx.fillRect(LEFT + c * CELL_W, TOP + r * CELL_H, CELL_W - 1, CELL_H - 1);
        if (tl.diffAt(c).some((d) => d.region === rid)) {
          ctx.strokeStyle = '#e8e3d8';
          ctx.lineWidth = 1;
          ctx.strokeRect(LEFT + c * CELL_W + 0.5, TOP + r * CELL_H + 0.5, CELL_W - 2, CELL_H - 2);
        }
      }
    });
  }, [tl, regions, W, H]);

  const hoverInfo = useMemo(() => {
    if (!hover) return null;
    const rid = regions[hover.r] as RegionId | undefined;
    const e = EVENTS[hover.c];
    if (!rid || !e) return null;
    const status = tl.stateAt(hover.c)[rid];
    const change = tl.diffAt(hover.c).find((d) => d.region === rid);
    return { rid, e, status, change };
  }, [hover, regions, tl]);

  return (
    <div className="h-full overflow-auto bg-sea p-4">
      <div className="mb-2 flex items-baseline gap-4">
        <h1 className="text-lg text-ink" style={{ fontFamily: 'var(--font-display)' }}>
          Control audit — {EVENTS.length} events × {regions.length} regions
        </h1>
        <a href="/" className="text-sm text-accent hover:underline">
          ← back to the app
        </a>
        {hoverInfo && (
          <span className="text-xs text-ink-dim">
            <b className="text-ink">{REGION_META[hoverInfo.rid]?.name}</b> at{' '}
            <span className="tnum">{formatYear(hoverInfo.e.year)}</span> ({hoverInfo.e.id}):{' '}
            <b className="text-ink">{STATUS_LABEL[hoverInfo.status]}</b>
            {hoverInfo.change && (
              <span className="text-accent"> ← changed here from {STATUS_LABEL[hoverInfo.change.from]}</span>
            )}
          </span>
        )}
      </div>
      <canvas
        ref={canvasRef}
        style={{ width: W, height: H, imageRendering: 'pixelated' }}
        onMouseMove={(ev) => {
          const rect = ev.currentTarget.getBoundingClientRect();
          const x = ev.clientX - rect.left - LEFT;
          const y = ev.clientY - rect.top - TOP;
          if (x < 0 || y < 0) return setHover(null);
          const c = Math.floor(x / CELL_W);
          const r = Math.floor(y / CELL_H);
          if (c >= EVENTS.length || r >= regions.length) return setHover(null);
          setHover({ r, c });
        }}
        onMouseLeave={() => setHover(null)}
        onClick={() => {
          if (hoverInfo) window.location.href = `/?e=${hoverInfo.e.id}`;
        }}
      />
    </div>
  );
}
