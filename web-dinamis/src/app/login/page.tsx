// src/app/page.tsx
export default function Home() {
  return (
    <main style={{ padding: '50px', textAlign: 'center' }}>
      <h1 style={{ color: '#ff8c00' }}>KRISNA STORE</h1>
      <p>Top Up Diamond FF & ML Terpercaya & Amanah</p>
      
      <div className="card">
        <h2>Pilih Layanan Kami</h2>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
          <button>Top Up Diamond</button>
          <button>Beli Akun FF/ML</button>
        </div>
      </div>
    </main>
  );
}