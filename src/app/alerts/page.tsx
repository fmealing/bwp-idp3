"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const alerts = [
  {
    id: 1,
    message: "Red Pandas haven’t been fed",
    severity: "critical",
    timestamp: "2025-04-08 09:12",
  },
  {
    id: 2,
    message: "Komodo dragon enclosure is too cold",
    severity: "warning",
    timestamp: "2025-04-08 07:55",
  },
];

export default function AlertsPage() {
  return (
    <div className="min-h-screen p-6 bg-background text-text-primary">
      <h1 className="text-2xl font-bold mb-6">All Alerts</h1>

      <div className="space-y-4">
        {alerts.map((alert) => (
          <Card key={alert.id}>
            <CardContent className="py-4 px-6 flex justify-between items-center">
              <div>
                <p className="font-semibold">{alert.message}</p>
                <p className="text-sm text-muted-foreground">
                  {alert.timestamp}
                </p>
              </div>
              <Badge
                variant={
                  alert.severity === "critical" ? "destructive" : "default"
                }
              >
                {alert.severity}
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
