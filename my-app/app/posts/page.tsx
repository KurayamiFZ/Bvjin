import styles from '../page.module.css';

export default function PostsPage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>OD</div>
        <div className={styles.social}>📺 @ODshde</div>
      </header>

      <div className={styles.contentBox}>
        <h2 className={styles.title}>Most recent posts</h2>
        <div className={styles.grid}>
          <div className={styles.card}>POST 1</div>
          <div className={styles.card}>POST 2</div>
          <div className={styles.card}>POST 3</div>
        </div>
      </div>
    </div>
  );
}
