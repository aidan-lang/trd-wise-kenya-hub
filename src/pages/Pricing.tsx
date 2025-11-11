import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import SignupModal from "@/components/SignupModal";

const Pricing = () => {
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  const pricingTiers = [
    {
      name: "20000 KES Account",
      price: "KES 200",
      description: "Perfect for beginners starting their trading journey",
      features: [
        "Leverage: 1:100",
        "Lot Size Limit: 0.05 lots",
      ],
      popular: false,
    },
    {
      name: "100000 KES Account",
      price: "KES 2000",
      description: "For competent traders looking to advance their skills",
      features: [
        "Leverage: 1:100",
        "Lot Size Limit: 0.25 lots",
      ],
      popular: false,
    },
    {
      name: "500000 KES Account",
      price: "KES 10000",
      description: "For serious traders ready to scale",
      features: [
        "Leverage: 1:100",
        "Lot Size Limit: 1 lots",
      ],
      popular: false,
    },
    {
      name: "1000000 KES Account",
      price: "KES 20000",
      description: "For professional traders",
      features: [
        "Leverage: 1:100",
        "Lot Size Limit: 2 lots",
      ],
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="hero-text mb-6">Affordable Access for Every Trader</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
            Choose the plan that fits your goals. Low-cost entry designed for aspiring traders in Kenya.
          </p>
          <p className="text-sm text-muted-foreground">One-time evaluation fee • No hidden charges</p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-24 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier) => (
              <Card 
                key={tier.name}
                className={`relative transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                  tier.popular ? "border-accent shadow-lg" : ""
                }`}
              >
                {tier.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground">
                    Most Popular
                  </Badge>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{tier.name}</CardTitle>
                  <CardDescription>{tier.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">KES {tier.price}</span>
                    <span className="text-muted-foreground ml-2">one-time</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {tier.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full"
                    variant={tier.popular ? "default" : "outline"}
                    onClick={() => setIsSignupOpen(true)}
                  >
                    Start This Plan
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Note */}
      <section className="pb-24 px-4">
        <div className="container mx-auto text-center max-w-3xl">
          <h3 className="text-2xl font-bold mb-4">Have Questions?</h3>
          <p className="text-muted-foreground mb-6">
            Not sure which plan is right for you? We're here to help you make the best choice for your trading journey.
          </p>
          <Button variant="outline" onClick={() => window.location.href = "/contact"}>
            Contact Us
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-primary/5 py-12 px-4">
        <div className="container mx-auto text-center">
          <p className="text-sm text-muted-foreground">© 2025 TRD-Wise. Empowering Kenya's Traders.</p>
        </div>
      </footer>

      <SignupModal isOpen={isSignupOpen} onClose={() => setIsSignupOpen(false)} />
    </div>
  );
};

export default Pricing;