import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>OD</div>
        <div className={styles.social}>📺 @ODshde</div>
      </header>

      <main className={styles.grid}>
        <Link href="/recent-videos"><div className={styles.card}>RECENT VIDEO</div></Link>
        <Link href="/posts"><div className={styles.card}>RECENT POST</div></Link>
        <Link href="/donate"><div className={styles.card}>DONATE</div></Link>
        <Link href="/about"><div className={styles.card}>ABOUT ME</div></Link>
      </main>
    </div>
  );
}
