import React from 'react'
import Featured from '../../components/featured/Featured'
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import MailList from '../../components/mailList/MailList'
import NavBar from '../../components/navbar/NavBar'
import PropertyList from '../../components/propertyList/PropertyList'
import styles from './Home.module.css'
const Home = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <div className={styles.homeContainer}>
        <Featured />
        <h1 className={styles.homeTitle}>Browse by property type</h1>
        <PropertyList />
        <h1 className={styles.homeTitle}>Home guests love</h1>
        <FeaturedProperties />
        <MailList/>
        <Footer/>
      </div>
    </div>
  )
}

export default Home