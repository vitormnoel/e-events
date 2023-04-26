import { getEventById, getFeaturedEvents } from "../../helper/api_util";
import EventSummary from "../../src/components/event-detail/event-summary";
import EventLogistics from "../../src/components/event-detail/event-logistics";

function EventDetailPage(props) {
  const event = props.selectedEvent;

  if (!event) {
    return (
      <section className="dark:bg-slate-800flex flex-col gap-4 justify-center items-center h-[100vh]">
        <p className="text-center">no event found.</p>
      </section>
    );
  }

  return (
    <section className="dark:bg-slate-800 pb-28">
      <EventSummary title={event.title} />
      <EventLogistics
        title={event.title}
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
        description={event.description}
      />
    </section>
  );
}

export async function getStaticProps(context) {
  const eventId = context.params.eventId;
  const event = await getEventById(eventId);

  return {
    props: {
      selectedEvent: event,
    },
    revalidate: 40,
  };
}

export async function getStaticPaths() {
  const events = await getFeaturedEvents();
  const paths = events.map((event) => ({ params: { eventId: event.id } }));

  //add fallback so next can know if it should pre-render a page or not
  return {
    paths: paths,
    fallback: true,
  };
}

export default EventDetailPage;
