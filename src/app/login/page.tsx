"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Test user credentials
  // TODO: DELETE THIS IN PRODUCTION
  // I want to emphasise how bad practice this is
  // Never do this in an actual website. Just never. This is just for prototype
  const testUser = {
    email: "staff@bwp.co.uk",
    password: "komodo123",
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement)
      .value;

    setTimeout(() => {
      if (email === testUser.email && password === testUser.password) {
        toast.success("Welcome back, staff member!");
        router.push("/dashboard");
      } else {
        toast.error("Invalid email or password.");
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <main className="min-h-screen flex">
      {/* Left: Login Form */}
      <div className="w-full md:w-1/2 bg-white flex items-center justify-center px-8 py-16">
        <div className="max-w-md w-full">
          <h1 className="text-3xl font-bold text-primary mb-6">Staff Login</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" required />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input id="password" name="password" type="password" required />
            </div>
            <Button type="submit" className="w-full mt-2" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </Button>
          </form>
          <p className="text-xs mt-4 text-text-secondary">
            Use <strong>staff@bwp.co.uk</strong> / <strong>komodo123</strong> to
            log in.
          </p>
        </div>
      </div>

      {/* Right: Image */}
      <div className="hidden md:flex w-1/2 items-center justify-center bg-secondary relative">
        <Image
          src="/images/komodo-dragon.jpg"
          alt="Wildlife Park"
          fill
          className="object-cover"
        />
      </div>
    </main>
  );
}
