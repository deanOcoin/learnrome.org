// shared by both shells: region history when a region is selected, otherwise the event

import { useApp } from '../lib/useAppState';
import EventPanel from './EventPanel';
import RegionHistoryPanel from './RegionHistoryPanel';

export default function PanelContent({
  hideDepthToggle = false,
  bare = false,
}: {
  hideDepthToggle?: boolean;
  /** caller supplies the scroll container */
  bare?: boolean;
}) {
  const app = useApp();

  if (app.selectedRegion) {
    return (
      <RegionHistoryPanel
        region={app.selectedRegion}
        events={app.events}
        timeline={app.timeline}
        currentIndex={app.index}
        onJump={(i) => app.setIndex(i, true)}
        onClose={() => app.setSelectedRegion(null)}
        bare={bare}
      />
    );
  }

  return (
    <EventPanel
      event={app.event}
      diff={app.diff}
      events={app.events}
      onJumpToEvent={app.jumpToEventId}
      depth={app.depth}
      onDepthChange={app.setDepth}
      hideDepthToggle={hideDepthToggle}
      bare={bare}
    />
  );
}
