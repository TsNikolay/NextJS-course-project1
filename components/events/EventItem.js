import React from "react";
import styles from "./EventItem.module.css";
import Button from "../ui/Button";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";

const EventItem = (props) => {
  const { id, title, location, date, image } = props;
  const formattedDate = new Date(date);
  const dynamicLink = `/events/${id}`;

  return (
    <li className={styles.item}>
      <img src={"/" + image} alt="It should be an image here" />
      <div className={styles.content}>
        <div>
          <h2>{title}</h2>
          <div className={styles.date}>
            <DateIcon />
            <time>{formattedDate.toLocaleDateString()}</time>
          </div>
          <div className={styles.address}>
            <AddressIcon />
            <address>{location}</address>
          </div>
        </div>
        <div className={styles.actions}>
          <Button link={dynamicLink}>
            <span>Explore Event</span>
            <span className={styles.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
