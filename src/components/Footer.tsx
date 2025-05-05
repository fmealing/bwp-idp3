import Link from "next/link";
import { FaEnvelope, FaExternalLinkAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-sm">
        {/* About */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">About</h3>
          <p className="mb-2">
            Dashboard project for monitoring environmental data at Birmingham
            Wildlife Park.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center text-blue-400 hover:underline"
          >
            Learn more <FaExternalLinkAlt className="ml-1 h-3 w-3" />
          </Link>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
          <p className="flex items-center gap-2">
            <FaEnvelope /> fxm281@student.bham.ac.uk
          </p>
        </div>

        {/* Credits */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Credits</h3>
          <ul className="space-y-1">
            <li>Florian Mealing</li>
            <li>Nouraldeen Abdelmajeed</li>
            <li>Alfie Hands</li>
            <li>Ali Dharsee</li>
            <li>Ihsaan Ahmed</li>
            <li>Arsalan Khan</li>
            <li>Chris Jones</li>
          </ul>
        </div>

        {/* Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Info</h3>
          <ul className="space-y-2">
            <li>This is a non-commercial student project.</li>
            <li>Data may not be in real-time.</li>
            <li>
              Built with{" "}
              <a
                href="https://nextjs.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                Next.js
              </a>{" "}
              &{" "}
              <a
                href="https://tailwindcss.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                TailwindCSS
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 py-4 border-t border-gray-700">
        © {new Date().getFullYear()} Birmingham Wildlife Park Dashboard
      </div>
    </footer>
  );
};

export default Footer;
