"use client";
import Link from "next/link";
import { PawPrint } from "lucide-react";

const LandingPage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#F7FAFC] to-[#E6FFFA] flex items-center justify-center px-6">
      <div className="bg-white/80 backdrop-blur-lg rounded-xl shadow-lg p-10 max-w-2xl w-full text-center border border-gray-200">
        <div className="flex items-center justify-center mb-4 text-primary">
          <PawPrint className="w-8 h-8 mr-2" />
          <span className="text-xl font-semibold tracking-tight">
            BWP Internal
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          Wildlife Park Dashboard
        </h1>

        <p className="text-md md:text-lg text-text-secondary mb-6">
          Realtime monitoring for enclosure conditions. Empowering animal care
          teams with live data — powered by ESP32 and Supabase.
        </p>

        <Link
          href="/login"
          className="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-green-800 transition font-medium"
        >
          Staff Login
        </Link>
      </div>
    </main>
  );
};

export default LandingPage;
