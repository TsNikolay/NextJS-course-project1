const DUMMY_EVENTS = [
  {
    id: "e1",
    title: "Programming for everyone",
    description:
      "Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.",
    location: "Somestreet 25, 12345 San Somewhereo",
    date: "2023-05-12",
    image: "images/coding-event.jpg",
    isFeatured: false,
  },
  {
    id: "e2",
    title: "Gaming day",
    description:
      "Get ready for a gaming extravaganza! Join us for a night of fun, competition, and prizes. Whether you're a pro or casual gamer, it's time to level up the excitement and connect with fellow gaming enthusiasts!",
    location: "New Wall Street 5, 98765 New Work",
    date: "2024-05-30",
    image: "images/gaming-event.jpg",
    isFeatured: true,
  },
  {
    id: "e3",
    title: "Poker time",
    description:
      "Experience the thrill of poker at our exclusive event! Join us for an evening of skill, strategy, and camaraderie. Whether you're a pro or a casual player, enjoy high-stakes excitement, win prizes, and shuffle up for a night of unforgettable fun!",
    location: "My Street 12, 10115 Broke City",
    date: "2023-04-10",
    image: "images/poker-event.jpg",
    isFeatured: true,
  },
];

export function getFeaturedEvents() {
  return DUMMY_EVENTS.filter((event) => event.isFeatured);
}

export function getAllEvents() {
  return DUMMY_EVENTS;
}

export function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;

  let filteredEvents = DUMMY_EVENTS.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}

export function getEventById(id) {
  return DUMMY_EVENTS.find((event) => event.id === id);
}
