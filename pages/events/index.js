import React from "react";
import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/EventList";
import EventsSearch from "../../components/events/EventsSearch";
import { useRouter } from "next/router";
const Index = () => {
  const allEvents = getAllEvents();
  const router = useRouter();
  function findEventsHandler(year, month) {
    const filePath = `./events/${year}/${month}`;
    router.push(filePath).then((r) => console.error(r));
  }

  return (
    <div>
      <h1>This is the All Events page</h1>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList events={allEvents}></EventList>
    </div>
  );
};

export default Index;
