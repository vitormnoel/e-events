import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import useSWR from "swr";

import { getFilteredEvents } from "../../helper/api_util";
import EventList from "../../src/components/events/event_list";
import ResultsTitle from "../../src/components/results-title/results-title";
import Button from "../../src/components/ui/button";

function FilteredEventsPage(props) {
  const router = useRouter();
  const [loadedEvents, setLoadedEvents] = useState([]);

  const filterData = router.query.slug;
  const url =
    "https://nextjs-test-e4060-default-rtdb.firebaseio.com/events.json";

  const { data, error } = useSWR(url);

  useEffect(() => {
    if (data) {
      const events = [];
      for (const key in data) {
        events.push({
          id: key,
          ...data[key],
        });
      }

      setLoadedEvents(events)
    }
  }, [data]);

  if (props.hasError) {
    return (
      <section className="dark:bg-slate-800 flex flex-col gap-4 justify-center items-center h-[100vh]">
        <p className="text-center">
          Invalid filter. Please adjust your values!
        </p>
        <Button link="/events">show all events</Button>
      </section>
    );
  }

  const filteredEvents = props.events;

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <section className="dark:bg-slate-800 flex flex-col gap-4 justify-center items-center h-[100vh]">
        <p className="text-center">No events found for the chosen filter!</p>
        <Button link="/events">show all events</Button>
      </section>
    );
  }

  const date = new Date(props.date.year, props.date.month - 1);

  return (
    <section className="dark:bg-slate-800 h-[100vh] py-36">
      <Head>
        <title>Filtered Events</title>
        <meta
          name="description"
          content="Find a lot of great events that allow you to evolve..."
        />
      </Head>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </section>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;

  const filterData = params.slug;

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (isNaN(numYear) || isNaN(numMonth) || numMonth < 1 || numMonth > 12) {
    return {
      props: { hasError: true },
      // redirect: {
      //   destination: "/error",
      // }
    };
  }

  const filteredEvents = await getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  return {
    props: {
      events: filteredEvents,
      date: {
        year: numYear,
        month: numMonth,
      },
    },
  };
}

export default FilteredEventsPage;
