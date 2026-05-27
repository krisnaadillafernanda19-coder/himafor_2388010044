// src/app/page.tsx
export default function Home() {
  const products = [
    { id: 1, name: "Akun Free Fire Sultan", price: "Rp 150.000", category: "FF" },
    { id: 2, name: "Top Up ML 86 Diamond", price: "Rp 15.000", category: "ML" },
  ];

  return (
    <main className="p-10">
      <h1 className="text-4xl font-bold text-center">Selamat Datang di KRISNA STORE</h1>
      <div className="grid grid-cols-2 gap-4 mt-8">
        {products.map((p) => (
          <div key={p.id} className="border p-4 rounded shadow">
            <h2 className="text-xl">{p.name}</h2>
            <p className="text-blue-600">{p.price}</p>
            <button className="bg-green-500 text-white px-4 py-2 mt-2">Beli Sekarang</button>
          </div>
        ))}
      </div>
    </main>
  );
}