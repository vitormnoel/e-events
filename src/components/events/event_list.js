import EventItem from "./event_item";

function EventList(props) {
  const { items } = props;

  return (
    <ul className="flex flex-col gap-8 items-center">
      {items.map((event) => {
        return (
          <EventItem
            id={event.id}
            key={event.id}
            title={event.title}
            location={event.location}
            date={event.date}
            image={event.image}
          />
        );
      })}
    </ul>
  );
}

export default EventList;
