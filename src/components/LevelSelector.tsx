import Link from 'next/link';
import styles from './LevelSelector.module.css';

const levels = [
    { level: 1, name: 'HSK 1', color: 'var(--hsk1)', count: 150, description: 'Beginner' },
    { level: 2, name: 'HSK 2', color: 'var(--hsk2)', count: 150, description: 'Elementary' },
    { level: 3, name: 'HSK 3', color: 'var(--hsk3)', count: 300, description: 'Intermediate' },
    { level: 4, name: 'HSK 4', color: 'var(--hsk4)', count: 600, description: 'Upper Intermediate' },
    { level: 5, name: 'HSK 5', color: 'var(--hsk5)', count: 1300, description: 'Advanced' },
    { level: 6, name: 'HSK 6', color: 'var(--hsk6)', count: 2500, description: 'Proficient' },
];

export default function LevelSelector() {
    return (
        <div className={styles.grid}>
            {levels.map((l) => (
                <Link href={`/hsk/${l.level}`} key={l.level} className={styles.card} style={{ '--theme-color': l.color } as React.CSSProperties}>
                    <div className={styles.cardInner}>
                        <h2 className={styles.levelName}>{l.name}</h2>
                        <p className={styles.description}>{l.description}</p>
                        <div className={styles.bottomBar}>
                            <span className={styles.wordCount}>{l.count} words</span>
                            <span className={styles.arrow}>→</span>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}
