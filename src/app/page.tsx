import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.grid}>
      <Link href="/hsk2" style={{ textDecoration: 'none' }}>
        <div className={styles.card}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--text-main)' }}>HSK 2.0</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>The classic 6-level Mandarin proficiency test standard. (Levels 1-6)</p>
        </div>
      </Link>

      <Link href="/hsk3" style={{ textDecoration: 'none' }}>
        <div className={styles.card}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--text-main)' }}>HSK 3.0</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>The new comprehensive 9-level Mandarin proficiency standard. (Levels 1-9)</p>
        </div>
      </Link>
    </div>
  );
}