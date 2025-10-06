import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Map, MapPin, Satellite } from "lucide-react";

const MapView = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Map View</h1>
          <p className="text-muted-foreground">Satellite imagery and farm location data</p>
        </div>

        <Card className="border-2 border-border shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Satellite className="h-5 w-5 text-primary" />
              Farm Location & Satellite View
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-muted/30 rounded-lg h-96 flex items-center justify-center border-2 border-dashed border-border">
              <div className="text-center space-y-4">
                <Map className="h-16 w-16 text-muted-foreground mx-auto" />
                <div>
                  <p className="text-lg font-medium text-foreground">Interactive Map</p>
                  <p className="text-sm text-muted-foreground">
                    Satellite data visualization from NASA
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    Map integration will display real-time satellite imagery
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-2 border-border shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Your Farm Location
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Region:</span>
                <span className="font-medium text-foreground">Kano State</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Coordinates:</span>
                <span className="font-medium text-foreground">12.0022°N, 8.5920°E</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Area:</span>
                <span className="font-medium text-foreground">5.2 hectares</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-border shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Satellite className="h-5 w-5 text-primary" />
                Satellite Data
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Last Update:</span>
                <span className="font-medium text-foreground">2 hours ago</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Resolution:</span>
                <span className="font-medium text-foreground">10m per pixel</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Data Source:</span>
                <span className="font-medium text-foreground">NASA MODIS</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default MapView;
