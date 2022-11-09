import React from 'react'
import styles from './Featured.module.css'
const Featured = () => {
    return (
        <div className={styles.featured}>
            <div className={styles.featuredItem}>
                <img src="https://cdn.pixabay.com/photo/2022/10/03/12/03/microphone-7495739_960_720.jpg" alt="" className={styles.featuredImg} />
                <div className={styles.featuredTitles}>
                    <h1>Dublin</h1>
                    <h1>123 properties</h1>
                </div>
            </div>


            <div className={styles.featuredItem}>
                <img src="https://cdn.pixabay.com/photo/2022/10/03/12/03/microphone-7495739_960_720.jpg" alt="" className={styles.featuredImg} />
                <div className={styles.featuredTitles}>
                    <h1>Reno</h1>
                    <h1>753 properties</h1>
                </div>
            </div>


            <div className={styles.featuredItem}>
                <img src="https://cdn.pixabay.com/photo/2022/10/03/12/03/microphone-7495739_960_720.jpg" alt="" className={styles.featuredImg} />
                <div className={styles.featuredTitles}>
                    <h1>London</h1>
                    <h1>592 properties</h1>
                </div>
            </div>


        </div>
    )
}

export default Featured