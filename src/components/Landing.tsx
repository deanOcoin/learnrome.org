// first-visit overlay offering the guided paths, reachable afterwards via "Tours"

import { useMemo } from 'react';
import { TOURS } from '../data/tours';
import { EVENTS, eventIndexById } from '../data/events';
import { formatYear } from '../types';
import { Veil, SheetHeader, SpanBar, roman } from './ui';

interface Props {
  firstVisit: boolean;
  onStartTour: (tourId: string) => void;
  onSurprise: () => void;
  onGlance: () => void;
  onMisconceptions: () => void;
  onClose: () => void;
}

export default function Landing({
  firstVisit,
  onStartTour,
  onSurprise,
  onGlance,
  onMisconceptions,
  onClose,
}: Props) {
  const paths = useMemo(
    () =>
      TOURS.map((t) => {
        const years = t.eventIds
          .map(eventIndexById)
          .filter((i) => i >= 0)
          .map((i) => EVENTS[i])
          .flatMap((e) => [e.year, e.yearEnd ?? e.year]);
        return {
          ...t,
          stops: t.eventIds.filter((id) => eventIndexById(id) >= 0).length,
          from: Math.min(...years),
          to: Math.max(...years),
        };
      }),
    []
  );

  return (
    <Veil onClose={onClose} label="Guided tours">
      <div
        className="plate plate-in my-0 flex h-full max-h-none w-full sm:my-auto sm:h-auto sm:max-h-[94dvh] max-w-3xl flex-col rounded-none border-0 bg-panel sm:rounded-lg sm:border sm:border-line shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="shrink-0 px-5 pt-5 sm:px-7 sm:pt-6">
          <SheetHeader
            eyebrow="Guided Paths"
            title="Choose a Path"
            subtitle={
              firstVisit
                ? 'Roman history, 1000 BCE to 476 CE, on a map that redraws itself as you move through time. Start anywhere — each path runs inside the normal interface, and you can leave it at any point.'
                : 'Seven curated routes through the corpus. Each runs inside the normal interface; leave whenever you like.'
            }
            onClose={onClose}
          />
        </div>

        <div className="scroll-slim fade-b min-h-0 flex-1 overflow-y-auto px-5 pb-1 pt-4 sm:px-7">
          <div className="grid gap-2.5 sm:grid-cols-2">
          {paths.map((t, i) => (
            <button
              key={t.id}
              onClick={() => onStartTour(t.id)}
              className="plate plate-hover group rounded-md border border-line bg-panel-2/70 px-4 py-3.5 text-left transition-colors hover:border-accent/45 hover:bg-panel-2"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="tnum text-[10.5px] tracking-[0.18em] text-accent/70">{roman(i)}</span>
                <span className="tnum text-[10.5px] text-ink-dim">
                  {t.stops} stops · ~{t.minutes} min
                </span>
              </div>
              <div
                className="mt-1.5 text-[15.5px] leading-snug text-ink transition-colors group-hover:text-accent"
                style={{ fontFamily: 'var(--font-display)', fontWeight: 600, letterSpacing: '-0.008em' }}
              >
                {t.title}
              </div>
              <p className="prose-body mt-1 text-[12.5px] leading-snug text-ink-dim">{t.pitch}</p>
              <div className="mt-3">
                {/* on the timeline's own scale, so the slice is visible before choosing */}
                <SpanBar from={t.from} to={t.to} />
                <div className="tnum mt-1 flex justify-between text-[10px] text-ink-dim/80">
                  <span>{formatYear(t.from)}</span>
                  <span>{formatYear(t.to)}</span>
                </div>
              </div>
            </button>
            ))}
          </div>
        </div>

        <div className="shrink-0 px-5 pb-5 sm:px-7 sm:pb-6">
          <div className="rule-ticks" />
          <div className="mt-3.5 flex flex-wrap items-center gap-2 text-[12.5px]">
            <button
              onClick={onClose}
              className="rounded-md border border-accent/45 bg-accent/12 px-3.5 py-1.5 font-medium text-accent transition-colors hover:border-accent/80 hover:bg-accent/20"
            >
              Explore freely
            </button>
            <button
              onClick={onGlance}
              className="rounded-md border border-line bg-panel-2 px-3 py-1.5 text-ink-dim transition-colors hover:border-line-bright hover:text-ink"
            >
              Rome at a Glance
            </button>
            <button
              onClick={onMisconceptions}
              className="hidden rounded-md border border-line bg-panel-2 px-3 py-1.5 text-ink-dim transition-colors hover:border-line-bright hover:text-ink sm:block"
            >
              What You Probably Had Wrong
            </button>
            <button
              onClick={onSurprise}
              className="ml-auto rounded-md border border-line px-3 py-1.5 text-ink-dim transition-colors hover:border-line-bright hover:text-ink"
            >
              Surprise me →
            </button>
          </div>

          {/* same footnote scale as the About sheet's credits */}
          <p className="mt-3.5 text-[11px] leading-relaxed text-ink-dim">
            Maintained by <span className="text-ink">Dean Mostafa</span>
          </p>
        </div>
      </div>
    </Veil>
  );
}
