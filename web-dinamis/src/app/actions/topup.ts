// Contoh isi file topup.ts
export async function getTopupList() {
  // Pastikan nama tabel di sini sesuai dengan tabel di database kamu
  // Contoh: const data = await db.select().from(produk_game);
  return [
    { id: 1, name: '70 Diamond FF', price: 'Rp 10.000' },
    { id: 2, name: '140 Diamond ML', price: 'Rp 35.000' }
  ];
}