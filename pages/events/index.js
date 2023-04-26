import { useRouter } from "next/router";

import { getAllEvents } from "../../helper/api_util";
import EventList from "../../src/components/events/event_list";
import EventSearch from "../../src/components/events/event_search";

function AllEventsPage(props) {
    const router = useRouter();
    const { events } = props;

    function findEventsHandler(year, month) {
        const fullPath = `/events/${year}/${month}`;

        router.push(fullPath);
    }

    return <section className="dark:bg-slate-800 py-36">
        <EventSearch onSearch={findEventsHandler}/>
        <EventList items={props.events}/>
    </section>
}

export async function getStaticProps() {
    const events = await getAllEvents();

    return {
        props: {
            events: events
        },
        revalidate: 120
    }
}

export default AllEventsPage;