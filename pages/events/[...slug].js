import { useRouter } from "next/router";

import { getFilteredEvents } from "../../dummy_data";
import EventList from "../../src/components/events/event_list";
import ResultsTitle from "../../src/components/results-title/results-title";
import Button from "../../src/components/ui/button";

function FilteredEventsPage() {
  const router = useRouter();

  const filterData = router.query.slug;

  if (!filterData) {
    return (
      <section className="dark:bg-slate-800 bg-stone-100 flex flex-col gap-4 justify-center items-center h-[100vh]">
        <p className="text-center">Loading...</p>
      </section>
    );
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (isNaN(numYear) || isNaN(numMonth) || numMonth < 1 || numMonth > 12) {
    return (
      <section className="dark:bg-slate-800 bg-stone-100 flex flex-col gap-4 justify-center items-center h-[100vh]">
        <p className="text-center">
          Invalid filter. Please adjust your values!
        </p>
        <Button link="/events">show all events</Button>
      </section>
    );
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <section className="dark:bg-slate-800 bg-stone-100 flex flex-col gap-4 justify-center items-center h-[100vh]">
        <p className="text-center">No events found for the chosen filter!</p>
        <Button link="/events">show all events</Button>
      </section>
    );
  }

  const date = new Date(numYear, numMonth - 1);

  return (
    <section className="dark:bg-slate-800 bg-stone-100 h-[100vh] py-36">
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </section>
  );
}

export default FilteredEventsPage;
