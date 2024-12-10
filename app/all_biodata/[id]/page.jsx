import data from "./getData.jsx";
import Text from "./single_text.jsx";
export default async function SingleBiodata({ params }) {
  const { id } = await params;
  const fullData = await data(id);
  console.log(fullData);

  const {
    name,
    age,
    height,
    birthDate,
    marriedStatus,
    division,
    education,
    occupation,
    monthlyIncome,
    personalDetails,
    familyDetails,
    partnerDetails,
  } = fullData;

  return (
    <div>
      <div className="flex flex-col items-center justify-center bg-gray-100 p-4 text-center border rounded-3xl">
        <div className="bg-white shadow-md rounded-lg p-6 max-w-4xl w-full">
          <h1 className="text-2xl font-bold text-center mb-4 underline underline-offset-8 decoration-double text-gray-900">
            সম্পূর্ণ বায়োডাটা
          </h1>
          <div className="space-y-4">
            {" "}
            <hr />
            <Text text={"নাম"} value={name} />
            <hr />
            <Text text={"বয়স"} value={age} />
            <hr />
            <Text text={"উচ্চতা"} value={height} />
            <hr />
            <Text text={"জন্ম তারিখ"} value={birthDate} />
            <hr />
            <Text text={"বৈবাহিক অবস্থা"} value={marriedStatus} />
            <hr />
            <Text text={"শিক্ষাগত যোগ্যতা"} value={education} />
            <hr />
            <Text text={"পেশা"} value={occupation} />
            <hr />
            <Text text={"মাসিক ইনকাম"} value={monthlyIncome} />
            <hr />
            <Text text={"যেমন জীবনসঙ্গী চাই"} value={partnerDetails} />
            <hr />
            <Text text={"ব্যাক্তিগত তথ্য"} value={personalDetails} />
            <hr />
            <Text text={"পারিবারিক তথ্য"} value={familyDetails} />
            <hr />
            <Text text={"বিভাগ"} value={division} />
            <hr />
            <Text
              text={"ঠিকানা"}
              value={"ঠিকানা পেতে আমাদের ফেসবুক পেইজে মেসেজ দিন।"}
            />
            <hr />
            <Text
              text={"যোগাযোগের তথ্য"}
              value={"যোগাযোগের তথ্য পেতে আমাদের ফেসবুক পেইজে মেসেজ দিন।"}
            />
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
}
