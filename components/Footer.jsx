import Link from "next/link";

// components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400  rounded-t-3xl  font-mono mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="">
          <div className="text-center">
            <h1 className="mr-2 text-xl font-mono">
              The website was created by- 👇
            </h1>
            <div className="mt-8">
              <Link
                href="https://www.facebook.com/arifbillah64"
                passHref
                target="_blank"
                rel="noopener noreferrer"
                className="border font-bold px-4 py-2 text-lg rounded-full underline underline-offset-4 "
              >
                {/* bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 */}
                Arif Billah
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} My Website. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
