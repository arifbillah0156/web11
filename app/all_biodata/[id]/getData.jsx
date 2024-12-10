export default async function GetBiodataWithId(id) {
  const result = await fetch(
    `https://dindar-patro-patri-b8013-default-rtdb.firebaseio.com/AllBiodata/${id}.json`
  );

  if (result.ok) {
    return result.json();
  } else {
    return {
      userId: 1,
      id: 1,
      title: "Empty",
      body: "Empty",
    };
  }
}
