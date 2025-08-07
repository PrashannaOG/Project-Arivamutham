import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu, X, Target, DollarSign, TrendingUp, Award, Phone, Mail, MapPin } from "lucide-react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentYear] = useState(new Date().getFullYear());
  const { toast } = useToast();
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for fixed navbar
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for your message. We will contact you soon.",
    });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-background/95 backdrop-blur-md shadow-md" 
            : "bg-background/80 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <button 
              onClick={() => scrollToSection("home")} 
              className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors"
              data-testid="logo-button"
            >
              Arivamudham
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection("home")} 
                className="text-foreground hover:text-primary transition-colors font-medium"
                data-testid="nav-home"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection("about")} 
                className="text-foreground hover:text-primary transition-colors font-medium"
                data-testid="nav-about"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection("services")} 
                className="text-foreground hover:text-primary transition-colors font-medium"
                data-testid="nav-services"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection("testimonials")} 
                className="text-foreground hover:text-primary transition-colors font-medium"
                data-testid="nav-testimonials"
              >
                Testimonials
              </button>
              <button 
                onClick={() => scrollToSection("contact")} 
                className="text-foreground hover:text-primary transition-colors font-medium"
                data-testid="nav-contact"
              >
                Contact
              </button>
              <Button 
                onClick={() => scrollToSection("contact")} 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-full"
                data-testid="cta-book-session"
              >
                Book Session
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={toggleMenu}
              data-testid="mobile-menu-toggle"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-background border-t border-border py-4">
              <div className="flex flex-col space-y-4">
                <button 
                  onClick={() => scrollToSection("home")} 
                  className="text-left px-4 py-2 text-foreground hover:text-primary transition-colors"
                  data-testid="mobile-nav-home"
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection("about")} 
                  className="text-left px-4 py-2 text-foreground hover:text-primary transition-colors"
                  data-testid="mobile-nav-about"
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection("services")} 
                  className="text-left px-4 py-2 text-foreground hover:text-primary transition-colors"
                  data-testid="mobile-nav-services"
                >
                  Services
                </button>
                <button 
                  onClick={() => scrollToSection("testimonials")} 
                  className="text-left px-4 py-2 text-foreground hover:text-primary transition-colors"
                  data-testid="mobile-nav-testimonials"
                >
                  Testimonials
                </button>
                <button 
                  onClick={() => scrollToSection("contact")} 
                  className="text-left px-4 py-2 text-foreground hover:text-primary transition-colors"
                  data-testid="mobile-nav-contact"
                >
                  Contact
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div 
          className="absolute inset-0 hero-gradient opacity-90"
          style={{
            backgroundImage: `linear-gradient(135deg, hsl(213, 94%, 68%), hsl(213, 84%, 58%)), url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight" data-testid="hero-title">
              Turn Your 20s into Crores! Earn ₹1 Lakh/Month!
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-95" data-testid="hero-subtitle">
              Build a high-income LIC career with low investment. Proven system, full mentorship, unlimited earnings!
            </p>
            <Button 
              onClick={() => scrollToSection("contact")} 
              className="success-button hover:success-button text-white px-8 py-4 text-lg rounded-full font-semibold transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg"
              data-testid="hero-cta"
            >
              Book Your Free Session!
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" data-testid="about-title">
              Financial Growth with Arivamudham
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="about-subtitle">
              Empowering young entrepreneurs to achieve financial freedom through proven LIC career development
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-4" data-testid="about-mission-title">
                Our Mission
              </h3>
              <p className="text-lg leading-relaxed text-muted-foreground" data-testid="about-description-1">
                I am Amutha K, a Development Officer at LIC India and the proud founder of Arivamudham - AM's Team. 
                With over 15 years of experience in the industry, I have had the privilege of training 117 individuals, 
                creating 23+ success stories, and earning 30+ awards.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground" data-testid="about-description-2">
                At Arivamudham - AM's Team, we are dedicated to your success. Our team provides proven training, 
                mentoring, and support to ensure you reach your goals. Together, we have helped countless individuals 
                earn ₹1 lakh/month and beyond.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-primary mb-2" data-testid="stat-trained">117+</div>
                  <div className="text-sm text-muted-foreground" data-testid="stat-trained-label">Individuals Trained</div>
                </CardContent>
              </Card>
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-primary mb-2" data-testid="stat-success">23+</div>
                  <div className="text-sm text-muted-foreground" data-testid="stat-success-label">Success Stories</div>
                </CardContent>
              </Card>
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-primary mb-2" data-testid="stat-awards">30+</div>
                  <div className="text-sm text-muted-foreground" data-testid="stat-awards-label">Awards Earned</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" data-testid="services-title">
              Our Success Path
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="services-subtitle">
              Comprehensive training and mentorship designed to transform your career and financial future
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-0">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4" data-testid="service-mindset-title">
                  Success Mindset Development
                </h3>
                <p className="text-muted-foreground" data-testid="service-mindset-description">
                  Success is 80% mindset and 20% skills. We help you develop the right mindset, set clear goals, 
                  and create a roadmap to achieve minimum ₹1 crore income.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-0">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-6">
                  <DollarSign className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4" data-testid="service-income-title">
                  Unlimited Income Potential
                </h3>
                <p className="text-muted-foreground" data-testid="service-income-description">
                  No boss, no 9-to-5 job constraints. Enjoy flexible working hours, financial security 
                  with minimum capital investment, and lifetime royalty income.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-0">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4" data-testid="service-growth-title">
                  Proven Growth Strategy
                </h3>
                <p className="text-muted-foreground" data-testid="service-growth-description">
                  Earn ₹1 lakh per month within 3 years and scale to ₹1 crore per year. Our step-by-step 
                  roadmap ensures sustainable growth and success.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-0">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4" data-testid="service-mentorship-title">
                  Expert Mentorship
                </h3>
                <p className="text-muted-foreground" data-testid="service-mentorship-description">
                  Get comprehensive training, recognition & rewards, and learn to impact people's lives 
                  while building your own wealth and entrepreneurial success.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" data-testid="testimonials-title">
              What Our Students Are Saying
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="testimonials-subtitle">
              Real stories of transformation and success from our community of entrepreneurs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 relative hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="absolute -top-4 -left-4 text-6xl text-primary/20 font-serif">"</div>
                <blockquote className="text-lg italic mb-6 relative z-10" data-testid="testimonial-1-text">
                  "I had zero background in insurance sales. The training system here is designed to take beginners 
                  to professionals. Our attitude and willingness to learn matter more than experience."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                    JI
                  </div>
                  <div>
                    <div className="font-semibold" data-testid="testimonial-1-name">J. Indra</div>
                    <div className="text-sm text-muted-foreground" data-testid="testimonial-1-role">LIC Career Advisor</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 relative hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="absolute -top-4 -left-4 text-6xl text-primary/20 font-serif">"</div>
                <blockquote className="text-lg italic mb-6 relative z-10" data-testid="testimonial-2-text">
                  "I was worried about competition until I learned a proper system here. The system puts me in 
                  the top 5% who thrive with strategy. Now my friends ask me for financial advice!"
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                    VS
                  </div>
                  <div>
                    <div className="font-semibold" data-testid="testimonial-2-name">V. Sankar</div>
                    <div className="text-sm text-muted-foreground" data-testid="testimonial-2-role">Senior Development Officer</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-secondary to-secondary/90 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white" data-testid="contact-title">
              Feel Free to Get in Touch
            </h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto" data-testid="contact-subtitle">
              Ready to transform your career? Let's discuss your path to financial freedom
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold mb-8" data-testid="contact-info-title">Contact Information</h3>
              
              <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/15 transition-colors">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Phone:</div>
                  <a 
                    href="tel:+919942815544" 
                    className="text-white/90 hover:text-white transition-colors"
                    data-testid="contact-phone"
                  >
                    +91 99428 15544
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/15 transition-colors">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Email:</div>
                  <a 
                    href="mailto:amutha.licdocbe@gmail.com" 
                    className="text-white/90 hover:text-white transition-colors"
                    data-testid="contact-email"
                  >
                    amutha.licdocbe@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/15 transition-colors">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mt-1">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Address:</div>
                  <div className="text-white/90" data-testid="contact-address">
                    Sri Sairam Complex, Opposite to Ganga Hospital,<br />
                    Mettupalayam Road, Coimbatore – 641043
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-white" data-testid="contact-form-title">
                  Send us a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-white mb-2 block">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      required
                      className="bg-white/90 border-white/20 text-gray-900"
                      data-testid="input-name"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-white mb-2 block">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="bg-white/90 border-white/20 text-gray-900"
                      data-testid="input-email"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-white mb-2 block">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      className="bg-white/90 border-white/20 text-gray-900"
                      data-testid="input-phone"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-white mb-2 block">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Tell us about your career goals..."
                      className="bg-white/90 border-white/20 text-gray-900 resize-none"
                      data-testid="input-message"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="success-button hover:success-button text-white w-full py-3 rounded-full font-semibold transition-all duration-300 hover:transform hover:-translate-y-1"
                    data-testid="button-submit"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary py-8 text-white">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/80" data-testid="footer-copyright">
            &copy; <span data-testid="footer-year">{currentYear}</span> Arivamudham Business Solutions. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
