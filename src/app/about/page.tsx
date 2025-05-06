"use client";

import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const teamMembers = [
  { name: "Florian Mealing", image: "/images/team/florian.jpg" },
  { name: "Nouraldeen Abdelmajeed", image: "/images/team/nouraldeen.jpg" },
  { name: "Alfie Hands", image: "/images/team/alfie.jpeg" },
  { name: "Ali Dharsee", image: "/images/team/ali.jpg" },
  { name: "Ihsaan Ahmed", image: "/images/team/ihsaan.jpeg" },
  { name: "Arsalan Khan", image: "/images/team/arsalan.jpg" },
  { name: "Chris Jones", image: "/images/team/chrisj.jpg" },
];

const supervisor = {
  name: "Dr Chris Gilliam",
  image: "/images/team/supervisor.jpeg",
};

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br  dark:from-gray-900 dark:to-black py-12 px-4 flex items-center justify-center">
      <Card className="max-w-4xl w-full shadow-xl border border-gray-200 dark:border-gray-700 bg-white/90 dark:bg-gray-900/80 backdrop-blur-lg">
        <CardContent className="p-8 space-y-8">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-700 dark:text-blue-400">
            About This Project
          </h1>

          <p className="text-center text-gray-700 dark:text-gray-300">
            This dashboard was created as part of the{" "}
            <strong>Integrated Design Project 3</strong> module at the{" "}
            <strong>University of Birmingham</strong>. It provides a visual
            overview of environmental conditions at Birmingham Wildlife Park
            using real-time sensor data.
          </p>

          <Separator />

          <div>
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Team Members
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {teamMembers.map((member) => (
                <div
                  key={member.name}
                  className="flex flex-col items-center space-y-2 text-center"
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={80}
                    height={80}
                    className="rounded-full object-cover shadow w-20 h-20"
                  />
                  <span className="text-sm text-gray-800 dark:text-gray-200 font-medium">
                    {member.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              Supervisor
            </h2>
            <div className="flex items-center space-x-4">
              <Image
                src={supervisor.image}
                alt={supervisor.name}
                width={64}
                height={64}
                className="rounded-full object-cover shadow"
              />
              <p className="text-gray-700 dark:text-gray-300 font-medium">
                {supervisor.name}
              </p>
            </div>
          </div>

          <div className="text-center pt-4 text-xs text-muted-foreground">
            Made with ❤️ by Team BWP — {new Date().getFullYear()}
          </div>
        </CardContent>
      </Card>
    </main>
  );
};

export default AboutPage;
