import React from 'react'
import styles from './FeaturedProperties.module.css'
const FeaturedProperties = () => {
    return (
        <div className={styles.fp}>
            <div className={styles.fpItem}>

           


            <img src="https://cdn.pixabay.com/photo/2017/04/10/22/28/residence-2219972__340.jpg" alt="" className={styles.fpImg} />
            <span className={styles.fpName}>Apartment 1</span>
            <span className={styles.fpCity}>Madrid</span>
            <span className={styles.fpPrice}>Starting from $100</span>
            <div className={styles.fpRating}>
                <button >9.5</button>
                <span>Excellent</span>
            </div>
            </div>

            <div className={styles.fpItem}>
                <img src="https://cdn.pixabay.com/photo/2017/04/10/22/28/residence-2219972__340.jpg" alt="" className={styles.fpImg} />
                <span className={styles.fpName}>Apartment 1</span>
                <span className={styles.fpCity}>Madrid</span>
                <span className={styles.fpPrice}>Starting from $100</span>
                <div className={styles.fpRating}>
                    <button >9.5</button>
                    <span>Excellent</span>
                </div>
            </div>

            <div className={styles.fpItem}>
                <img src="https://cdn.pixabay.com/photo/2017/04/10/22/28/residence-2219972__340.jpg" alt="" className={styles.fpImg} />
                <span className={styles.fpName}>Apartment 1</span>
                <span className={styles.fpCity}>Madrid</span>
                <span className={styles.fpPrice}>Starting from $100</span>
                <div className={styles.fpRating}>
                    <button >9.5</button>
                    <span>Excellent</span>
                </div>
            </div>

            <div className={styles.fpItem}>
                <img src="https://cdn.pixabay.com/photo/2017/04/10/22/28/residence-2219972__340.jpg" alt="" className={styles.fpImg} />
                <span className={styles.fpName}>Apartment 1</span>
                <span className={styles.fpCity}>Madrid</span>
                <span className={styles.fpPrice}>Starting from $100</span>
                <div className={styles.fpRating}>
                    <button >9.5</button>
                    <span>Excellent</span>
                </div>
            </div>


        </div>

    )
}

export default FeaturedProperties