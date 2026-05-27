import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>
        <nav className="p-5 bg-gray-900 text-white flex justify-between">
          <h1 className="text-xl font-bold">KRISNA STORE</h1>
          <div>
            <a href="/" className="mr-4">Home</a>
            <a href="/login">Login</a>
          </div>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}