"use client";

import { useState } from "react";

export default function MigrateButton() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleMigrate = async () => {
    setLoading(true);
    setResult(null);
    try {
      const res = await fetch("/api/migrate", { method: "GET" });
      const data = await res.json();
      if (res.ok) {
        setResult("Migrasi berhasil!");
      } else {
        setResult(data.error || "Migrasi gagal.");
      }
    } catch (err) {
      setResult("Terjadi error.");
    }
    setLoading(false);
  };

  return (
    <div>
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        onClick={handleMigrate}
        disabled={loading}
        type="button"
      >
        {loading ? "Migrating..." : "Migrasi CSV"}
      </button>
      {result && <div className="text-xs mt-1">{result}</div>}
    </div>
  );
}
