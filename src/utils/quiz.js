// src/utils/quiz.js
export function pickRandom(poolArr, take) {
  const arr = [...(poolArr ?? [])];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.slice(0, Math.min(take, arr.length));
}

export function buildQuiz(mode, pool) {
  if (mode === "fundamentals") {
    const selected = pickRandom(pool?.fundamentalsAndCore ?? [], 15);
    return selected.map(q => ({ ...q, group: "fundamentals" }));
  }

  if (mode === "major") {
    const result = [];
    const majors = pool?.majors ?? {};
    for (const [key, arr] of Object.entries(majors)) {
      const take5 = pickRandom(arr ?? [], 5);
      take5.forEach(q => result.push({ ...q, group: key }));
    }
    return result;
  }

  if (mode === "other") {
    const result = [];
    const others = pool?.others ?? {};
    for (const [key, arr] of Object.entries(others)) {
      const take5 = pickRandom(arr ?? [], 5);
      take5.forEach(q => result.push({ ...q, group: key }));
    }
    return result;
  }

  return [];
}
