"use client";

import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { User } from "@supabase/supabase-js";

interface AuthGuardProps {
  children: ReactNode;
}

export default function AuthGuard({ children }: AuthGuardProps) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
      setLoading(false);
      if (!user) {
        router.push("/login"); // Redirect to login if no user is found
      }
    };

    fetchUser();
  }, [router]);

  if (loading) {
    return <div>Loading...</div>; // You can replace this with a loading spinner if you prefer
  }

  if (!user) {
    return null; // This will never be reached since we redirect the user
  }

  return <>{children}</>; // If user exists, render the protected content
}
