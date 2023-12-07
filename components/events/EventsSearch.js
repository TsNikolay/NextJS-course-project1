import React, { useRef } from "react";
import Button from "../ui/Button";
import styles from "./EventsSearch.module.css";
const EventsSearch = (props) => {
  const yearInput = useRef(null);
  const monthInput = useRef(null);
  const submitHandler = (event) => {
    event.preventDefault();
    const selectedYear = yearInput.current.value;
    const selectedMonth = monthInput.current.value;

    props.onSearch(selectedYear, selectedMonth);
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={styles.controls}>
        <div className={styles.control}>
          <label htmlFor="year">Year</label>
          <select name="" id="year" ref={yearInput}>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
          </select>
        </div>
        <div className={styles.control}>
          <label htmlFor="month">Month</label>
          <select name="" id="month" ref={monthInput}>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
      </div>
      <Button>Find Events</Button>
    </form>
  );
};

export default EventsSearch;
