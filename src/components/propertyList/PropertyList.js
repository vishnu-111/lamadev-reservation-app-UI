import React from 'react'
import styles from './PropertyList.module.css'
const PropertyList = () => {
    return (
        <div className={styles.pList}>
            <div className={styles.pListItem}>
                <img src="https://cdn.pixabay.com/photo/2016/10/18/09/02/hotel-1749602_960_720.jpg" alt="" className={styles.pListImg} />
                <div className={styles.pListTitles}>
                    <h1>Hotels</h1>
                    <h2>267 hotels</h2>

                </div>
            </div>
            <div className={styles.pListItem}>
                <img src="https://cdn.pixabay.com/photo/2018/03/18/15/26/villa-3237114_960_720.jpg" alt="" className={styles.pListImg} />
                <div className={styles.pListTitles}>
                    <h1>Villas</h1>
                    <h2>2674 hotels</h2>

                </div>
            </div>

            <div className={styles.pListItem}>
                <img src="https://cdn.pixabay.com/photo/2016/12/06/14/33/log-cabin-1886620__340.jpg" alt="" className={styles.pListImg} />
                <div className={styles.pListTitles}>
                    <h1>Cabins</h1>
                    <h2>2657 hotels</h2>

                </div>
            </div>

            <div className={styles.pListItem}>
                <img src="https://cdn.pixabay.com/photo/2012/03/04/00/43/architecture-22039__340.jpg" alt="" className={styles.pListImg} />
                <div className={styles.pListTitles}>
                    <h1>Apartments</h1>
                    <h2>2679 hotels</h2>

                </div>
            </div>

            <div className={styles.pListItem}>
                <img src="https://cdn.pixabay.com/photo/2015/03/09/18/34/beach-666122__340.jpg" alt="" className={styles.pListImg} />
                <div className={styles.pListTitles}>
                    <h1>Resorts</h1>
                    <h2>28967 hotels</h2>

                </div>
            </div>

        </div>
    )
}

export default PropertyList