"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Settings() {
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [emailAlerts, setEmailAlerts] = useState(false);
  const [temperatureThreshold, setTemperatureThreshold] = useState({
    min: 18,
    max: 32,
  });
  const [weightThreshold, setWeightThreshold] = useState({
    min: -0.3,
    max: 0.3,
  });

  const handleSave = () => {
    console.log("Settings saved", {
      autoRefresh,
      emailAlerts,
      temperatureThreshold,
      weightThreshold,
    });
  };

  return (
    <div className="min-h-screen p-6 bg-background text-text-primary">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>

      <Card>
        <CardContent className="pt-6 space-y-10">
          {/* System Preferences */}
          <section className="space-y-4">
            <h2 className="text-lg font-semibold text-text-secondary">
              System Preferences
            </h2>

            <div className="flex items-center justify-between">
              <Label htmlFor="auto-refresh">Enable Auto Refresh</Label>
              <Switch
                id="auto-refresh"
                checked={autoRefresh}
                onCheckedChange={setAutoRefresh}
              />
            </div>

            <div className="flex items-center justify-between">
              <Label htmlFor="email-alerts">Enable Email Alerts</Label>
              <Switch
                id="email-alerts"
                checked={emailAlerts}
                onCheckedChange={setEmailAlerts}
              />
            </div>
          </section>

          {/* Temperature Thresholds */}
          <section className="space-y-4">
            <h2 className="text-lg font-semibold text-text-secondary">
              Temperature Thresholds (°C)
            </h2>
            <div className="flex gap-4">
              <div className="flex-1">
                <Label htmlFor="temp-min">Min Temp</Label>
                <Input
                  id="temp-min"
                  type="number"
                  value={temperatureThreshold.min}
                  onChange={(e) =>
                    setTemperatureThreshold((prev) => ({
                      ...prev,
                      min: Number(e.target.value),
                    }))
                  }
                  min={-10}
                />
              </div>
              <div className="flex-1">
                <Label htmlFor="temp-max">Max Temp</Label>
                <Input
                  id="temp-max"
                  type="number"
                  value={temperatureThreshold.max}
                  onChange={(e) =>
                    setTemperatureThreshold((prev) => ({
                      ...prev,
                      max: Number(e.target.value),
                    }))
                  }
                  max={60}
                />
              </div>
            </div>
          </section>

          {/* Weight Fluctuation Thresholds */}
          <section className="space-y-4">
            <h2 className="text-lg font-semibold text-text-secondary">
              Weight Fluctuation Thresholds (kg)
            </h2>
            <p className="text-sm text-text-secondary">
              Set acceptable daily weight change range for animals
            </p>
            <div className="flex gap-4">
              <div className="flex-1">
                <Label htmlFor="weight-min">Min Δ</Label>
                <Input
                  id="weight-min"
                  type="number"
                  step="0.01"
                  value={weightThreshold.min}
                  onChange={(e) =>
                    setWeightThreshold((prev) => ({
                      ...prev,
                      min: Number(e.target.value),
                    }))
                  }
                />
              </div>
              <div className="flex-1">
                <Label htmlFor="weight-max">Max Δ</Label>
                <Input
                  id="weight-max"
                  type="number"
                  step="0.01"
                  value={weightThreshold.max}
                  onChange={(e) =>
                    setWeightThreshold((prev) => ({
                      ...prev,
                      max: Number(e.target.value),
                    }))
                  }
                />
              </div>
            </div>
          </section>

          {/* Save Button */}
          <div className="pt-4">
            <Button onClick={handleSave} className="w-full">
              Save Settings
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
