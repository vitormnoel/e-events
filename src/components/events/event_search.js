import { useRef } from "react";

import Button from "../ui/button";

function EventsSearch(props) {
    const yearInputRef = useRef();
    const monthInputRef = useRef();

    function submitedHandler(event){
        //prevent reloading the page
        event.preventDefault();
        const selectedYear = yearInputRef.current.value;
        const selectedMonth = monthInputRef.current.value;

        props.onSearch(selectedYear, selectedMonth);
    }

  return (
    <form onSubmit={submitedHandler} className="capitalize container m-auto bg-white w-1/2 rounded-2xl p-6 mb-10">
      <div className="flex gap-10 justify-center items-center ">
        <div className="flex gap-2 items-center">
          <label htmlFor="year">year</label>
          <select id="year" ref={yearInputRef} className="w-[10vw] p-2 rounded-md">
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
          </select>
        </div>
        <div className="flex gap-2 items-center">
          <label htmlFor="month">month</label>
          <select id="month" ref={monthInputRef} className="w-[10vw] p-2 rounded-md">
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
        <Button>find events</Button>
      </div>
    </form>
  );
}

export default EventsSearch;
