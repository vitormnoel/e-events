import { useRouter } from "next/router";

import { getAllEvents } from "../../dummy_data";
import EventList from "../../src/components/events/event_list";
import EventSearch from "../../src/components/events/event_search";

function AllEventsPage() {
    const events = getAllEvents();
    const router = useRouter();

    function findEventsHandler(year, month) {
        const fullPath = `/events/${year}/${month}`;

        router.push(fullPath);
    }

    return <section className="dark:bg-slate-800 bg-stone-100 py-36">
        <EventSearch onSearch={findEventsHandler}/>
        <EventList items={events}/>
    </section>
}

export default AllEventsPage;