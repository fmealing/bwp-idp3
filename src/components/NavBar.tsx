"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn2 } from "@/lib/utils";
import Image from "next/image";

const navItems = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "All Alerts", href: "/alerts" },
  { name: "Settings", href: "/settings" },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="w-full bg-white border-b border-gray-200 shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4">
        {/* Logo and Title */}
        <Link href="/" className="flex items-center space-x-3 text-primary">
          <Image
            src="/images/bcc-logo.png"
            alt="Logo of Birmingham City Council"
            width={32}
            height={32}
            className="rounded"
          />
          <span className="text-lg font-semibold">
            Birmingham Wildlife Park
          </span>
        </Link>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-4">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={cn2(
                    "text-sm font-medium px-5 py-2 rounded-full border transition-all duration-200",
                    isActive
                      ? "bg-primary/10 text-primary border-primary"
                      : "text-text-secondary border-gray-300 hover:text-primary hover:border-primary"
                  )}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Placeholder for user actions */}
        {/* TODO: Add something here */}
        <div className="text-sm text-text-secondary hidden md:block">Staff</div>
      </nav>
    </header>
  );
};

export default Navbar;
