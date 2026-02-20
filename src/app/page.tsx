'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem', padding: '2rem' }}>
      <Link href="/hsk2" style={{ textDecoration: 'none' }}>
        <div style={{
          background: 'var(--surface)',
          padding: '3rem 2rem',
          borderRadius: 'var(--radius-lg)',
          boxShadow: 'var(--shadow-md)',
          border: '1px solid var(--border)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          textAlign: 'center',
          cursor: 'pointer'
        }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = 'var(--shadow-lg)' }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'var(--shadow-md)' }}
        >
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--text-main)' }}>HSK 2.0</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>The classic 6-level Mandarin proficiency test standard. (Levels 1-6)</p>
        </div>
      </Link>

      <Link href="/hsk3" style={{ textDecoration: 'none' }}>
        <div style={{
          background: 'var(--surface)',
          padding: '3rem 2rem',
          borderRadius: 'var(--radius-lg)',
          boxShadow: 'var(--shadow-md)',
          border: '1px solid var(--border)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          textAlign: 'center',
          cursor: 'pointer'
        }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = 'var(--shadow-lg)' }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'var(--shadow-md)' }}
        >
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--text-main)' }}>HSK 3.0</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>The new comprehensive 9-level Mandarin proficiency standard. (Levels 1-9)</p>
        </div>
      </Link>
    </div>
  );
}
