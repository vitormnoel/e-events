import { getFeaturedEvents } from "../helper/api_util";
import EventList from "../src/components/events/event_list";

function Home(props) {
  return (
    <section className="dark:bg-slate-800 py-36">
      <div className="container m-auto">
        <EventList items={props.events} />
      </div>
    </section>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents
    },
    revalidate: 1800
  }
}

export default Home;
