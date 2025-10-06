import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, CheckCircle, Info, XCircle } from "lucide-react";

const Alerts = () => {
  const alerts = [
    { 
      id: 1,
      type: "warning", 
      title: "Moderate Rainfall Expected",
      message: "Moderate to heavy rainfall expected in your area within the next 3 days. Prepare drainage systems.",
      time: "2 hours ago",
      severity: "medium"
    },
    { 
      id: 2,
      type: "success", 
      title: "Optimal Planting Conditions",
      message: "Soil moisture and temperature levels are optimal for planting. Consider starting your planting season.",
      time: "5 hours ago",
      severity: "low"
    },
    { 
      id: 3,
      type: "danger", 
      title: "High Temperature Alert",
      message: "Temperatures expected to reach 38°C tomorrow. Ensure adequate irrigation for your crops.",
      time: "1 day ago",
      severity: "high"
    },
    { 
      id: 4,
      type: "info", 
      title: "Pest Activity Detected",
      message: "Increased pest activity reported in neighboring farms. Monitor your crops regularly.",
      time: "2 days ago",
      severity: "medium"
    },
    { 
      id: 5,
      type: "success", 
      title: "Good Weather Forecast",
      message: "Favorable weather conditions expected for the next week. Good time for harvesting.",
      time: "3 days ago",
      severity: "low"
    },
  ];

  const getAlertIcon = (type: string) => {
    switch (type) {
      case "warning":
        return <AlertTriangle className="h-5 w-5" />;
      case "success":
        return <CheckCircle className="h-5 w-5" />;
      case "danger":
        return <XCircle className="h-5 w-5" />;
      default:
        return <Info className="h-5 w-5" />;
    }
  };

  const getAlertStyles = (type: string) => {
    switch (type) {
      case "warning":
        return "bg-accent/10 border-accent text-accent";
      case "success":
        return "bg-primary/10 border-primary text-primary";
      case "danger":
        return "bg-destructive/10 border-destructive text-destructive";
      default:
        return "bg-blue-500/10 border-blue-500 text-blue-500";
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Alerts</h1>
          <p className="text-muted-foreground">Stay informed about important farm conditions</p>
        </div>

        <div className="grid gap-4">
          {alerts.map((alert) => (
            <Card key={alert.id} className="border-2 border-border shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${getAlertStyles(alert.type)}`}>
                    {getAlertIcon(alert.type)}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-1">{alert.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{alert.message}</p>
                    <span className="text-xs text-muted-foreground">{alert.time}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Alerts;
