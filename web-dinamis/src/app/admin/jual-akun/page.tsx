import { query } from "@/lib/db";
import Link from "next/link";
import { deleteJualAkun } from "@/app/actions/jual-akun"; // Pastikan import function yang benar
import DeleteButton from "@/components/DeleteButton";

export const dynamic = "force-dynamic";

// (Icon tetap sama seperti sebelumnya)
const PlusIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
  </svg>
);
const EditIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
  </svg>
);

export default async function JualAkunAdminPage() {
  // Query diubah ke tabel jual_akun
  const produk = await query<any>("SELECT id, nama_game, level, harga, deskripsi FROM jual_akun");

  return (
    <div>
      <div className="admin-page-header">
        <div>
          <div className="admin-page-title">Manajemen Jual Akun</div>
          <div className="admin-page-subtitle">Kelola stok akun game ({produk.length} akun aktif)</div>
        </div>
        <Link href="/admin/jual-akun/create" className="admin-btn admin-btn-primary">
          <PlusIcon /> Tambah Akun
        </Link>
      </div>

      <div className="admin-card">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Nama Game</th>
              <th>Level/Rank</th>
              <th>Harga</th>
              <th className="admin-col-hide-mobile">Deskripsi</th>
              <th style={{ textAlign: "right", width: "96px" }}>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {produk.length === 0 ? (
              <tr>
                <td colSpan={5} style={{ textAlign: "center", padding: "48px", color: "#94a3b8" }}>
                  Belum ada akun. Klik &quot;Tambah Akun&quot; untuk memulai.
                </td>
              </tr>
            ) : produk.map((item: any) => (
              <tr key={item.id}>
                <td><div style={{ fontWeight: 700 }}>{item.nama_game}</div></td>
                <td><span className="admin-badge admin-badge-blue">{item.level}</span></td>
                <td>Rp {item.harga.toLocaleString()}</td>
                <td className="admin-col-hide-mobile" style={{ fontSize: "13px" }}>{item.deskripsi}</td>
                <td>
                  <div style={{ display: "flex", justifyContent: "flex-end", gap: "8px" }}>
                    <Link href={`/admin/jual-akun/${item.id}/edit`} className="admin-btn admin-btn-icon" title="Edit">
                      <EditIcon />
                    </Link>
                    <DeleteButton
                      message="Hapus akun ini?"
                      action={async () => {
                        "use server";
                        await deleteJualAkun(item.id);
                      }}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}