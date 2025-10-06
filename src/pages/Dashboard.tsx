import { useEffect, useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cloud, Sprout, Droplets, TrendingUp, AlertTriangle, ThermometerSun, Star } from "lucide-react";

const Dashboard = () => {
  const [totalPoints, setTotalPoints] = useState(0);

  useEffect(() => {
    const savedPoints = localStorage.getItem("agroGameTotalPoints");
    if (savedPoints) setTotalPoints(parseInt(savedPoints));
  }, []);
  const weatherData = [
    { day: "Mon", temp: 32, condition: "Sunny" },
    { day: "Tue", temp: 30, condition: "Partly Cloudy" },
    { day: "Wed", temp: 28, condition: "Cloudy" },
    { day: "Thu", temp: 29, condition: "Rain" },
    { day: "Fri", temp: 31, condition: "Sunny" },
    { day: "Sat", temp: 33, condition: "Hot" },
    { day: "Sun", temp: 32, condition: "Sunny" },
  ];

  const alerts = [
    { type: "warning", message: "Moderate rainfall expected in 3 days", time: "2 hours ago" },
    { type: "success", message: "Optimal planting conditions detected", time: "5 hours ago" },
    { type: "danger", message: "High temperature alert for tomorrow", time: "1 day ago" },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here's your farm overview.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="border-2 border-primary/30 shadow-md hover:shadow-lg transition-shadow bg-gradient-to-br from-primary/5 to-accent/5">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Game Points
              </CardTitle>
              <Star className="h-4 w-4 text-primary fill-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">{totalPoints}</div>
              <p className="text-xs text-muted-foreground mt-1">Total earned</p>
            </CardContent>
          </Card>

          <Card className="border-2 border-border shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Temperature
              </CardTitle>
              <ThermometerSun className="h-4 w-4 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground">32°C</div>
              <p className="text-xs text-muted-foreground mt-1">Hot and sunny today</p>
            </CardContent>
          </Card>

          <Card className="border-2 border-border shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Crop Health
              </CardTitle>
              <Sprout className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">87%</div>
              <p className="text-xs text-muted-foreground mt-1">Excellent condition</p>
            </CardContent>
          </Card>

          <Card className="border-2 border-border shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Soil Moisture
              </CardTitle>
              <Droplets className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground">62%</div>
              <p className="text-xs text-muted-foreground mt-1">Optimal level</p>
            </CardContent>
          </Card>

          <Card className="border-2 border-border shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Yield Prediction
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">+28%</div>
              <p className="text-xs text-muted-foreground mt-1">Above average</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Weather Forecast */}
          <Card className="border-2 border-border shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Cloud className="h-5 w-5 text-primary" />
                7-Day Weather Forecast
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {weatherData.map((day, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <span className="font-medium text-foreground w-12">{day.day}</span>
                      <span className="text-sm text-muted-foreground">{day.condition}</span>
                    </div>
                    <span className="text-lg font-bold text-accent">{day.temp}°C</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* AI Prediction & Alerts */}
          <div className="space-y-6">
            {/* AI Prediction Card */}
            <Card className="border-2 border-primary/30 shadow-md bg-gradient-to-br from-primary/5 to-accent/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  AI Prediction
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-card rounded-lg border-2 border-primary/20">
                  <p className="text-sm font-medium text-muted-foreground mb-2">
                    Recommendation for next planting:
                  </p>
                  <p className="text-base text-foreground leading-relaxed">
                    AI suggests planting <span className="font-bold text-primary">millet</span> in{" "}
                    <span className="font-bold text-primary">7 days</span> for optimal yield based on 
                    predicted rainfall patterns and soil conditions.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-card rounded-lg text-center border border-border">
                    <div className="text-xs text-muted-foreground">Expected Rainfall</div>
                    <div className="text-lg font-bold text-primary">Moderate</div>
                  </div>
                  <div className="p-3 bg-card rounded-lg text-center border border-border">
                    <div className="text-xs text-muted-foreground">Best Crop</div>
                    <div className="text-lg font-bold text-primary">Sorghum</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Alerts */}
            <Card className="border-2 border-border shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-accent" />
                  Recent Alerts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {alerts.map((alert, index) => (
                    <div
                      key={index}
                      className={`p-3 rounded-lg border-l-4 ${
                        alert.type === "warning"
                          ? "bg-accent/10 border-accent"
                          : alert.type === "success"
                          ? "bg-primary/10 border-primary"
                          : "bg-destructive/10 border-destructive"
                      }`}
                    >
                      <p className="text-sm text-foreground">{alert.message}</p>
                      <p className="text-xs text-muted-foreground mt-1">{alert.time}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Placeholder */}
        <Card className="border-2 border-border shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Cloud className="h-5 w-5 text-primary" />
              Farm Location Map
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-muted/30 rounded-lg h-64 flex items-center justify-center border-2 border-dashed border-border">
              <div className="text-center space-y-2">
                <Cloud className="h-12 w-12 text-muted-foreground mx-auto" />
                <p className="text-muted-foreground">Interactive map view</p>
                <p className="text-sm text-muted-foreground">
                  Satellite data visualization will appear here
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
