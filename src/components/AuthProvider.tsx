"use client";

import { createPagesBrowserClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import Navbar from "@/components/NavBar";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [supabaseClient] = useState(() => createPagesBrowserClient());

  return (
    <SessionContextProvider supabaseClient={supabaseClient}>
      <Navbar />
      {children}
      <ToastContainer position="top-right" autoClose={3000} />
    </SessionContextProvider>
  );
}
