import React from "react";
import EventItem from "./EventItem";
import styles from "./EventList.module.css";
const EventList = (props) => {
  const { events } = props;

  return (
    <ul className={styles.list}>
      {events.map((event) => {
        return (
          <EventItem
            key={event.id}
            id={event.id}
            title={event.title}
            location={event.location}
            date={event.date}
            image={event.image}
          />
        );
      })}
    </ul>
  );
};

export default EventList;
