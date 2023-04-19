import Link from "next/link";

function MainHeader() {
  return (
    <header className="bg-stone-100 drop-shadow-md fixed right-0 left-0">
      <div className="container m-auto flex items-end place-content-around p-6">
            <Link href='/' className="font-semibold text-2xl text-slate-500">e-Events</Link>
            <nav>
                <ul>
                    <li className="hover:text-slate-500 font-semibold duration-300">
                        <Link href='/events'>All Events</Link>
                    </li>
                </ul>
            </nav>
      </div>
    </header>
  );
}

export default MainHeader;
