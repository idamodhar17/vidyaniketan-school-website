
import { ArrowRight, Shield, Users, BookOpen, Star, Calendar, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Index = () => {
  const highlights = [
    {
      icon: Shield,
      title: "Safe Campus",
      description: "CCTV monitoring, secure entry/exit, and trained safety staff ensure your child's protection."
    },
    {
      icon: Users,
      title: "Qualified Teachers",
      description: "Experienced educators dedicated to nurturing young minds with patience and care."
    },
    {
      icon: BookOpen,
      title: "Smart Learning",
      description: "Interactive classrooms with modern teaching methods that make learning fun and engaging."
    }
  ];

  // const testimonials = [
  //   {
  //     quote: "My daughter loves going to school every day. The teachers are so caring and the environment is perfect for learning.",
  //     parent: "Mrs. Priya Sharma",
  //     student: "Ananya Sharma, Class 2"
  //   },
  //   {
  //     quote: "The individual attention given to each child is remarkable. We've seen tremendous growth in our son's confidence.",
  //     parent: "Mr. Rajesh Patel",
  //     student: "Arjun Patel, Class 3"
  //   }
  // ];

  return (
    <div className="min-h-screen bg-off-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-light-blue to-deep-blue py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-2xl md:text-xl font-bold mb-2">
                Welcome to <span className="font-caprasimo text-burnt-orange text-4xl"><br />VIDYANIKETAN</span>
              </h1>
              <p className="text-xl md:text-2xl mb-4 text-navy-blue">
                सर्वे भवन्तु शिक्षिता:
              </p>
              <p className="text-lg mb-8 leading-relaxed">
                Where every child's journey of learning begins with joy, creativity, and boundless possibilities. 
                Join our nurturing community for Classes 1-4.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-bright-red hover:bg-red-600 text-white px-8">
                  <Link to="/admissions">
                    Admissions Open <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-black hover:bg-white hover:text-deep-blue">
                  <Link to="/contact">
                    Book a Visit
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src="/images/vidyaniketan-school-logo.png" 
                alt="Vidyaniketan School" 
                className="max-w-md w-full h-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* News Ticker */}
      <div className="bg-burnt-orange text-white py-3">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center">
            <span className="bg-bright-red px-3 py-1 rounded text-sm font-semibold mr-4">
              NEWS
            </span>
            <div className="flex-1 overflow-hidden">
              <div className="animate-pulse">
                <marquee direction="left">
                <span className="text-sm">
                  🎉 Admissions open for 2025-26 | Yoga Day Celebration on Jun 21st | Parent-Teacher meeting on Jun 26th
                </span>
                </marquee>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Welcome Note */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-6">
            A Warm Welcome to Our School Family
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            At Vidyaniketan, we believe that every child is unique and deserves an education that nurtures their 
            individual talents while building strong foundations for lifelong learning. Our CBSE-aligned curriculum 
            combined with activity-based learning ensures that your child not only excels academically but also 
            develops essential life skills in a safe, caring environment.
          </p>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-blue mb-12">
            Why Choose Vidyaniketan?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className="bg-light-blue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <highlight.icon className="h-8 w-8 text-deep-blue" />
                  </div>
                  <h3 className="text-xl font-semibold text-navy-blue mb-3">{highlight.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      {/* <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-blue mb-12">
            What Parents Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-l-4 border-burnt-orange shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-4 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="text-sm">
                    <p className="font-semibold text-navy-blue">{testimonial.parent}</p>
                    <p className="text-gray-600">{testimonial.student}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline" className="border-burnt-orange text-burnt-orange hover:bg-burnt-orange hover:text-white">
              <Link to="/testimonials">
                Read More Reviews <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section> */}

      {/* Gallery Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-blue mb-12">
            Life at Vidyaniketan
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="aspect-square bg-light-blue rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full flex items-center justify-center text-deep-blue">
                  <div className="text-center">
                    <BookOpen className="h-8 w-8 mx-auto mb-2" />
                    <p className="text-sm font-medium">Gallery {item}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline" className="border-burnt-orange text-burnt-orange hover:bg-burnt-orange hover:text-white">
              <Link to="/gallery">
                View Full Gallery <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Action Section */}
      <section className="py-16 bg-deep-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <Calendar className="h-12 w-12 text-burnt-orange mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Schedule a Visit</h3>
              <p className="text-gray-300 mb-4">Come see our campus and meet our dedicated team</p>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-deep-blue">
                <Link to="/contact">Book Now</Link>
              </Button>
            </div>
            <div>
              <BookOpen className="h-12 w-12 text-burnt-orange mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Download Brochure</h3>
              <p className="text-gray-300 mb-4">Get detailed information about our programs</p>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-deep-blue">
                Download PDF
              </Button>
            </div>
            <div>
              <Phone className="h-12 w-12 text-burnt-orange mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Call Us Today</h3>
              <p className="text-gray-300 mb-4">Speak directly with our admission team</p>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-deep-blue">
                +91 98765 43210
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
