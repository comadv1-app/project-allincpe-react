import { useEffect, useMemo, useState } from "react";

export function useLanguages() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        const r = await fetch("/api/languages");
        const data = await r.json();
        setList(data || []);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const idMap = useMemo(() => {
    const findId = (needle) =>
      list.find(x => (x.name || "").toLowerCase().includes(needle))?.id;
    return {
      python: findId("python"),
      c: findId("gcc"),
      java: findId("java")
    };
  }, [list]);

  return { loading, list, idMap };
}
