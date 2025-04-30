import type { Metadata } from "next";
import AuthProvider from "@/components/AuthProvider";
import "./globals.css";
import ReactQueryProvider from "@/components/ReactQueryProvider";

export const metadata: Metadata = {
  title: "Birmingham Wildlife Tracker",
  description: "Ensuring the safety of the beloved animals at the park.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>
          <AuthProvider>{children}</AuthProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
