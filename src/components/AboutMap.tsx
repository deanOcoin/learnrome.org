// the caveat stated once, properly, instead of hedging inside every event

import { Veil, SheetHeader } from './ui';

interface Props {
  onClose: () => void;
}

export default function AboutMap({ onClose }: Props) {
  return (
    <Veil onClose={onClose} label="About the map">
      <div
        className="plate plate-in scroll-slim my-0 h-full max-h-none w-full sm:my-auto sm:h-auto sm:max-h-[88dvh] max-w-lg overflow-y-auto rounded-none border-0 bg-panel sm:rounded-lg sm:border sm:border-line p-5 shadow-2xl sm:p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <SheetHeader
          eyebrow="Method"
          title="About the Map"
          subtitle="What this map can and cannot honestly claim to show."
          onClose={onClose}
        />
        <div className="prose-body mt-4 space-y-3 text-[14px] text-ink">
          <p>
            <b>Ancient borders were not lines.</b> Frontiers were zones — a road, a river, a chain of
            forts, a gradient of taxation and garrisons fading into peoples Rome influenced but did not
            administer. Any polygon map of antiquity, this one included, is a simplification drawn for
            teaching, not a survey.
          </p>
          <p>
            The regions here are a fixed set of ~70 shapes at roughly province scale, finer in Italy
            where the early Republic needs the detail. Each carries one <i>control status</i> per
            event — a judgment call compressed from messy reality. “Client state” in particular covers
            everything from near-annexation to a king who took Roman money and did as he pleased.
          </p>
          <p>
            Colors mean one thing only: the warm ramp is Roman control (brighter = firmer), cool hues
            are rival powers, hatching is Roman territory not obeying Rome, and dots mark conquests
            historians know were about to be given up.
          </p>
          <p className="text-ink-dim">
            Dates follow the conventional chronology; where tradition and evidence part ways, the
            event text says so. Every event carries its sources, and where a claim is contested the
            source note says why.
          </p>
        </div>

        <div className="rule-ticks mt-5" />
        <div className="mt-3 space-y-1.5 text-[11.5px] leading-relaxed text-ink-dim/80">
          <div className="text-[10px] uppercase tracking-[0.18em] text-ink-dim">Credits</div>
          <p>
            Coastlines derive from <span className="text-ink-dim">Natural Earth</span> (1:50m),
            released into the public domain, simplified to roughly 3 km and divided into historical
            regions written for this app. The territorial readings are the app’s own.
          </p>
          <p>
            Set in <span className="text-ink-dim">Fraunces</span>,{' '}
            <span className="text-ink-dim">Literata</span> and{' '}
            <span className="text-ink-dim">Inter</span>, used under the SIL Open Font License 1.1.
          </p>
        </div>
      </div>
    </Veil>
  );
}
