import { useState } from "react";

export function useRunner() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  async function run({ languageId, source, stdin }) {
    setLoading(true); setResult(null); setError(null);
    try {
      const r = await fetch("/api/run", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ languageId, source, stdin })
      });
      const data = await r.json();
      setResult(data);
      if (!r.ok) setError(data?.error || "run_failed");
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }
  return { loading, result, error, run };
}
