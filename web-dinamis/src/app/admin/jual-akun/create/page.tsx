import { createJualAkun } from "@/app/actions/jual-akun";

export default function CreateAkunPage() {
  return (
    <div className="admin-card">
      <h2 style={{ color: '#ff8c00' }}>Tambah Akun Baru</h2>
      <form action={createJualAkun} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input name="nama_game" placeholder="Nama Game (e.g. Free Fire)" required className="admin-input" />
        <input name="level" placeholder="Level / Rank" required className="admin-input" />
        <input name="harga" type="number" placeholder="Harga (e.g. 50000)" required className="admin-input" />
        <textarea name="deskripsi" placeholder="Deskripsi akun..." className="admin-input" />
        <button type="submit" className="admin-btn admin-btn-primary">Simpan Akun</button>
      </form>
    </div>
  );
}