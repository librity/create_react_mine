import styles from './Logo.module.css'

export const Logo = () => (
  <div className={styles.container}>
    <img src="/logo_v3.svg" alt="Create React Mine" />

    <span>
      By <a href="https://github.com/librity">librity💪</a>
    </span>
  </div>
)
