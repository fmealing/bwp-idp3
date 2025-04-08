"use client";

import { BadgeCheck, ThermometerSun, AlertTriangle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import ConditionItem from "@/components/dashboard/ConditionItem";
import StatCard from "@/components/dashboard/StatCard";
import WeightChart from "@/components/charts/WeightChart";
import EnergyChart from "@/components/charts/EnergyChart";

export default function Dashboard() {
  return (
    <div className="min-h-screen p-6 bg-background text-text-primary">
      {/* Top Bar */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="flex space-x-4">
          <Button variant="outline">Settings</Button>
          <Button>Logout</Button>
        </div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Alerts */}
          <Card className="border-2 border-alert">
            <CardContent className="pt-6">
              <h2 className="font-bold text-lg mb-2 text-alert">Alerts</h2>
              <ul className="space-y-2 text-sm">
                <li>🚨 The Red Pandas haven’t been fed yet</li>
                <li>🚨 The Komodo dragon enclosure is too cold</li>
              </ul>
            </CardContent>
          </Card>

          {/* Enclosure Conditions */}
          <Card>
            <CardContent className="pt-6">
              <h2 className="font-bold text-lg mb-4">Enclosure Conditions</h2>
              <div className="space-y-4">
                <ConditionItem
                  label="Temperature"
                  value="30°C"
                  icon={<ThermometerSun />}
                />
                <ConditionItem label="CO₂ Levels" value="420 ppm" />
                <ConditionItem label="Humidity" value="68.9%" />
                <ConditionItem label="UV" value="10%" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column: 2 Columns */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Weight */}
          <Card className="col-span-2">
            <CardContent className="pt-6">
              <h2 className="font-bold text-lg mb-4">Weight</h2>
              <div className="w-full h-40 bg-secondary rounded flex items-center justify-center">
                <WeightChart />
              </div>

              <div className="mt-4 flex justify-between">
                <StatCard
                  label="Weekly High"
                  value="24.3kg"
                  className="text-alert"
                />
                <StatCard
                  label="Weekly Low"
                  value="24.1kg"
                  className="text-green-600"
                />
                <StatCard
                  label="Health Indication"
                  value="Healthy"
                  icon={<BadgeCheck className="text-success w-4 h-4" />}
                  className="text-success"
                />
              </div>
            </CardContent>
          </Card>

          {/* Energy Usage */}
          <Card className="col-span-2">
            <CardContent className="pt-6">
              <h2 className="font-bold text-lg mb-4">Energy Usage</h2>
              <div className="w-full h-40 bg-secondary rounded flex items-center justify-center">
                <EnergyChart />
              </div>

              <div className="mt-4 flex justify-between">
                <StatCard
                  label="Highest Usage"
                  value="Komodo Dragon"
                  className="text-alert"
                />
                <StatCard
                  label="Heat Loss Alert"
                  value="High"
                  className="text-warning"
                  icon={<AlertTriangle className="w-4 h-4" />}
                />
                <StatCard
                  label="Energy Usage"
                  value="6.9 kW"
                  className="text-alert"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
