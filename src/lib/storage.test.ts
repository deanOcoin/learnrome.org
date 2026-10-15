import { afterEach, describe, expect, it, vi } from 'vitest';
import { readStored, writeStored, removeStored } from './storage';

/** throws on every access, like a private or blocked-storage browser */
function hostileStorage() {
  const boom = () => {
    throw new DOMException('The operation is insecure.', 'SecurityError');
  };
  vi.stubGlobal('window', { localStorage: { getItem: boom, setItem: boom, removeItem: boom } });
}

function workingStorage() {
  const map = new Map<string, string>();
  vi.stubGlobal('window', {
    localStorage: {
      getItem: (k: string) => map.get(k) ?? null,
      setItem: (k: string, v: string) => void map.set(k, v),
      removeItem: (k: string) => void map.delete(k),
    },
  });
  return map;
}

afterEach(() => vi.unstubAllGlobals());

describe('storage', () => {
  it('reads and writes normally when storage works', () => {
    workingStorage();
    writeStored('k', 'v');
    expect(readStored('k')).toBe('v');
    removeStored('k');
    expect(readStored('k')).toBeNull();
  });

  it('never throws when storage is blocked', () => {
    // the crash that matters: readStored runs during first render, so an
    // unguarded throw is a blank page for anyone browsing privately
    hostileStorage();
    expect(() => writeStored('k', 'v')).not.toThrow();
    expect(() => removeStored('k')).not.toThrow();
    expect(() => readStored('k')).not.toThrow();
  });

  it('reports a missing value rather than propagating the failure', () => {
    hostileStorage();
    expect(readStored('anything')).toBeNull();
  });
});
