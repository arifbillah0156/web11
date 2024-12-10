"use client";
import { push, ref, set } from "firebase/database";
import { database } from "@/lib/firebase";

export default function ApproveButton({ dataObj, dataName }) {
  const approveBiodata = async () => {
    try {
      const usersRef = ref(database, "ApprovedBiodata");
      const newDataRef = await push(usersRef);

      set(newDataRef, dataObj);

      fetch(
        `https://dindar-patro-patri-b8013-default-rtdb.firebaseio.com/AllBiodata/${dataName}.json`,
        {
          method: "DELETE",
        }
      )
        .then(() => alert("Success."))
        .catch(() => alert("Error! Contact with Arif Billah."));
    } catch (error) {
      alert("Your Data is not Approved!!");
    }
  };

  return (
    <button
      type="button"
      onClick={approveBiodata}
      className="px-1 py-4 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 transition-all duration-300 ease-in-out text-xl overflow-hidden"
    >
      Approve
    </button>
  );
}
