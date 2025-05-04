"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import Image from "next/image";

export default function ResetPasswordPage() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    toast.success("Password reset email sent", {
      description: `If ${email} exists, you'll receive an email shortly.`,
    });

    setEmail("");
  };

  return (
    <main className="relative flex items-center justify-center min-h-screen px-4 bg-gray-50 overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/illustration1.jpg"
        alt="Background Illustration"
        fill
        className="object-cover opacity-20 z-0"
        priority
      />

      {/* Content Layer */}
      <div className="relative z-10 w-full max-w-sm">
        <Card className="shadow-xl border border-gray-200 dark:border-gray-700 backdrop-blur-sm bg-white/80 dark:bg-black/50">
          <CardContent className="space-y-4 py-8">
            <h1 className="text-2xl font-semibold text-center">
              Reset Your Password
            </h1>
            <p className="text-sm text-muted-foreground text-center">
              Enter your email and we’ll send you a reset link.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button type="submit" className="w-full">
                Send Reset Link
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
