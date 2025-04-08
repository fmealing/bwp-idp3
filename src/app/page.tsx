"use client";
import Link from "next/link";
import { PawPrint } from "lucide-react";
import Image from "next/image";

const LandingPage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#F7FAFC] to-[#E6FFFA] flex flex-col items-center justify-center px-6 py-8 relative">
      {/* Main Card Container */}
      <div className="bg-white/80 backdrop-blur-lg rounded-xl shadow-xl p-12 max-w-2xl w-full text-center border border-gray-200 z-10">
        {/* Branding and Title */}
        <div className="flex items-center justify-center mb-6 text-primary">
          <PawPrint className="w-10 h-10 mr-3" />
          <span className="text-2xl font-bold tracking-tight">
            Birmingham Wildlife Park
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-primary mb-6">
          Wildlife Park Dashboard
        </h1>

        {/* Description */}
        <p className="text-md md:text-lg text-text-secondary mb-8">
          Realtime monitoring for enclosure conditions, empowering animal care
          teams with live data — powered by ESP32 and Supabase.
        </p>

        {/* Call to Action */}
        <div className="flex flex-col items-center space-y-4">
          <Link
            href="/login"
            className="inline-block px-8 py-4 bg-primary text-white rounded-lg hover:bg-green-800 transition-all transform hover:scale-105 font-medium text-lg"
          >
            Staff Login
          </Link>

          {/* Add additional links or descriptions */}
          <div className="text-sm text-text-secondary">
            <p>
              Need help?{" "}
              <Link href="/help" className="text-primary">
                Visit our Help Center
              </Link>
            </p>
            <p>
              For support, contact us at{" "}
              <span className="font-semibold">support@bwp.co.uk</span>
            </p>
          </div>
        </div>
      </div>
      {/* Image or Background Section */}
      <div className="absolute inset-0 z-0 opacity-70">
        <Image
          src="/images/wildlife-park.jpg" // Double-check this path
          alt="Wildlife Park Background"
          fill
          priority
          className="object-cover"
          quality={80}
        />
      </div>
    </main>
  );
};

export default LandingPage;
