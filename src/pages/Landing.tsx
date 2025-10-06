import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Cloud, Sprout, Droplets, AlertTriangle, Users, Globe, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-farming.jpg";

const Landing = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Cloud,
      title: "Weather Forecast",
      description: "7-day accurate predictions powered by NASA satellite data"
    },
    {
      icon: Sprout,
      title: "Crop Health Monitoring",
      description: "Real-time analysis of crop conditions and growth stages"
    },
    {
      icon: Droplets,
      title: "Soil & Water Insights",
      description: "Track moisture levels and optimize irrigation schedules"
    },
    {
      icon: AlertTriangle,
      title: "Early Warning Alerts",
      description: "Get notified about weather threats and pest outbreaks"
    }
  ];

  const testimonials = [
    {
      name: "Aminu Bello",
      location: "Kano State",
      quote: "Smart AgroInsight helped me increase my millet yield by 35% in just one season!",
      crop: "Millet Farmer"
    },
    {
      name: "Fatima Ibrahim",
      location: "Kaduna State",
      quote: "The weather predictions are incredibly accurate. I now know exactly when to plant.",
      crop: "Sorghum Farmer"
    },
    {
      name: "Yusuf Mohammed",
      location: "Sokoto State",
      quote: "The early warning system saved my crops from unexpected drought this year.",
      crop: "Groundnut Farmer"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sprout className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-primary">Smart AgroInsight</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-foreground hover:text-primary transition-colors">Features</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
            <a href="#testimonials" className="text-foreground hover:text-primary transition-colors">Stories</a>
            <Button onClick={() => navigate("/auth")} variant="outline">Login</Button>
            <Button onClick={() => navigate("/auth")} className="bg-gradient-to-r from-primary to-primary/80">Get Started</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-transparent"></div>
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-primary/20 shadow-md">
                <Globe className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Powered by NASA Satellite Data</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Smart <span className="text-primary">AgroInsight</span>
              </h1>
              <p className="text-2xl md:text-3xl text-muted-foreground">
                Farming Smarter with Space Data
              </p>
              <p className="text-lg text-muted-foreground max-w-xl">
                Empowering farmers in Northern Nigeria with AI-driven insights, real-time weather forecasts, 
                and precision agriculture tools for better yields and sustainable farming.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  onClick={() => navigate("/auth")}
                  className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg"
                >
                  Get Started Free
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Learn More
                </Button>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">5,000+</div>
                  <div className="text-sm text-muted-foreground">Active Farmers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">35%</div>
                  <div className="text-sm text-muted-foreground">Avg. Yield Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">98%</div>
                  <div className="text-sm text-muted-foreground">Accuracy Rate</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl"></div>
              <img 
                src={heroImage} 
                alt="Smart farming with technology" 
                className="relative rounded-3xl shadow-2xl border-4 border-card"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-4xl font-bold text-foreground">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Smart AgroInsight bridges the gap between space technology and agriculture. 
              We analyze NASA satellite data combined with local weather patterns and AI predictions 
              to provide actionable insights that help farmers make informed decisions, increase yields, 
              and build resilience against climate change.
            </p>
            <div className="grid md:grid-cols-3 gap-6 pt-8">
              <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all shadow-md hover:shadow-lg">
                <CardContent className="pt-6 text-center space-y-3">
                  <Users className="h-12 w-12 text-primary mx-auto" />
                  <h3 className="font-bold text-xl">Community-Driven</h3>
                  <p className="text-sm text-muted-foreground">Built for farmers, by understanding farmers</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all shadow-md hover:shadow-lg">
                <CardContent className="pt-6 text-center space-y-3">
                  <Globe className="h-12 w-12 text-primary mx-auto" />
                  <h3 className="font-bold text-xl">Data-Powered</h3>
                  <p className="text-sm text-muted-foreground">Leveraging NASA's global satellite network</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all shadow-md hover:shadow-lg">
                <CardContent className="pt-6 text-center space-y-3">
                  <TrendingUp className="h-12 w-12 text-primary mx-auto" />
                  <h3 className="font-bold text-xl">Proven Results</h3>
                  <p className="text-sm text-muted-foreground">Measurable improvements in crop yield</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl font-bold text-foreground">Powerful Features</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to make data-driven farming decisions
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="border-2 border-border hover:border-primary/40 transition-all shadow-md hover:shadow-xl hover:-translate-y-1"
              >
                <CardContent className="pt-6 space-y-4">
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-lg">
                    <feature.icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-bold text-xl text-foreground">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl font-bold text-foreground">Farmer Stories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real results from farmers across Northern Nigeria
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-2 border-border hover:border-primary/30 transition-all shadow-md">
                <CardContent className="pt-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
                      <span className="text-xl font-bold text-primary-foreground">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-bold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic leading-relaxed">"{testimonial.quote}"</p>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full">
                    <Sprout className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium text-primary">{testimonial.crop}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-accent/30">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground">
            Ready to Transform Your Farm?
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Join thousands of farmers already using Smart AgroInsight to grow smarter and earn more.
          </p>
          <Button 
            size="lg"
            onClick={() => navigate("/auth")}
            className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-xl"
          >
            Start Your Free Trial
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Sprout className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold text-primary">Smart AgroInsight</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Empowering farmers with space technology and AI insights.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#features" className="hover:text-primary transition-colors">Features</a></li>
                <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#testimonials" className="hover:text-primary transition-colors">Success Stories</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">FAQs</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">WhatsApp</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>© 2025 Smart AgroInsight. Powered by NASA Open Data. Built for Nigerian Farmers.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
