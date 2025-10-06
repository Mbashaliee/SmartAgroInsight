import { useState, useEffect } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cloud, CloudRain, Sun, Wind, Droplets, ThermometerSun, CloudDrizzle } from "lucide-react";

const API_KEY = "312c7a7fa1b82684d509c4b336c62e48";
const CITY = "Kano,NG"; // Northern Nigeria - you can change this

const Weather = () => {
  const [currentWeather, setCurrentWeather] = useState<any>(null);
  const [forecast, setForecast] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const getWeatherIcon = (condition: string) => {
    const lower = condition.toLowerCase();
    if (lower.includes("rain")) return CloudRain;
    if (lower.includes("cloud")) return Cloud;
    if (lower.includes("clear") || lower.includes("sun")) return Sun;
    if (lower.includes("drizzle")) return CloudDrizzle;
    return Cloud;
  };

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        // Fetch current weather
        const currentRes = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`
        );
        const currentData = await currentRes.json();
        setCurrentWeather(currentData);

        // Fetch 5-day forecast
        const forecastRes = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${CITY}&appid=${API_KEY}&units=metric`
        );
        const forecastData = await forecastRes.json();

        // Process forecast data - get one entry per day at noon
        const dailyForecasts = forecastData.list.filter((_: any, index: number) => index % 8 === 0).slice(0, 7);
        const processedForecast = dailyForecasts.map((item: any) => {
          const date = new Date(item.dt * 1000);
          const dayName = date.toLocaleDateString("en-US", { weekday: "long" });
          return {
            day: dayName,
            temp: Math.round(item.main.temp),
            condition: item.weather[0].main,
            humidity: item.main.humidity,
            wind: Math.round(item.wind.speed * 3.6), // Convert m/s to km/h
            icon: getWeatherIcon(item.weather[0].main),
          };
        });
        setForecast(processedForecast);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center h-64">
          <p className="text-muted-foreground">Loading weather data...</p>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Weather Forecast</h1>
          <p className="text-muted-foreground">Live weather data for {currentWeather?.name || "your farm"}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border-2 border-border shadow-md">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Current Temperature
              </CardTitle>
              <ThermometerSun className="h-4 w-4 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground">
                {currentWeather ? Math.round(currentWeather.main.temp) : "--"}°C
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Feels like {currentWeather ? Math.round(currentWeather.main.feels_like) : "--"}°C
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-border shadow-md">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Humidity
              </CardTitle>
              <Droplets className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground">
                {currentWeather?.main.humidity || "--"}%
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                {currentWeather?.main.humidity > 70 ? "High" : currentWeather?.main.humidity > 40 ? "Moderate" : "Low"} level
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-border shadow-md">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Wind Speed
              </CardTitle>
              <Wind className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground">
                {currentWeather ? Math.round(currentWeather.wind.speed * 3.6) : "--"} km/h
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                {currentWeather?.wind.speed * 3.6 < 15 ? "Light breeze" : "Moderate wind"}
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="border-2 border-border shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Cloud className="h-5 w-5 text-primary" />
              7-Day Weather Forecast
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              {forecast.map((day, index) => {
                const IconComponent = day.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
                  >
                    <div className="flex items-center gap-4 flex-1">
                      <div className="w-24">
                        <span className="font-medium text-foreground">{day.day}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <IconComponent className="h-5 w-5 text-accent" />
                        <span className="text-sm text-muted-foreground">{day.condition}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-center">
                        <div className="text-xs text-muted-foreground">Temp</div>
                        <div className="text-lg font-bold text-accent">{day.temp}°C</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-muted-foreground">Humidity</div>
                        <div className="text-sm font-medium text-foreground">{day.humidity}%</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-muted-foreground">Wind</div>
                        <div className="text-sm font-medium text-foreground">{day.wind} km/h</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Weather;
