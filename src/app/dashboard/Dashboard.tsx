"use client";

import { BadgeCheck, ThermometerSun, AlertTriangle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ConditionItem from "@/components/dashboard/ConditionItem";
import StatCard from "@/components/dashboard/StatCard";
import WeightChart from "@/components/charts/WeightChart";
import EnergyChart from "@/components/charts/EnergyChart";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { useQuery } from "@tanstack/react-query";
import { fetchReadings } from "@/lib/fetchReadings";

const DashboardPage = () => {
  const router = useRouter();

  const {
    data: readings = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["readings"],
    queryFn: fetchReadings,
  });

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.log("Error signing out:", error);
    } else {
      // Redirect to login page after successful logout
      router.push("/login");
    }
  };

  const weights = readings.map((r) => r.weight);
  const timestamps = readings.map((r) =>
    new Date(r.created_at).toLocaleString([], {
      day: "2-digit",
      month: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    })
  );

  const energy = readings.map((r) => r.energy_usage);

  if (isLoading) return <div className="p-6">Loading...</div>;
  if (error) return <div className="p-6 text-red-500">Error fetching data</div>;

  return (
    <div className="min-h-screen p-6 bg-background text-text-primary">
      {/* Top Bar */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <Button onClick={handleLogout}>Logout</Button>{" "}
      </div>

      <Button
        onClick={() => {
          console.log("Data: ", readings);
        }}
      >
        Testing
      </Button>

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
                  value={`${readings?.[0]?.temperature ?? "N/A"}°C`}
                  icon={<ThermometerSun />}
                />
                <ConditionItem
                  label="CO₂ Levels"
                  value={`${readings?.[0]?.co2 ?? "N/A"} ppm`}
                />
                <ConditionItem
                  label="Humidity"
                  value={`${readings?.[0]?.humidity ?? "N/A"}%`}
                />
                <ConditionItem
                  label="UV"
                  value={`${readings?.[0]?.uv ?? "N/A"}%`}
                />
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
              <div className="w-full h-60 px-2 flex items-center justify-center">
                <WeightChart weights={weights} labels={timestamps} />
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
              <div className="w-full h-60 px-2 flex items-center justify-center">
                <EnergyChart energyUsage={energy} labels={timestamps} />
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
};

export default DashboardPage;
