import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import SignupModal from "@/components/SignupModal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  TrendingUp,
  Users,
  BookOpen,
  DollarSign,
  Target,
  Award,
  Mail,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import heroImage from "@/assets/hero-traders.jpg";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";

const Index = () => {
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const features = [
    {
      icon: DollarSign,
      title: "Accessible Fees",
      description:
        "Low-cost evaluation fees designed for everyday Kenyans who want to start trading without breaking the bank.",
    },
    {
      icon: BookOpen,
      title: "Guided Learning",
      description:
        "Expert mentorship and comprehensive courses to help you master trading fundamentals and advanced strategies.",
    },
    {
      icon: Users,
      title: "Community Support",
      description:
        "Join a vibrant community of traders supporting each other's growth and sharing real-world experiences.",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Start Small",
      description:
        "Begin your journey with our affordable evaluation fees. No need for thousands of shillings upfront.",
      icon: Target,
    },
    {
      step: "02",
      title: "Learn & Grow",
      description:
        "Access mentorship, courses, and resources to develop your trading skills at your own pace.",
      icon: TrendingUp,
    },
    {
      step: "03",
      title: "Trade Live",
      description:
        "Pass your evaluation and gain access to funded trading accounts. Start earning real profits.",
      icon: Award,
    },
  ];

  const testimonials = [
    {
      name: "James Mwangi",
      role: "Junior Trader",
      image: testimonial1,
      quote:
        "TRD-Wise gave me a chance when other firms were too expensive. Now I'm trading with confidence and building my future.",
    },
    {
      name: "Grace Akinyi",
      role: "Aspiring Investor",
      image: testimonial2,
      quote:
        "The mentorship program is incredible. I learned more in 3 months than I thought possible. TRD-Wise truly invests in people.",
    },
    {
      name: "Daniel Omondi",
      role: "Part-Time Trader",
      image: testimonial3,
      quote:
        "I started with zero knowledge. The courses and community support helped me pass my evaluation. This is life-changing!",
    },
  ];

  const faqs = [
    {
      question: "What makes TRD-Wise different from other prop firms?",
      answer:
        "TRD-Wise focuses on accessibility and education. We offer lower evaluation fees specifically for Kenyan traders, comprehensive mentorship programs, and a supportive community that helps you succeed.",
    },
    {
      question: "How much does it cost to get started?",
      answer:
        "Our evaluation fees start as low as possible to make trading accessible to everyone. Contact us for current pricing and special offers for first-time traders.",
    },
    {
      question: "Do I need prior trading experience?",
      answer:
        "No! We welcome complete beginners. Our courses and mentorship programs are designed to take you from zero to confident trader. We'll guide you every step of the way.",
    },
    {
      question: "What happens after I pass the evaluation?",
      answer:
        "Once you pass, you'll receive access to a funded trading account. You can start trading live markets and earn real profits while following our risk management guidelines.",
    },
    {
      question: "Is there ongoing support after I start trading?",
      answer:
        "Absolutely! Our mentorship and community support continue throughout your journey. You'll have access to resources, guidance, and a network of fellow traders.",
    },
  ];

  return (
    <div className="min-h-screen bg-background smooth-scroll">
      <Navbar onSignupClick={() => setIsSignupOpen(true)} />
      <SignupModal
        isOpen={isSignupOpen}
        onClose={() => setIsSignupOpen(false)}
      />

      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(23, 37, 84, 0.9), rgba(23, 37, 84, 0.7)), url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container mx-auto px-4 z-10 text-center text-white pt-20">
          <h1 className="hero-text mb-6 animate-fade-in">
            Unlock Trading Opportunities in Kenya
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90 animate-fade-in">
            Affordable evaluation. Expert guidance. Real funding. Start building
            your wealth today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <Button
              onClick={() => navigate("/demo")}
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-lg px-8 py-6 shadow-xl hover:scale-105 transition-transform"
            >
              Get Started Now
            </Button>
            <Button
              onClick={() => scrollToSection("mission")}
              size="lg"
              variant="outline"
              className="font-semibold text-lg px-8 py-6 bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
            >
              Learn About TRD-Wise
            </Button>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-heading text-primary mb-4">
              Trading for Everyone
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              We're breaking down barriers to financial success. TRD-Wise makes
              prop trading accessible through low-cost evaluations, expert
              mentorship, and a supportive community.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-xl transition-all hover:-translate-y-1 border-border/50"
              >
                <CardContent className="pt-8 pb-6">
                  <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10">
                    <feature.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-primary">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-heading text-primary mb-4">
              Your Path to Success
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Three simple steps to start your trading journey with TRD-Wise
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="relative group hover:scale-105 transition-transform"
              >
                <div className="bg-card border border-border rounded-lg p-8 h-full shadow-md hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-5xl font-bold text-accent">
                      {step.step}
                    </span>
                    <step.icon className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-primary">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="section-heading mb-6">Financial Literacy Courses</h2>
            <p className="text-lg md:text-xl mb-8 text-primary-foreground/90">
              Master the fundamentals of trading and investing through our
              comprehensive course library. From beginner basics to advanced
              strategies, we've got you covered.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="bg-white/10 border-white/20 text-left backdrop-blur-sm">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-3 text-white">
                    Beginner's Foundation
                  </h3>
                  <ul className="space-y-2 text-white/80">
                    <li>• Understanding markets and trading basics</li>
                    <li>• Risk management fundamentals</li>
                    <li>• Setting up your trading workspace</li>
                    <li>• Psychology of successful trading</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-white/10 border-white/20 text-left backdrop-blur-sm">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-3 text-white">
                    Advanced Strategies
                  </h3>
                  <ul className="space-y-2 text-white/80">
                    <li>• Technical analysis deep dive</li>
                    <li>• Developing your trading system</li>
                    <li>• Advanced risk-reward strategies</li>
                    <li>• Scaling your trading career</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            <Button
              onClick={() => setIsSignupOpen(true)}
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-lg px-8 py-6"
            >
              Enroll in Courses
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-heading text-primary mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real traders. Real results. See how TRD-Wise has transformed lives
              across Kenya.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <CardContent className="pt-6 text-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-accent/20"
                  />
                  <p className="text-muted-foreground italic mb-4">
                    "{testimonial.quote}"
                  </p>
                  <h4 className="font-bold text-primary">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-heading text-primary mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Got questions? We've got answers.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left font-semibold hover:text-accent">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="section-heading mb-6">Join the TRD-Wise Movement</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            Don't let high fees hold you back. Start your trading journey today
            with TRD-Wise and unlock your financial potential.
          </p>
          <Button
            onClick={() => setIsSignupOpen(true)}
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-lg px-12 py-6 shadow-xl hover:scale-105 transition-transform"
          >
            Start Your Journey
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4 text-primary">
            Ready to Get Started?
          </h3>
          <p className="text-muted-foreground mb-6">
            Have questions or need help? Reach out to our team.
          </p>
          <a
            href="mailto:info@trdwise.co.ke"
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-semibold transition-colors"
          >
            <Mail className="w-5 h-5" />
            info@trdwise.co.ke
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">TRD-Wise</h3>
              <p className="text-primary-foreground/80">
                Empowering Kenya's traders with accessible prop trading and
                financial education.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <button
                  onClick={() => scrollToSection("mission")}
                  className="block text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("courses")}
                  className="block text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Courses
                </button>
                <button
                  onClick={() => scrollToSection("faq")}
                  className="block text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  FAQs
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="block text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Contact
                </button>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60">
            <p>© 2025 TRD-Wise. Empowering Kenya's Traders.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
