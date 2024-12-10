"use client";

export default function DeleteButton({ dataName, dataUserName }) {
  const deleteBiodata = () => {
    if (confirm(`Bro! Are u sure to delete ${dataUserName}'s Biodata??`)) {
      fetch(
        `https://dindar-patro-patri-b8013-default-rtdb.firebaseio.com/AllBiodata/${dataName}.json`,
        {
          method: "DELETE",
        }
      )
        .then(() => alert("Deleted the Biodata!!"))
        .catch(() => alert("Error! Contact with Arif Billah."));
    } else {
      alert("not delete, be careful bro!!");
    }
  };

  return (
    <button
      onClick={deleteBiodata}
      className="px-1 py-4 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75 active:bg-red-700 transition-all duration-300 ease-in-out text-xl  overflow-hidden"
    >
      Delete
    </button>
  );
}
