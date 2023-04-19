import { getFeaturedEvents } from "../dummy_data";
import EventList from "../src/components/events/event_list";

function Home() {
  const featuredEvents = getFeaturedEvents();

  return (
    <section className="dark:bg-slate-800 bg-stone-100 py-36">
      <div className="container m-auto">
        <EventList items={featuredEvents} />
      </div>
    </section>
  );
}

export default Home;
