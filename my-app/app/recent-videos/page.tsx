import styles from './recent-videos.module.css';

export default function VideoPage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>OD</div>
        <div className={styles.social}>
          <span role="img" aria-label="YouTube">📺</span> @ODshde
        </div>
      </header>

      <main className={styles.videoGridContainer}>
        <h2 className={styles.title}>Most recent videos</h2>
        <div className={styles.videoGrid}>
          {['VIDEO 1', 'VIDEO 2', 'VIDEO 3', 'VIDEO 4', 'VIDEO 5', 'VIDEO 6'].map((video, index) => (
            <div key={index} className={styles.videoCard}>{video}</div>
          ))}
        </div>
      </main>
    </div>
  );
}
