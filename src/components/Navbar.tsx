import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    <span className={styles.hanzi}>汉</span> HSK Master
                </Link>
                <div className={styles.links}>
                    <Link href="/hsk2" className={styles.link}>HSK 2.0</Link>
                    <Link href="/hsk3" className={styles.link}>HSK 3.0</Link>
                </div>
            </div>
        </nav>
    );
}
