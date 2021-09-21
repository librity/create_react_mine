import styles from '../styles/components/Blockchain.module.css'

export const Blockchain = () => {
  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${0}%` }} />

        <span className={styles.currentExperience} style={{ left: `${0}%` }}>
          {0} xp
        </span>
      </div>
      <span>{200} xp</span>
    </header>
  )
}
