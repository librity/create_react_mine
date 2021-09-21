import styles from './NextBlock.module.css'

export const Logo = () => (
  <div className={styles.container}>
    <img src="/logo_v1.svg" alt="Create React Mine" />
    <span>
      By <a href="https://github.com/librity">librity💪</a>
    </span>
  </div>
)
