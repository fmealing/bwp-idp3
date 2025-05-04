import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-12">
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-600">
        {/* About Us */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-2">About Us</h3>
          <p>
            This dashboard was built as part of a university project to monitor
            environmental conditions at Birmingham Wildlife Park.{" "}
            <Link
              href="/about"
              className="text-blue-600 hover:underline font-medium"
            >
              Learn more
            </Link>
          </p>
        </div>

        {/* Contact / Links */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-2">Contact</h3>
          <p>Email: fxm281@student.bham.ac.uk</p>

          <h4 className="mt-4 font-semibold text-gray-800 mb-1">Credits</h4>
          <ul className="list-disc list-inside">
            <li>Florian Mealing</li>
            <li>Nouraldeen Abdelmajeed</li>
            <li>Alfie Hands</li>
            <li>Ali Dharsee</li>
            <li>Ihsaan Ahmed</li>
            <li>Arsalan Khan</li>
            <li>Chris Jones</li>
          </ul>
        </div>

        {/* Legal / Info */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-2">Info</h3>
          <ul className="space-y-1">
            <li>This is a non-commercial university project.</li>
            <li>Sensor data may not reflect real-time conditions.</li>
            <li>
              Built with{" "}
              <a
                href="https://nextjs.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Next.js
              </a>{" "}
              and{" "}
              <a
                href="https://tailwindcss.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                TailwindCSS
              </a>
              .
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-xs text-gray-400 py-4 border-t">
        © {new Date().getFullYear()} Birmingham Wildlife Park Dashboard
      </div>
    </footer>
  );
};

export default Footer;
