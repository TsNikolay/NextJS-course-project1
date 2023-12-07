import React from "react";
import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";
import EventList from "../../components/events/EventList";
import ResultsTitle from "../../components/events/ResultsTitle";
import Button from "../../components/ui/Button";
import ErrorAlert from "../../components/ui/ErrorAlert";

const FilteredEventsPage = () => {
  const router = useRouter();

  const filteredData = router.query.slug;

  if (!filteredData) {
    return <p className="center">Loading...</p>;
  }

  const filteredYear = filteredData[0];
  const filteredMonth = filteredData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2023 ||
    numMonth > 12 ||
    numMonth < 1
  ) {
    return (
      <div>
        <ErrorAlert>
          <p>Invalid filter, please adjust your values</p>
        </ErrorAlert>
        ;
        <div className="center">
          <Button link="/events">Show all events</Button>
        </div>
      </div>
    );
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <div>
        <ErrorAlert>
          <p>No Events found for chosen filter!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show all events</Button>
        </div>
      </div>
    );
  }

  const date = new Date(numYear, numMonth - 1);
  return (
    <div>
      <ResultsTitle date={date} />
      <EventList events={filteredEvents}></EventList>
    </div>
  );
};

export default FilteredEventsPage;
