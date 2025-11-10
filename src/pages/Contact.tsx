import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24-48 hours.",
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "info@trd-wise.com",
      link: "mailto:info@trd-wise.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+254 XXX XXX XXX",
      link: "tel:+254XXXXXXXXX",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Nairobi, Kenya",
      link: null,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="hero-text mb-6">Get in Touch</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions? We're here to help you start your trading journey.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="pb-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-8 pb-6">
                  <info.icon className="h-10 w-10 mx-auto mb-4 text-accent" />
                  <h3 className="font-bold mb-2">{info.title}</h3>
                  {info.link ? (
                    <a 
                      href={info.link}
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-muted-foreground">{info.value}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="pb-24 px-4">
        <div className="container mx-auto max-w-3xl">
          {!submitted ? (
            <Card>
              <CardContent className="pt-8">
                <h2 className="text-3xl font-bold mb-6 text-center">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Your Name</Label>
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
                    <Label htmlFor="email">Your Email</Label>
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
                    <Label htmlFor="message">Your Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us how we can help you..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className="mt-2 min-h-[150px]"
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          ) : (
            <Card className="text-center">
              <CardContent className="pt-12 pb-12">
                <CheckCircle2 className="h-20 w-20 mx-auto mb-6 text-accent" />
                <h2 className="text-3xl font-bold mb-4">Message Received!</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Thank you for reaching out to TRD-Wise.
                </p>
                <p className="text-muted-foreground mb-8">
                  We'll review your message and get back to you at <strong>{formData.email}</strong> within 24-48 hours.
                </p>
                <Button onClick={() => setSubmitted(false)} variant="outline" className="mr-4">
                  Send Another Message
                </Button>
                <Button onClick={() => window.location.href = "/"}>
                  Return to Home
                </Button>
              </CardContent>
            </Card>
          )}
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

export default Contact;