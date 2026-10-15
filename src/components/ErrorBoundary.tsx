// a render throw unmounts the whole tree. since position is persisted, a plain
// reload can land back on the crashing event, so "start clean" also wipes URL and storage.

import { Component, type ErrorInfo, type ReactNode } from 'react';
import { removeStored } from '../lib/storage';

interface Props {
  children: ReactNode;
}
interface State {
  error: Error | null;
}

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // no analytics endpoint, the console is all a developer will have
    console.error('LearnRome crashed:', error, info.componentStack);
  }

  private startClean = () => {
    removeStored('learnrome:last-event');
    removeStored('learnrome:layout');
    window.location.href = window.location.pathname;
  };

  render() {
    const { error } = this.state;
    if (!error) return this.props.children;

    return (
      <div className="flex h-full items-center justify-center bg-sea p-6">
        <div className="plate w-full max-w-md rounded-lg border border-line bg-panel p-6 text-center shadow-2xl">
          <div className="text-[10px] uppercase tracking-[0.22em] text-accent/85">Something broke</div>
          <h1
            className="mt-2 text-[24px] leading-tight text-ink"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}
          >
            The map stopped drawing
          </h1>
          <p className="prose-body mt-2 text-[13.5px] text-ink-dim">
            An unexpected error interrupted the app. Nothing you did caused it, and nothing is lost —
            the whole corpus is static and still there.
          </p>

          <div className="mt-5 flex flex-col gap-2">
            <button
              onClick={() => window.location.reload()}
              className="h-11 rounded-lg border border-accent/50 bg-accent/12 text-[13px] font-medium text-accent transition-colors hover:border-accent/80"
            >
              Reload the page
            </button>
            <button
              onClick={this.startClean}
              className="h-11 rounded-lg border border-line text-[13px] text-ink-dim transition-colors hover:text-ink"
            >
              Start clean — forget where I was
            </button>
          </div>

          <details className="mt-5 text-left">
            <summary className="cursor-pointer text-[11px] uppercase tracking-[0.16em] text-ink-dim/70">
              Technical detail
            </summary>
            <pre className="scroll-slim mt-2 max-h-40 overflow-auto whitespace-pre-wrap break-words rounded border border-line bg-panel-2 p-2 text-[11px] leading-relaxed text-ink-dim">
              {error.message}
            </pre>
          </details>
        </div>
      </div>
    );
  }
}
