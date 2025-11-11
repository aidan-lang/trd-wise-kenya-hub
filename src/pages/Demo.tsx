import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle2, TrendingUp, Shield, Users } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Demo = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    accountType: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast({
      title: "Demo Account Request Received!",
      description: "We'll send your demo access details to your email within 24 hours.",
    });
  };

  const benefits = [
    {
      icon: TrendingUp,
      title: "Risk-Free Trading",
      description: "Practice with virtual funds before committing real money",
    },
    {
      icon: Shield,
      title: "Full Platform Access",
      description: "Experience all features including analytics and tools",
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Connect with other demo traders and learn together",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto text-center">
          <h1 className="hero-text mb-6">Try TRD-Wise</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience our platform, access demo funds, and start learning without commitment.
          </p>
          <p className="text-sm text-accent mt-4 font-medium">No credit card required</p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-8 pb-6">
                  <benefit.icon className="h-12 w-12 mx-auto mb-4 text-accent" />
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-2xl">
          {!submitted ? (
            <Card>
              <CardContent className="pt-8">
                <h2 className="text-3xl font-bold mb-6 text-center">Sign Up for Free Demo</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      placeholder="John Mwangi"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+254 700 000 000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="mt-2"
                    />
                  </div>

                  {/*<div>
                    <Label htmlFor="accountType">Account Type Preference</Label>
                    <Select
                      value={formData.accountType}
                      onValueChange={(value) => setFormData({ ...formData, accountType: value })}
                      required
                    >
                      <SelectTrigger className="mt-2 bg-background">
                        <SelectValue placeholder="Select your trading interest" />
                      </SelectTrigger>
                      <SelectContent className="bg-background border border-border z-50">
                        <SelectItem value="forex">Forex Trader</SelectItem>
                        <SelectItem value="stocks">Stocks Trader</SelectItem>
                        <SelectItem value="crypto">Crypto Trader</SelectItem>
                        <SelectItem value="beginner">Beginner – Not Sure Yet</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>*/}

                  <Button type="submit" className="w-full" size="lg">
                    Sign Up for Demo
                  </Button>

                  <p className="text-center text-sm text-muted-foreground">
                    By signing up, you agree to receive updates about your demo account
                  </p>
                </form>
              </CardContent>
            </Card>
          ) : (
            <Card className="text-center">
              <CardContent className="pt-12 pb-12">
                <CheckCircle2 className="h-20 w-20 mx-auto mb-6 text-accent" />
                <h2 className="text-3xl font-bold mb-4">Success!</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Your demo account request has been received.
                </p>
                <p className="text-muted-foreground mb-8">
                  We'll send your login credentials to <strong>{formData.email}</strong> within 24 hours.
                </p>
                <Button onClick={() => window.location.href = "/"} variant="outline">
                  Return to Home
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-primary/5 py-12 px-4 mt-16">
        <div className="container mx-auto text-center">
          <p className="text-sm text-muted-foreground">© 2025 TRD-Wise. Empowering Kenya's Traders.</p>
        </div>
      </footer>
    </div>
  );
};

export default Demo;