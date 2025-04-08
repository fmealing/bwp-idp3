"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { supabase } from "@/lib/supabase";
import { Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement)
      .value;

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    // TODO: Delete this
    console.log("Data: ", data);

    if (error) {
      toast.error("Invalid email or password.");
    } else {
      toast.success("Welcome back!");
      router.push("/dashboard");
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen flex">
      {/* Left: Login Form */}
      <div className="w-full md:w-1/2 bg-white flex items-center justify-center px-8 py-16">
        <div className="max-w-md w-full">
          <h1 className="text-3xl font-bold text-primary mb-6">Staff Login</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" required />
            </div>

            {/* Password */}
            <div>
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  className="pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary"
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Login */}
            <Button type="submit" className="w-full mt-2" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </Button>
          </form>
          <p className="text-xs mt-4 text-text-secondary">
            Use <strong>staff@bwp.co.uk</strong> /{" "}
            <strong>Password1234!</strong> to log in.
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
