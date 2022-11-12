import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import Header from "../../components/header/Header";
import NavBar from "../../components/navbar/NavBar";
import styles from "./List.module.css";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";
const List = () => { 
  const location = useLocation();
  console.log(location);
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  console.log("ll", location);
  return (
    <div>
      <NavBar />
      <Header type="list" />
      <div className={styles.listContainer}>
        <div className={styles.listWrapper}>
          <div className={styles.listSearch}>
            <h1 className={styles.lsTitle}>Search</h1>
            <div className={styles.lsItem}>
              <label>Destination</label>
              <input type="text" placeholder={destination} />
            </div>
            <div className={styles.lsItem}>
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={item => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className={styles.lsItem}>
              <label htmlFor="">Options</label>
              <div className={styles.lsOptions}>
                <div className={styles.lsOptionItem}>
                  <span className={styles.lsOptionText}>
                    Min Price <small>per night</small>
                  </span>
                  <input type="number" className={styles.lsOptionInput} />
                </div>
                <div className={styles.lsOptionItem}>
                  <span className={styles.lsOptionText}>
                    Max Price <small>per night</small>
                  </span>
                  <input type="number" className={styles.lsOptionInput} />
                </div>
                <div className={styles.lsOptionItem}>
                  <span className={styles.lsOptionText}>Adult</span>
                  <input
                    type="number"
                    className={styles.lsOptionInput}
                    placeholder={options.adult}
                    min={1}
                  />
                </div>
                <div className={styles.lsOptionItem}>
                  <span className={styles.lsOptionText}>Children</span>
                  <input
                    type="number"
                    className={styles.lsOptionInput}
                    placeholder={options.children}
                    min={0}
                  />
                </div>
                <div className={styles.lsOptionItem}>
                  <span className={styles.lsOptionText}>Room</span>
                  <input
                    type="number"
                    className={styles.lsOptionInput}
                    placeholder={options.room}
                    min={1}
                  />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className={styles.listResult}>
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
