
import { Heart, Target, Award, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Curiosity",
      description: "We foster a love for learning and encourage questions that lead to discovery."
    },
    {
      icon: Users,
      title: "Kindness",
      description: "We teach empathy, respect, and the importance of helping others."
    },
    {
      icon: Target,
      title: "Confidence",
      description: "We build self-esteem through achievements and positive reinforcement."
    },
    {
      icon: Award,
      title: "Respect",
      description: "We value diversity and teach children to respect themselves and others."
    }
  ];

  return (
    <div className="min-h-screen bg-[#F2EBE2 ]">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-deep-blue to-navy-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="color-[#3e2d1e] text-3xl md:text-3xl font-bold mb-3">ABOUT VIDYANIKETAN</h1>
            <p className="text-xl md:text-2xl text-light-blue">
              सर्वे भवन्तु शिक्षिता: - Let Everyone Become Educated
            </p>
          </div>
        </div>
      </section>

      {/* School Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Established in 2010, Vidyaniketan Primary School was born from a vision to create a nurturing 
                educational environment where young minds could flourish. Our founders, experienced educators 
                themselves, recognized the need for a school that combines academic excellence with emotional 
                and social development.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Over the years, we have grown into a trusted institution serving families in our community, 
                with hundreds of successful alumni who have gone on to excel in their further education. 
                Our CBSE-affiliated curriculum ensures that students receive quality education that prepares 
                them for the challenges ahead.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-bright-red">500+</div>
                  <div className="text-sm text-gray-600">Happy Students</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-bright-red">25+</div>
                  <div className="text-sm text-gray-600">Qualified Teachers</div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src="/lovable-uploads/8b133f71-45b5-4978-8e75-51e3af5bfc09.png" 
                alt="Vidyaniketan Logo" 
                className="max-w-md w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-navy-blue mb-4">Our Vision</h3>
                <p className="text-gray-700 leading-relaxed">
                  To be a beacon of educational excellence that nurtures confident, creative, and 
                  compassionate young learners who are prepared to make positive contributions to 
                  society while maintaining their cultural roots and values.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-navy-blue mb-4">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed">
                  To provide a safe, inclusive, and stimulating learning environment where every 
                  child's potential is recognized and nurtured through innovative teaching methods, 
                  character development, and a commitment to academic excellence.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-1">
              <div className="bg-light-blue rounded-lg p-8 text-center">
                <div className="w-32 h-32 bg-deep-blue rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-16 w-16 text-white" />
                </div>
                <h3 className="text-xl font-bold text-navy-blue">Mrs. Sunita Rao</h3>
                <p className="text-gray-600">Principal</p>
                <p className="text-sm text-gray-600 mt-2">M.Ed., B.Ed.<br/>15+ Years Experience</p>
              </div>
            </div>
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-navy-blue mb-6">Message from Our Principal</h2>
              <div className="text-lg text-gray-700 leading-relaxed space-y-4">
                <p>
                  "Dear Parents and Students, welcome to the Vidyaniketan family! As an educator with over 
                  15 years of experience, I have witnessed the incredible potential that lies within every 
                  child. Our role is not just to teach subjects, but to ignite curiosity, build confidence, 
                  and nurture the whole child."
                </p>
                <p>
                  "At Vidyaniketan, we believe that the early years of education are the most crucial in 
                  shaping a child's future. Our dedicated team of teachers works tirelessly to create an 
                  environment where learning is joyful, meaningful, and relevant to each child's life."
                </p>
                <p>
                  "We invite you to join us in this beautiful journey of discovery, growth, and learning. 
                  Together, we can help your child build the strong foundations they need for a bright future."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 bg-gradient-to-br from-light-blue to-deep-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Philosophy</h2>
          <p className="text-xl mb-8 max-w-4xl mx-auto leading-relaxed">
            "We believe in nurturing minds with joy, creativity, and values. Every child is unique, 
            and our approach to education honors that uniqueness while building essential skills for success."
          </p>
          <div className="text-lg max-w-3xl mx-auto leading-relaxed">
            <p>
              Our educational philosophy is rooted in the understanding that children learn best when 
              they feel safe, valued, and engaged. We combine traditional values with modern teaching 
              methods to create an environment where academic learning goes hand in hand with character 
              development and emotional growth.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-blue mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <CardContent className="p-8">
                  <div className="bg-burnt-orange rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-navy-blue mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
