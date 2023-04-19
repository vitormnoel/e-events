function EventContent(props) {
  return (
    <section>
      <h2 className="font-semibold pb-2">Description:</h2>
      <div className="bg-white rounded-lg py-4 px-6">
        {props.children}
      </div>
    </section>
  );
}

export default EventContent;
