
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Mrs. Anjali Mehta",
      childName: "Arjun Mehta",
      childClass: "Class 3",
      rating: 5,
      testimonial: "Vidyaniketan has been a wonderful choice for our son. The teachers are so caring and patient. Arjun looks forward to going to school every day and has developed such a love for learning.",
      image: "AM"
    },
    {
      name: "Mr. Rajesh Gupta",
      childName: "Priya Gupta",
      childClass: "Class 2",
      rating: 5,
      testimonial: "The school's approach to education is exactly what we were looking for. They focus not just on academics but on building character and confidence. Priya has blossomed here.",
      image: "RG"
    },
    {
      name: "Mrs. Sunita Sharma",
      childName: "Karan Sharma",
      childClass: "Class 4",
      rating: 5,
      testimonial: "What impressed us most is how well the teachers know each child individually. They understand Karan's strengths and areas for improvement, and work with him accordingly.",
      image: "SS"
    },
    {
      name: "Dr. Pradeep Singh",
      childName: "Ananya Singh",
      childClass: "Class 1",
      rating: 5,
      testimonial: "As a first-time parent sending my child to school, I was nervous. But the warm and nurturing environment at Vidyaniketan made the transition so smooth for both Ananya and us.",
      image: "PS"
    },
    {
      name: "Mrs. Kavita Jain",
      childName: "Rohan Jain",
      childClass: "Class 3",
      rating: 5,
      testimonial: "The activities and events at school are so engaging. Rohan comes home excited to tell us about his day. The school truly makes learning fun and meaningful.",
      image: "KJ"
    },
    {
      name: "Mr. Amit Patel",
      childName: "Diya Patel",
      childClass: "Class 2",
      rating: 5,
      testimonial: "Vidyaniketan's focus on values and ethics alongside academics is commendable. Diya has become more confident, respectful, and curious about the world around her.",
      image: "AP"
    }
  ];

  const renderStars = (rating: number) => {
    return Array(rating).fill(0).map((_, index) => (
      <Star key={index} className="h-5 w-5 text-yellow-400 fill-current" />
    ));
  };

  return (
    <div className="min-h-screen bg-off-white">
      <Header />
      
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-deep-blue mb-4">What Parents Say</h1>
            <p className="text-lg text-navy-blue max-w-3xl mx-auto">
              Hear from our parent community about their experience with Vidyaniketan and how we've helped their children grow and thrive.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="text-3xl font-bold text-burnt-orange mb-2">98%</div>
              <div className="text-navy-blue">Parent Satisfaction</div>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="text-3xl font-bold text-burnt-orange mb-2">150+</div>
              <div className="text-navy-blue">Happy Families</div>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="text-3xl font-bold text-burnt-orange mb-2">5★</div>
              <div className="text-navy-blue">Average Rating</div>
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-light-blue rounded-full flex items-center justify-center mr-4">
                    <span className="text-deep-blue font-bold text-sm">{testimonial.image}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-deep-blue">{testimonial.name}</h3>
                    <p className="text-sm text-navy-blue">Parent of {testimonial.childName}</p>
                    <p className="text-xs text-burnt-orange">{testimonial.childClass}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 h-8 w-8 text-light-blue/50" />
                  <blockquote className="text-navy-blue italic pl-6">
                    "{testimonial.testimonial}"
                  </blockquote>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center bg-light-blue/20 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-deep-blue mb-4">Join Our Parent Community</h2>
            <p className="text-navy-blue mb-6 max-w-2xl mx-auto">
              Experience the Vidyaniketan difference for your child. Schedule a visit today and see why parents trust us with their children's early education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-bright-red hover:bg-bright-red/90 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                Schedule a Visit
              </button>
              <button className="border border-burnt-orange text-burnt-orange hover:bg-burnt-orange hover:text-white px-8 py-3 rounded-lg font-medium transition-colors">
                Call Us Now
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Testimonials;
