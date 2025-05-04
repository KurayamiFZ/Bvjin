import styles from '../page.module.css';

export default function DonatePage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>OD</div>
        <div className={styles.social}>📺 @ODshde</div>
      </header>

      <div className={styles.contentBox}>
        <div className={styles.title}>DONATE</div>
        <div className={styles.grid}>
          <div className={styles.card}>KHAAN: <br />12345678</div>
          <div className={styles.card}>PAYPAL: <br />12345678</div>
          <div className={styles.card}>TDB: <br />12345678</div>
          <div className={styles.card}>GOLOMT: <br />12345678</div>
        </div>
      </div>
    </div>
  );
}
