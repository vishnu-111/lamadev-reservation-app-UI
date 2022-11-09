import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { format } from 'date-fns'
import Header from '../../components/header/Header'
import NavBar from '../../components/navbar/NavBar'
import styles from './List.module.css'
import { DateRange } from 'react-date-range'
const List = () => {
  const location = useLocation()
  const [destination, setDestination] = useState(location.state.destination)
  const [date, setDate] = useState(location.state.date)
  const [options, setOptions] = useState(location.state.options)

  return (
    <div>
      <NavBar />
      <Header type='list' />
      <div className={styles.listContainer}>
        <div className={styles.listWrapper}>
          <div className={styles.listSearch}>
            <h1 className={styles.lsTitle}>Search</h1>
            <div className={styles.lsItem}>
              <label >Destination</label>
              <input type="text" placeholder={destination} />
            </div>
            <div className={styles.lsItem}>
              <label >Check-in Date</label>
              <span>{`${format(date[0].startDate, 'MM/dd/yyyy')} to ${format(date[0].endDate, 'MM/dd/yyyy')}`}</span>
              <DateRange onChange={item=>setDate([item.selection])} minDate={new Date()}/>
            </div>
          </div>
          <div className={styles.listResult}> </div>
        </div>
      </div>
    </div>
  )
}

export default List