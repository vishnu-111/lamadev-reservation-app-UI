import React from 'react'
import styles from './NavBar.module.css'
const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navContainer}>
        <span className={styles.logo}>Logo</span>
        <div className={styles.navItems}>
          <button className={styles.navButton}>
            Register
          </button>
          <button className={styles.navButton}>
            Login
          </button>
        </div>
      </div>
    </div>
  )
}

export default NavBar