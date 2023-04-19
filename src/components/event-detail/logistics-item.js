function LogisticsItem(props) {
  const { icon: Icon } = props;

  return (
    <li className="mb-6 flex items-center gap-2">
      <span className="w-10">
        <Icon />
      </span>
      <span className="text-md">{props.children}</span>
    </li>
  );
}

export default LogisticsItem;
