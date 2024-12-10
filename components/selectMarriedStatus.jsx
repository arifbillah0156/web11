import React from "react";

export default function SelectMarriedStatus({ all }) {
  return (
    <>
      {all ? <option>সকল</option> : ""}
      <option value="অবিবাহিত">অবিবাহিত</option>
      <option value="ডিভোর্সড">ডিভোর্সড</option>
      <option value="বিধবা">বিধবা</option>
    </>
  );
}
