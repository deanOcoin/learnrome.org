// scored in three tiers: exact substring > all-words-prefix > subsequence

export interface FuzzyHit<T> {
  item: T;
  score: number;
}

export function fuzzyFind<T>(
  items: T[],
  text: (item: T) => string,
  query: string,
  limit = 5
): FuzzyHit<T>[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const hits: FuzzyHit<T>[] = [];
  for (const item of items) {
    const t = text(item).toLowerCase();
    let score = 0;
    const idx = t.indexOf(q);
    if (idx >= 0) {
      // earlier matches and tighter targets score higher
      score = 100 - Math.min(idx, 50) - Math.min(t.length / 20, 20);
      if (idx === 0 || /\W/.test(t[idx - 1])) score += 15; // word boundary
    } else {
      const words = q.split(/\s+/);
      const allPrefixes = words.every((w) =>
        t.split(/\W+/).some((tw) => tw.startsWith(w))
      );
      if (allPrefixes) {
        score = 40 - Math.min(t.length / 20, 20);
      } else if (isSubsequence(q.replace(/\s+/g, ''), t)) {
        score = 10 - Math.min(t.length / 40, 8);
      }
    }
    if (score > 0) hits.push({ item, score });
  }
  hits.sort((a, b) => b.score - a.score);
  return hits.slice(0, limit);
}

function isSubsequence(needle: string, hay: string): boolean {
  let i = 0;
  for (let j = 0; j < hay.length && i < needle.length; j++) {
    if (hay[j] === needle[i]) i++;
  }
  return i === needle.length;
}
