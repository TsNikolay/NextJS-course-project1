import React from "react";
import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/EventList";

const Index = () => {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <h1>This is the main page</h1>
      <EventList events={featuredEvents} />
    </div>
  );
};

export default Index;
