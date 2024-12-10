import GuideSection from "./guideSection";
export default function Guide() {
  return (
    <div className="min-h-screen bg-gray-100 my-6 py-6 rounded-3xl">
      <header className="py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold underline decoration-double text-gray-900">
            ~সাধারণ নির্দেশিকা~
          </h1>
        </div>
      </header>

      <main className="container mx-auto px-4">
        <GuideSection
          header="১. সতর্কতা:-"
          text="কর্তৃপক্ষ শুধু পাত্র বা পাত্রীর কাছ থেকে বায়োডাটা সংগ্রহ করে। এরপর
            আগ্রহী পাত্র বা পাত্রীদের কে তাদের পছন্দের পাত্র বা পাত্রীর বায়োডাটা
            সরবরাহ করে। এক্ষেত্রে কর্তৃপক্ষের পক্ষে বায়োডাটা যাচাই-বাছাই বা
            ভেরিফাই করার সুবিধা বা সুযোগ থাকে না বা কর্তৃপক্ষ এই দায়িত্ব নেয় না।
            তাই আপনারা নিজ দায়িত্বে ভালো ভাবে যাচাই বাচাই করে নিবেন। কেউ কোনো
            সমস্যা, প্রতারণার শিকার হলে কর্তৃপক্ষ দুনিয়া ও আখিরাতে কোনোভাবেই
            কোনোসময়ই দায়ী থাকবে না এবং কারো কাছে জবাবদিহি করতে বাধ্য থাকবে না।
            এই শর্তে রাজি থাকলে তবেই আগ্রহী হন।"
        />{" "}
        <br />
        <GuideSection
          header="২. বায়োডাটা জমা দিতে কত টাকা লাগে:-"
          text="দ্বীনদার পাত্র পাত্রীর সন্ধান ওয়েব সাইটে সম্পূর্ণ বিনামূল্যে বায়োডাটা জমা দেওয়া যায়।"
        />
        <br />
        <section className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 underline decoration-wavy underline-offset-4">
            ৩. পাত্র/পাত্রীর বায়োডাটায় আগ্রহী হলে কিভাবে যোগাযোগ করবো?
          </h2>
          <ul className="list-disc list-inside text-gray-800 space-y-2 text-lg">
            <li>এক্ষেত্রে আপনাকে নির্দিষ্ট ফি প্রদান করতে হবে।</li>
            <li>
              প্রথমে আমাদের বিকাশ/নগদ পার্সোনাল নাম্বারে{" "}
              <s
                title="বর্তমানে ১৫০ টাকা ডিসকাউন্ট দেওয়া হচ্ছে!"
                className="px-2 cursor-pointer"
              >
                ২০০
              </s>{" "}
              ৫০ টাকা সেন্ড মানি করতে হবে।
            </li>
            <li>
              আমাদের বিকাশ/নগদ পার্সোনাল নাম্বার:-{" "}
              <span className="font-mono text-xl">01831-606920</span>
            </li>
            <li>
              টাকা সেন্ড মানি করার পর ট্রান্জেকশন আইডি আমাদের ফেসবুক পেইজে মেসেজ
              করে দিবেন।
            </li>
            <li>
              তারপর আপনার পছন্দকৃত পাত্র/পাত্রীর{" "}
              <span className="text-blue-600">
                ‘যোগাযোগের তথ্য/ঠিকানা, ফেসবুক আইডি লিংক (যদি থাকে) ও মোবাইল
                নাম্বার’
              </span>{" "}
              আপনার ফেসবুক আইডিতে মেসেজ করে দেওয়া হবে।
            </li>
          </ul>
        </section>{" "}
        <br />
        <GuideSection
          header="৪. আমার জমা দেওয়া বায়োডাটা ডিলিট করবো কিভাবে?"
          text="আপনার জমা হওয়া বায়োডাটা ডিলিট করতে আমাদের ফেসবুক পেইজে মেসেজ দিয়ে বলুন।"
        />
      </main>
    </div>
  );
}
