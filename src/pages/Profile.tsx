import { useState, useEffect } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { User, MapPin, Sprout, Languages, Mail, Phone, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Profile = () => {
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [totalPoints, setTotalPoints] = useState(0);
  const [profile, setProfile] = useState({
    name: "Aminu Bello",
    email: "aminu.bello@example.com",
    phone: "+234 803 123 4567",
    location: "Kano State",
    crops: "Millet, Sorghum, Groundnut",
    language: "English",
    farmSize: "5 hectares",
  });

  useEffect(() => {
    const savedPoints = localStorage.getItem("agroGameTotalPoints");
    if (savedPoints) setTotalPoints(parseInt(savedPoints));
  }, []);

  const handleSave = () => {
    setIsEditing(false);
    toast({
      title: "Profile updated!",
      description: "Your information has been saved successfully.",
    });
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground flex items-center gap-3">
            <User className="h-8 w-8 text-primary" />
            Farmer Profile
          </h1>
          <p className="text-muted-foreground mt-1">Manage your personal information and preferences</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Profile Card */}
          <Card className="lg:col-span-1 border-2 border-primary/20 shadow-lg">
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <div className="mx-auto h-24 w-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center relative">
                  <span className="text-4xl font-bold text-primary-foreground">
                    {profile.name.charAt(0)}
                  </span>
                  <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground rounded-full p-2 shadow-lg border-2 border-background">
                    <Star className="h-4 w-4 fill-current" />
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground">{profile.name}</h2>
                  <p className="text-muted-foreground">{profile.location}</p>
                </div>
                <div className="pt-4 space-y-2">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full border-2 border-primary/30">
                    <Star className="h-5 w-5 text-primary fill-primary" />
                    <span className="text-lg font-bold text-primary">{totalPoints} Points</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full">
                    <Sprout className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium text-primary">Active Farmer</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Profile Details */}
          <Card className="lg:col-span-2 border-2 border-border shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Profile Information</CardTitle>
              {!isEditing ? (
                <Button onClick={() => setIsEditing(true)} variant="outline">
                  Edit Profile
                </Button>
              ) : (
                <div className="flex gap-2">
                  <Button onClick={handleSave} className="bg-primary">
                    Save Changes
                  </Button>
                  <Button onClick={() => setIsEditing(false)} variant="outline">
                    Cancel
                  </Button>
                </div>
              )}
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center gap-2">
                    <User className="h-4 w-4 text-primary" />
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    value={profile.name}
                    onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                    disabled={!isEditing}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-primary" />
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={profile.email}
                    onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                    disabled={!isEditing}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-primary" />
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={profile.phone}
                    onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                    disabled={!isEditing}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location" className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    Location
                  </Label>
                  {isEditing ? (
                    <Select
                      value={profile.location}
                      onValueChange={(value) => setProfile({ ...profile, location: value })}
                    >
                      <SelectTrigger id="location">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Kano State">Kano State</SelectItem>
                        <SelectItem value="Kaduna State">Kaduna State</SelectItem>
                        <SelectItem value="Sokoto State">Sokoto State</SelectItem>
                        <SelectItem value="Katsina State">Katsina State</SelectItem>
                        <SelectItem value="Jigawa State">Jigawa State</SelectItem>
                        <SelectItem value="Zamfara State">Zamfara State</SelectItem>
                      </SelectContent>
                    </Select>
                  ) : (
                    <Input id="location" value={profile.location} disabled />
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="crops" className="flex items-center gap-2">
                    <Sprout className="h-4 w-4 text-primary" />
                    Crops Grown
                  </Label>
                  <Input
                    id="crops"
                    value={profile.crops}
                    onChange={(e) => setProfile({ ...profile, crops: e.target.value })}
                    disabled={!isEditing}
                    placeholder="e.g., Millet, Sorghum, Maize"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="farmSize" className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    Farm Size
                  </Label>
                  <Input
                    id="farmSize"
                    value={profile.farmSize}
                    onChange={(e) => setProfile({ ...profile, farmSize: e.target.value })}
                    disabled={!isEditing}
                    placeholder="e.g., 5 hectares"
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="language" className="flex items-center gap-2">
                    <Languages className="h-4 w-4 text-primary" />
                    Preferred Language
                  </Label>
                  {isEditing ? (
                    <Select
                      value={profile.language}
                      onValueChange={(value) => setProfile({ ...profile, language: value })}
                    >
                      <SelectTrigger id="language">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="English">English</SelectItem>
                        <SelectItem value="Hausa">Hausa</SelectItem>
                      </SelectContent>
                    </Select>
                  ) : (
                    <Input id="language" value={profile.language} disabled />
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Farm Statistics */}
        <div className="grid md:grid-cols-3 gap-4">
          <Card className="border-2 border-border shadow-md">
            <CardContent className="pt-6">
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-primary">125</div>
                <div className="text-sm text-muted-foreground">Days on Platform</div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-border shadow-md">
            <CardContent className="pt-6">
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-primary">48</div>
                <div className="text-sm text-muted-foreground">AI Predictions Used</div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-border shadow-md">
            <CardContent className="pt-6">
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-primary">+35%</div>
                <div className="text-sm text-muted-foreground">Average Yield Increase</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Profile;
