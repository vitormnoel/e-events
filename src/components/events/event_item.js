import Button from "../ui/button";

function EventItem(props) {
  const { title, image, date, location, id } = props;

  const newDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const newLocation = location.replace(", ", "\n");
  const newLink = `/events/${id}`;

  return (
    <li
      key={id}
      className="flex gap-4 dark:bg-slate-700/75 dark:text-white bg-white md:w-[60%] w-[90vw] rounded-2xl shadow-md overflow-hidden"
    >
      <img src={`/` + image} alt="" className="w-1/2 object-cover" />
      <div className="my-6 w-[100%]">
        <div>
          <h2 className="text-2xl font-semibold mb-2">{title}</h2>
          <time className="font-semibold text-slate-700 dark:text-slate-300">{newDate}</time>
          <address className="mt-6 text-md">{newLocation}</address>
        </div>
        <div className="flex justify-end mt-10 mx-8">
          <Button link={newLink}>explore event</Button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
