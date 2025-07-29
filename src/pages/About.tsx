
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
            <h1 className="color-[#3e2d1e] text-3xl md:text-3xl text-deep-blue font-bold mb-3">ABOUT VIDYANIKETAN</h1>
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
                Established in 2025, Vidyaniketan Primary School marks the beginning of a new chapter in quality education for the young minds of our community. Born out of a vision to nurture holistic growth, our school is founded by passionate educators who believe that learning should go beyond textbooks.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Though newly launched, Vidyaniketan is built on strong values, a forward-thinking approach, and a commitment to academic excellence. With a CBSE-aligned curriculum and a focus on emotional and social development, we are dedicated to shaping confident, curious, and compassionate learners—ready to thrive in tomorrow's world.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-bright-red">100+</div>
                  <div className="text-sm text-gray-600">Happy Students</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-bright-red">15+</div>
                  <div className="text-sm text-gray-600">Qualified Teachers</div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="/images/vidyaniketan-school-logo.png"
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

      {/* Chairman's Message */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Photo Section */}
            <div className="flex justify-center">
              <div className="w-72 h-72 rounded-full overflow-hidden border-4 border-deep-blue shadow-lg">
                <img
                  src="/images/chairman.jpg" // Replace with actual path
                  alt="Chairman - Mr. Sachin Sarda"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Message Card */}
            <div className="bg-light-blue p-8 rounded-2xl shadow-xl relative">
              <div className="absolute top-0 left-0 w-2 h-full bg-deep-blue rounded-l-2xl"></div>
              <h2 className="text-3xl font-bold text-navy-blue mb-4">Message from Our Chairman</h2>
              <div className="text-lg text-gray-700 leading-relaxed space-y-5 italic">
                <p>
                  “At Vidyaniketan Primary School, we believe that the foundation of a strong society lies
                  in the education we provide to our children today. With this belief, we have laid the cornerstone
                  of a school that not only imparts knowledge but also cultivates values, creativity, and a lifelong love for learning.”
                </p>
                <p>
                  “Though we are just beginning, our focus is on building a nurturing environment where
                  children grow intellectually, emotionally, and socially to become the leaders of tomorrow.”
                </p>
                <p className="not-italic text-right text-navy-blue font-semibold mt-4">
                  — Mr. Sachin Sarda<br />
                  <span className="text-sm font-normal text-gray-600">Chairman, Vidyaniketan School</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Principal's Message */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

            {/* Message Card */}
            <div className="bg-light-blue p-8 rounded-2xl shadow-xl relative">
              {/* Top Border Accent */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-deep-blue to-navy-blue rounded-t-2xl"></div>
              <h2 className="text-3xl font-bold text-navy-blue mb-4">Message from Our Principal</h2>
              <div className="text-lg text-gray-700 leading-relaxed space-y-5 italic">
                <p>
                  “Dear Parents and Students, welcome to the Vidyaniketan family! As an educator with over
                  15 years of experience, I’ve witnessed the incredible potential that lies within every child.
                  Our role is not just to teach subjects, but to ignite curiosity, build confidence,
                  and nurture the whole child.”
                </p>
                <p>
                  “The early years are a child’s most formative. At Vidyaniketan, we strive to make each moment
                  in school joyful, meaningful, and enriching. Our dedicated teachers ensure that learning is not
                  just academic — it's emotional, social, and creative.”
                </p>
                <p className="not-italic text-right text-navy-blue font-semibold mt-4">
                  — Mrs. Archana<br />
                  <span className="text-sm font-normal text-gray-600">Principal, Vidyaniketan School</span>
                </p>
              </div>
            </div>

            {/* Photo Section */}
            <div className="flex justify-center">
              <div className="w-72 h-72 rounded-full overflow-hidden border-4 border-deep-blue shadow-lg">
                <img
                  src="/images/principal.jpg" // Replace with actual path
                  alt="Principal - Mrs. Archana"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Philosophy */}
      <section className="py-16 bg-gradient-to-br from-light-blue to-deep-blue text-black">
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
