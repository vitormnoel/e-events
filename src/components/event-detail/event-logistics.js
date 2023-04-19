import AddressIcon from '../icons/address-icon';
import DateIcon from '../icons/date-icon';
import LogisticsItem from './logistics-item';
import EventContent from "./event-content";

function EventLogistics(props) {
  const { date, address, image, imageAlt, description } = props;

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const addressText = address.replace(', ', '\n');

  return (
    <section className="pt-32 container m-auto flex flex-col md:flex-row gap-10 items-center justify-center">
      <div className="w-96 h-[50vh] rounded-lg overflow-hidden">
        <img src={`/${image}`} alt={imageAlt}/>
      </div>
      <ul className="w-1/2 md:w-1/3">
        <LogisticsItem icon={DateIcon}>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={AddressIcon}>
          <address>{addressText}</address>
        </LogisticsItem>
        <EventContent> 
          <p>{description}</p>
        </EventContent>
      </ul>
    </section>
  );
}

export default EventLogistics;
