import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Lightbulb, MapPin, Sprout, TrendingUp, Cloud, Droplets, ThermometerSun } from "lucide-react";

const AIInsights = () => {
  const [location, setLocation] = useState("");
  const [cropType, setCropType] = useState("");
  const [prediction, setPrediction] = useState<any>(null);

  const locations = [
    "Kano State",
    "Kaduna State",
    "Sokoto State",
    "Katsina State",
    "Jigawa State",
    "Zamfara State",
  ];

  const crops = [
    "Millet",
    "Sorghum",
    "Maize",
    "Rice",
    "Groundnut",
    "Cowpea",
  ];

  const getAIPrediction = () => {
    // Dummy AI prediction function
    const predictions = [
      {
        crop: cropType,
        location: location,
        rainfall: "Moderate",
        plantingWindow: "7-10 days",
        expectedYield: "+32%",
        recommendation: `Based on NASA satellite data and weather patterns, ${cropType} shows excellent growth potential in ${location}. Current soil moisture levels are optimal, and predicted rainfall in the next 10 days will support strong germination.`,
        soilCondition: "Excellent",
        temperature: "Optimal (28-32°C)",
        riskLevel: "Low",
        confidence: "94%",
      },
      {
        crop: cropType,
        location: location,
        rainfall: "High",
        plantingWindow: "14-21 days",
        expectedYield: "+18%",
        recommendation: `${cropType} in ${location} will benefit from delaying planting by 2 weeks. Heavy rainfall is predicted in the next week which may cause waterlogging. Wait for better drainage conditions.`,
        soilCondition: "Good",
        temperature: "Slightly Cool (24-27°C)",
        riskLevel: "Medium",
        confidence: "89%",
      },
      {
        crop: cropType,
        location: location,
        rainfall: "Low",
        plantingWindow: "3-5 days",
        expectedYield: "+28%",
        recommendation: `Immediate planting of ${cropType} recommended in ${location}. Current conditions are ideal with balanced moisture and temperature. Early planting will maximize the growing season before dry period.`,
        soilCondition: "Very Good",
        temperature: "Perfect (29-31°C)",
        riskLevel: "Very Low",
        confidence: "96%",
      },
    ];

    const randomPrediction = predictions[Math.floor(Math.random() * predictions.length)];
    setPrediction(randomPrediction);
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground flex items-center gap-3">
            <Lightbulb className="h-8 w-8 text-accent" />
            AI Insights
          </h1>
          <p className="text-muted-foreground mt-1">
            Get personalized farming recommendations powered by AI and NASA satellite data
          </p>
        </div>

        {/* Input Form */}
        <Card className="border-2 border-primary/20 shadow-lg">
          <CardHeader>
            <CardTitle>Generate AI Prediction</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="location" className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  Your Location
                </Label>
                <Select value={location} onValueChange={setLocation}>
                  <SelectTrigger id="location">
                    <SelectValue placeholder="Select your state" />
                  </SelectTrigger>
                  <SelectContent>
                    {locations.map((loc) => (
                      <SelectItem key={loc} value={loc}>
                        {loc}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="crop" className="flex items-center gap-2">
                  <Sprout className="h-4 w-4 text-primary" />
                  Crop Type
                </Label>
                <Select value={cropType} onValueChange={setCropType}>
                  <SelectTrigger id="crop">
                    <SelectValue placeholder="Select crop" />
                  </SelectTrigger>
                  <SelectContent>
                    {crops.map((crop) => (
                      <SelectItem key={crop} value={crop}>
                        {crop}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button
              onClick={getAIPrediction}
              disabled={!location || !cropType}
              className="w-full mt-6 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
            >
              <Lightbulb className="h-4 w-4 mr-2" />
              Get AI Recommendation
            </Button>
          </CardContent>
        </Card>

        {/* Prediction Results */}
        {prediction && (
          <div className="space-y-6 animate-fade-in">
            {/* Main Recommendation */}
            <Card className="border-2 border-primary/30 shadow-lg bg-gradient-to-br from-primary/5 to-accent/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  AI Recommendation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-card rounded-lg border-2 border-primary/20">
                  <p className="text-base text-foreground leading-relaxed">
                    {prediction.recommendation}
                  </p>
                </div>
                <div className="flex items-center justify-between p-3 bg-card rounded-lg border border-border">
                  <span className="text-sm text-muted-foreground">AI Confidence Level</span>
                  <span className="text-lg font-bold text-primary">{prediction.confidence}</span>
                </div>
              </CardContent>
            </Card>

            {/* Detailed Metrics */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="border-2 border-border shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Cloud className="h-5 w-5 text-blue-500" />
                    <span className="text-sm text-muted-foreground">Expected Rainfall</span>
                  </div>
                  <div className="text-2xl font-bold text-foreground">{prediction.rainfall}</div>
                  <div className="text-xs text-muted-foreground mt-1">Next 10 days</div>
                </CardContent>
              </Card>

              <Card className="border-2 border-border shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Sprout className="h-5 w-5 text-primary" />
                    <span className="text-sm text-muted-foreground">Planting Window</span>
                  </div>
                  <div className="text-2xl font-bold text-foreground">{prediction.plantingWindow}</div>
                  <div className="text-xs text-muted-foreground mt-1">Optimal timing</div>
                </CardContent>
              </Card>

              <Card className="border-2 border-border shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    <span className="text-sm text-muted-foreground">Expected Yield</span>
                  </div>
                  <div className="text-2xl font-bold text-primary">{prediction.expectedYield}</div>
                  <div className="text-xs text-muted-foreground mt-1">Above baseline</div>
                </CardContent>
              </Card>

              <Card className="border-2 border-border shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-2">
                    <ThermometerSun className="h-5 w-5 text-accent" />
                    <span className="text-sm text-muted-foreground">Temperature</span>
                  </div>
                  <div className="text-lg font-bold text-foreground">{prediction.temperature}</div>
                  <div className="text-xs text-muted-foreground mt-1">Average range</div>
                </CardContent>
              </Card>
            </div>

            {/* Additional Details */}
            <div className="grid md:grid-cols-3 gap-4">
              <Card className="border-2 border-border shadow-md">
                <CardContent className="pt-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Droplets className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium text-muted-foreground">Soil Condition</span>
                    </div>
                    <div className="text-xl font-bold text-primary">{prediction.soilCondition}</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-border shadow-md">
                <CardContent className="pt-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium text-muted-foreground">Risk Level</span>
                    </div>
                    <div
                      className={`text-xl font-bold ${
                        prediction.riskLevel === "Low" || prediction.riskLevel === "Very Low"
                          ? "text-primary"
                          : prediction.riskLevel === "Medium"
                          ? "text-accent"
                          : "text-destructive"
                      }`}
                    >
                      {prediction.riskLevel}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-border shadow-md">
                <CardContent className="pt-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Sprout className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium text-muted-foreground">Recommended Crop</span>
                    </div>
                    <div className="text-xl font-bold text-primary">{prediction.crop}</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Info Card */}
        {!prediction && (
          <Card className="border-2 border-border shadow-md">
            <CardContent className="pt-6">
              <div className="text-center space-y-3">
                <Lightbulb className="h-16 w-16 text-muted-foreground mx-auto" />
                <h3 className="text-xl font-bold text-foreground">How It Works</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Our AI analyzes NASA satellite data, local weather patterns, soil conditions, and historical 
                  crop performance to provide personalized recommendations. Select your location and crop type 
                  above to get started.
                </p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </DashboardLayout>
  );
};

export default AIInsights;
