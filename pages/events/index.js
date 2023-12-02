import React from "react";
import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/EventList";

const Index = () => {
  const allEvents = getAllEvents();

  return (
    <div>
      <h1>This is the All Events page</h1>
      <EventList events={allEvents}></EventList>
    </div>
  );
};

export default Index;
