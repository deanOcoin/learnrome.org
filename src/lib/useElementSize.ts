import { useLayoutEffect, useState, type RefObject } from 'react';

export interface Size {
  w: number;
  h: number;
}

// the sync getBoundingClientRect on mount matters: ResizeObserver's first callback
// can never arrive (headless views, viewport resized to 0 and back) and a component
// that bails on zero size would then never render. window resize is the second belt.
export function useElementSize(ref: RefObject<HTMLElement | null>): Size {
  const [size, setSize] = useState<Size>({ w: 0, h: 0 });

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const apply = (w: number, h: number) =>
      setSize((prev) => (prev.w === w && prev.h === h ? prev : { w, h }));

    const measure = () => {
      const r = el.getBoundingClientRect();
      apply(Math.round(r.width), Math.round(r.height));
    };

    measure();

    const ro = new ResizeObserver((entries) => {
      const r = entries[0].contentRect;
      apply(Math.round(r.width), Math.round(r.height));
    });
    ro.observe(el);
    window.addEventListener('resize', measure);

    return () => {
      ro.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, [ref]);

  return size;
}
