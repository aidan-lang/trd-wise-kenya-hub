import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, TrendingUp, Shield, Brain, Target, LineChart } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Education = () => {
  const categories = [
    { name: "All", count: 6 },
    { name: "Beginner Trading", count: 2 },
    { name: "Financial Literacy", count: 2 },
    { name: "Risk Management", count: 1 },
    { name: "Strategies", count: 1 },
  ];

  const educationalMaterials = [
    {
      icon: BookOpen,
      title: "Introduction to Trading Basics",
      category: "Beginner Trading",
      difficulty: "Beginner",
      description: "Learn the fundamentals of trading, market terminology, and how to get started with confidence.",
      duration: "15 min read",
    },
    {
      icon: TrendingUp,
      title: "Understanding Market Trends",
      category: "Beginner Trading",
      difficulty: "Beginner",
      description: "Discover how to identify and analyze market trends to make informed trading decisions.",
      duration: "20 min read",
    },
    {
      icon: Brain,
      title: "Building Your Financial Foundation",
      category: "Financial Literacy",
      difficulty: "Beginner",
      description: "Essential money management principles every trader should know before investing.",
      duration: "25 min read",
    },
    {
      icon: Shield,
      title: "Risk Management Essentials",
      category: "Risk Management",
      difficulty: "Intermediate",
      description: "Protect your capital with proven risk management techniques and position sizing strategies.",
      duration: "30 min read",
    },
    {
      icon: Target,
      title: "Setting Realistic Trading Goals",
      category: "Financial Literacy",
      difficulty: "Beginner",
      description: "Learn how to set achievable goals and track your progress as a trader.",
      duration: "18 min read",
    },
    {
      icon: LineChart,
      title: "Advanced Chart Analysis",
      category: "Strategies",
      difficulty: "Advanced",
      description: "Master technical analysis and chart patterns used by professional traders.",
      duration: "40 min read",
    },
  ];

  const handleReadMore = (title: string) => {
    toast({
      title: "Coming Soon!",
      description: `"${title}" will be available shortly. Stay tuned!`,
    });
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-500/10 text-green-700 dark:text-green-400";
      case "Intermediate":
        return "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400";
      case "Advanced":
        return "bg-red-500/10 text-red-700 dark:text-red-400";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto text-center">
          <h1 className="hero-text mb-6">Learn & Grow with TRD-Wise</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Access free educational resources to build your trading skills and financial knowledge.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 border-b">
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category.name}
                variant={category.name === "All" ? "default" : "outline"}
                className="gap-2"
              >
                {category.name}
                <Badge variant="secondary" className="ml-1">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Materials Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {educationalMaterials.map((material, index) => (
              <Card 
                key={index}
                className="flex flex-col hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-lg bg-accent/10">
                      <material.icon className="h-8 w-8 text-accent" />
                    </div>
                    <Badge className={getDifficultyColor(material.difficulty)}>
                      {material.difficulty}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{material.title}</CardTitle>
                  <CardDescription className="text-xs uppercase tracking-wide font-medium">
                    {material.category}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{material.description}</p>
                  <p className="text-sm text-muted-foreground mt-4">
                    📖 {material.duration}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full" 
                    variant="outline"
                    onClick={() => handleReadMore(material.title)}
                  >
                    Read More
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Trading?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Put your knowledge into practice with our affordable evaluation programs.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" onClick={() => window.location.href = "/pricing"}>
              View Pricing Plans
            </Button>
            <Button size="lg" variant="outline" onClick={() => window.location.href = "/demo"}>
              Try Free Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-primary/5 py-12 px-4">
        <div className="container mx-auto text-center">
          <p className="text-sm text-muted-foreground">© 2025 TRD-Wise. Empowering Kenya's Traders.</p>
        </div>
      </footer>
    </div>
  );
};

export default Education;