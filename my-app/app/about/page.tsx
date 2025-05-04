import styles from '../page.module.css';

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>OD</div>
        <div className={styles.social}>📺 @ODshde</div>
      </header>

      <div className={styles.contentBox}>
        <div className={styles.title}>ABOUT ME</div>
        <div className={styles.grid}>
          <div className={styles.card}>
            Im just a small streamer who recently started.<br />
            If you wanna help, you can follow, subscribe, or donate.<br />Thank you!
          </div>
          <div className={styles.card}>
            fb: Xaravsan OD<br />
            ig: 0kl0d<br />
            yt: Odshde<br />
            ds: 0d_o
          </div>
        </div>
      </div>
    </div>
  );
}
