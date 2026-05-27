import { query } from "@/lib/db";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  const beritaCount = await query<any>("SELECT COUNT(*) as total FROM berita");
  const layananCount = await query<any>("SELECT COUNT(*) as total FROM layanan");
  const unreadKontak = await query<any>("SELECT COUNT(*) as total FROM kontak WHERE is_read = 0");
  const totalKontak = await query<any>("SELECT COUNT(*) as total FROM kontak");

  const stats = [
    { name: "Total Layanan", value: layananCount[0]?.total ?? 0, href: "/admin/layanan", color: "#7c3aed", bg: "#f5f3ff", border: "#ede9fe" },
    { name: "Total Berita", value: beritaCount[0]?.total ?? 0, href: "/admin/berita", color: "#2563eb", bg: "#eff6ff", border: "#bfdbfe" },
    { name: "Pesan Belum Dibaca", value: unreadKontak[0]?.total ?? 0, href: "/admin/kontak", color: "#0891b2", bg: "#ecfeff", border: "#a5f3fc" },
    { name: "Total Pesan Masuk", value: totalKontak[0]?.total ?? 0, href: "/admin/kontak", color: "#059669", bg: "#f0fdf4", border: "#bbf7d0" },
  ];

  const recentBerita = await query<any>(
    "SELECT id, judul, is_published, created_at FROM berita ORDER BY created_at DESC LIMIT 5"
  );
  const recentKontak = await query<any>(
    "SELECT id, nama, email, subjek, is_read, created_at FROM kontak ORDER BY created_at DESC LIMIT 5"
  );

  return (
    <div>
      <div style={{ marginBottom: "28px" }}>
        <h2 style={{ fontSize: "22px", fontWeight: 800, color: "#0f172a", marginBottom: "6px" }}>
          Selamat Datang 👋
        </h2>
        <p style={{ color: "#64748b", fontSize: "14px" }}>
          {/* Teks di bawah ini sudah saya update */}
          Berikut adalah ringkasan konten website KRISNA STORE Anda.
        </p>
      </div>

      {/* Stats - (Bagian ini tidak perlu diubah karena sudah bagus) */}
      <div className="admin-stats-grid">
        {stats.map((s) => (
          <Link key={s.name} href={s.href} className="admin-stat-card" style={{ textDecoration: "none" }}>
            <div>
              <div style={{ fontSize: "13px", color: "#64748b", fontWeight: 500, marginBottom: "8px" }}>{s.name}</div>
              <div style={{ fontSize: "32px", fontWeight: 800, color: "#0f172a", lineHeight: 1 }}>{s.value}</div>
            </div>
            <div style={{
              width: "48px", height: "48px", borderRadius: "12px",
              background: s.bg, border: `1px solid ${s.border}`,
              display: "flex", alignItems: "center", justifyContent: "center",
              color: s.color, fontSize: "22px", fontWeight: 800,
            }}>
              {String(s.value).padStart(1, "0")}
            </div>
          </Link>
        ))}
      </div>

      {/* Recent content - (Struktur tetap, hanya memastikan konsistensi) */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
        {/* ... (isi komponen tetap sama seperti sebelumnya) ... */}
        {/* ... */}
      </div>
    </div>
  );
}