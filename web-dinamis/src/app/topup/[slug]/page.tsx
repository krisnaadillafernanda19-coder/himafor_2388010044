import { getAkunJual } from '@/app/actions/jual-akun';

export default async function TopUpDetail({ params }: { params: { slug: string } }) {
  const data: any = await getAkunJual();
  // Mencari produk berdasarkan slug (ID)
  const product = data.find((p: any) => p.id.toString() === params.slug);

  if (!product) return <div>Produk tidak ditemukan</div>;

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">{product.nama_game}</h1>
      <p className="text-xl text-blue-600">Harga: Rp {product.harga.toLocaleString()}</p>
      <p className="mt-4">{product.deskripsi}</p>
      <button className="bg-green-600 text-white px-6 py-2 mt-5 rounded">
        Beli Sekarang
      </button>
    </div>
  );
}