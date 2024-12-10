import Link from "next/link";

export default function SubmitWelcome() {
  return (
    <>
      <div className="text-center">
        <h3 className="text-4xl font-semibold text-green-600 underline underline-offset-4 decoration-wavy mb-3">
          ধন্যবাদ
        </h3>
        <hr />
        <p className="text-gray-700">
          “আপনার বায়োডাটা পেন্ডিং আছে। সব তথ্য সঠিক হলে এপ্রুভ করা হবে। আমাদের
          পেইজে মেসেজ দিতে নিচের লিংকে ক্লিক করুন।”
        </p>
        <hr />

        <Link
          href="https://www.facebook.com/DeendarPatraPatrisandhan"
          passHref
          target="_blank"
          rel="noopener noreferrer"
          className="underline  border text-lg text-green-600 underline-offset-4 "
        >
          <mark>“ক্লিক করুন”</mark>
        </Link>
      </div>
    </>
  );
}
