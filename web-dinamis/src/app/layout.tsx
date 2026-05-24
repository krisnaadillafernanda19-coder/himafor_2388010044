import Link from 'next/link';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>
        <nav style={{ padding: '20px', background: '#000', color: '#fff' }}>
          <h2 style={{ color: '#ff8c00' }}>KRISNA STORE</h2>
          <ul style={{ display: 'flex', gap: '20px', listStyle: 'none' }}>
            <li><Link href="/">Beranda</Link></li>
            <li><Link href="/topup">Top Up</Link></li>
            <li><Link href="/jual-akun">Jual Akun</Link></li>
            <li><Link href="/kontak">Kontak Admin</Link></li>
          </ul>
        </nav>
        
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}