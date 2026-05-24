import { updateJualAkun } from "@/app/actions/jual-akun";
import { query } from "@/lib/db";

export default async function EditAkunPage({ params }: { params: { id: string } }) {
  const akun = (await query<any>("SELECT * FROM jual_akun WHERE id = ?", [params.id]))[0];

  return (
    <div className="admin-card">
      <h2 style={{ color: '#ff8c00' }}>Edit Akun</h2>
      <form action={updateJualAkun.bind(null, akun.id)} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input name="nama_game" defaultValue={akun.nama_game} required className="admin-input" />
        <input name="level" defaultValue={akun.level} required className="admin-input" />
        <input name="harga" type="number" defaultValue={akun.harga} required className="admin-input" />
        <textarea name="deskripsi" defaultValue={akun.deskripsi} className="admin-input" />
        <button type="submit" className="admin-btn admin-btn-primary">Update Data</button>
      </form>
    </div>
  );
}