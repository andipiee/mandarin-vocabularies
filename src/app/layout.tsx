import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'HSK Master | Premium Vocabulary Study Tool',
  description: 'Master Mandarin Chinese with our interactive HSK 2.0 & 3.0 vocabulary guide.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="container">
          <header style={{ textAlign: 'center', marginBottom: '3rem', marginTop: '2rem' }}>
            <h1 className="title">HSK Master</h1>
            <p className="subtitle">Interactive Mandarin Chinese Vocabulary</p>
          </header>
          {children}
          <footer style={{ textAlign: 'center', marginTop: '4rem', padding: '2rem 0', color: 'var(--text-muted)', borderTop: '1px solid var(--border)' }}>
            <p>© {new Date().getFullYear()} HSK Master - Elevated Learning</p>
          </footer>
        </main>
      </body>
    </html>
  );
}
