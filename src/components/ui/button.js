import Link from "next/link";

function Button(props) {
  if (props.link) {
    return (
      <Link
        href={props.link}
        className="capitalize font-semibold border-2 rounded-md px-4 py-1 dark:text-white dark:border-white border-slate-500 text-slate-600 hover:bg-slate-500 hover:text-white duration-300"
      >
        {props.children}
      </Link>
    );
  }
  return (
    <button
      onClick={props.onClick}
      className="capitalize font-semibold border-2 rounded-md px-4 py-1 dark:text-white dark:border-white border-slate-500 text-slate-600 hover:bg-slate-500 hover:text-white duration-300"
    >
      {props.children}
    </button>
  );
}

export default Button;
