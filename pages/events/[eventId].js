import { useRouter } from "next/router";
import { Fragment } from "react";

import { getEventById } from "../../dummy_data";
import EventSummary from "../../src/components/event-detail/event-summary";
import EventLogistics from "../../src/components/event-detail/event-logistics";

function EventDetailPage() {
  const router = useRouter();

  const eventId = router.query.eventId;
  const event = getEventById(eventId);

  if (!event) {
    return(
      <section className="dark:bg-slate-800 bg-stone-100 flex flex-col gap-4 justify-center items-center h-[100vh]">
        <p className="text-center">no event found.</p>
      </section>
    )
  }

  return (
    <section className="dark:bg-slate-800 bg-stone-100 pb-28">
      <Fragment>
        <EventSummary title={event.title}/>
        <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title} description={event.description}/>
      </Fragment>
    </section>
  );
}

export default EventDetailPage;
