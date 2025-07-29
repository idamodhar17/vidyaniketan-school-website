
import { BookOpen, Monitor, Palette, TreePine, Shield, Camera, Utensils, Bus } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Facilities = () => {
  const facilities = [
    {
      icon: BookOpen,
      title: "Smart Classrooms",
      description: "Colorful, interactive learning spaces with modern teaching aids, smart boards, and age-appropriate furniture designed for young learners.",
      features: ["Interactive whiteboards", "Projectors and audio systems", "Ergonomic furniture", "Natural lighting", "Child-friendly decor"]
    },
    {
      icon: BookOpen,
      title: "Library",
      description: "A cozy reading corner filled with age-appropriate books, picture stories, and educational materials to nurture a love for reading.",
      features: ["Picture books and story collections", "Educational magazines", "Quiet reading corners", "Storytelling area", "Audio books"]
    },
    {
      icon: Monitor,
      title: "Computer Lab",
      description: "Introduction to digital literacy with child-friendly computers and educational software to build basic technology skills.",
      features: ["Age-appropriate computers", "Educational software", "Internet safety training", "Basic typing skills", "Digital art programs"]
    },
    {
      icon: Palette,
      title: "Activity Room",
      description: "Creative spaces equipped with art supplies, craft materials, and tools for hands-on learning and artistic expression.",
      features: ["Art and craft supplies", "Clay and modeling materials", "Musical instruments", "Building blocks", "Creative play areas"]
    },
    {
      icon: TreePine,
      title: "Playground",
      description: "Safe outdoor play areas with swings, slides, sandbox, and open spaces for physical activities and games.",
      features: ["Age-appropriate play equipment", "Soft play areas", "Sports equipment", "Sandpit", "Shaded seating areas"]
    },
    {
      icon: Shield,
      title: "Safety & Security",
      description: "Comprehensive safety measures including CCTV monitoring, secure entry/exit, fire safety, and trained security personnel.",
      features: ["24/7 CCTV monitoring", "Secure entry/exit points", "Fire safety systems", "First aid facilities", "Background-verified staff"]
    },
    {
      icon: Utensils,
      title: "Cafeteria",
      description: "Hygienic food preparation area serving nutritious, child-friendly meals and snacks with dietary considerations.",
      features: ["Nutritious meal plans", "Hygienic food preparation", "Allergy considerations", "Fresh drinking water", "Supervised meal times"]
    },
    {
      icon: Bus,
      title: "Transportation",
      description: "Safe and reliable school bus service with trained drivers and attendants to ensure secure commute for students.",
      features: ["GPS-enabled buses", "Trained drivers", "Bus attendants", "Safety equipment", "Route optimization"]
    }
  ];

  const safetyFeatures = [
    "24/7 CCTV surveillance throughout the campus",
    "Secure entry and exit with visitor management system",
    "Fire safety equipment and emergency evacuation procedures",
    "First aid facilities and trained staff for medical emergencies",
    "Background verification of all staff members",
    "Child protection policies and procedures",
    "Regular safety drills and awareness programs",
    "Safe transportation with GPS tracking"
  ];

  return (
    <div className="min-h-screen bg-off-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-deep-blue to-navy-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl text-deep-blue font-bold mb-6">Our Facilities</h1>
            <p className="text-xl md:text-2xl text-light-blue mb-4">
              Creating the Perfect Environment for Learning
            </p>
            <p className="text-lg max-w-3xl mx-auto">
              Modern, safe, and child-friendly facilities designed to support holistic 
              development and create memorable learning experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Facilities Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-light-blue rounded-lg p-3 mr-4">
                      <facility.icon className="h-8 w-8 text-deep-blue" />
                    </div>
                    <h3 className="text-xl font-semibold text-navy-blue">{facility.title}</h3>
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">{facility.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-burnt-orange text-sm">Key Features:</h4>
                    <ul className="space-y-1">
                      {facility.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start">
                          <span className="text-burnt-orange mr-2">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Facility Sections */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-blue mb-12">
            Facility Highlights
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <BookOpen className="h-8 w-8 text-burnt-orange mr-3" />
                  <h3 className="text-2xl font-bold text-navy-blue">Interactive Learning Spaces</h3>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Our classrooms are designed with young learners in mind. Bright, colorful spaces 
                  with flexible seating arrangements allow for various learning activities - from 
                  circle time discussions to hands-on group projects.
                </p>
                <ul className="space-y-2">
                  <li className="text-gray-600 flex items-start">
                    <span className="text-burnt-orange mr-2">✓</span>
                    Smart boards for interactive lessons
                  </li>
                  <li className="text-gray-600 flex items-start">
                    <span className="text-burnt-orange mr-2">✓</span>
                    Age-appropriate furniture and learning corners
                  </li>
                  <li className="text-gray-600 flex items-start">
                    <span className="text-burnt-orange mr-2">✓</span>
                    Abundant natural light and ventilation
                  </li>
                  <li className="text-gray-600 flex items-start">
                    <span className="text-burnt-orange mr-2">✓</span>
                    Display areas for student work
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <TreePine className="h-8 w-8 text-burnt-orange mr-3" />
                  <h3 className="text-2xl font-bold text-navy-blue">Outdoor Learning Areas</h3>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Our playground and outdoor spaces provide ample opportunities for physical 
                  development, social interaction, and nature-based learning activities.
                </p>
                <ul className="space-y-2">
                  <li className="text-gray-600 flex items-start">
                    <span className="text-burnt-orange mr-2">✓</span>
                    Safe play equipment for different age groups
                  </li>
                  <li className="text-gray-600 flex items-start">
                    <span className="text-burnt-orange mr-2">✓</span>
                    Garden areas for nature exploration
                  </li>
                  <li className="text-gray-600 flex items-start">
                    <span className="text-burnt-orange mr-2">✓</span>
                    Open spaces for sports and games
                  </li>
                  <li className="text-gray-600 flex items-start">
                    <span className="text-burnt-orange mr-2">✓</span>
                    Shaded areas for outdoor classes
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Safety & Security Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-6">
                Safety & Security First
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                The safety and security of our students is our top priority. We have implemented 
                comprehensive safety measures to ensure a secure learning environment where 
                children can focus on learning and growing.
              </p>
              <div className="space-y-3">
                {safetyFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Shield className="h-5 w-5 text-bright-red mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <Camera className="h-12 w-12 text-burnt-orange mx-auto mb-3" />
                  <h3 className="font-semibold text-navy-blue mb-2">CCTV Monitoring</h3>
                  <p className="text-sm text-gray-600">24/7 surveillance for complete security</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <Shield className="h-12 w-12 text-burnt-orange mx-auto mb-3" />
                  <h3 className="font-semibold text-navy-blue mb-2">Secure Access</h3>
                  <p className="text-sm text-gray-600">Controlled entry and visitor management</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="text-4xl mb-3">🚨</div>
                  <h3 className="font-semibold text-navy-blue mb-2">Emergency Systems</h3>
                  <p className="text-sm text-gray-600">Fire safety and emergency procedures</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="text-4xl mb-3">🏥</div>
                  <h3 className="font-semibold text-navy-blue mb-2">Medical Care</h3>
                  <p className="text-sm text-gray-600">First aid and health monitoring</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Integration */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-6">
              Technology Integration
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We integrate age-appropriate technology to enhance learning experiences and 
              prepare students for the digital age while maintaining a balanced approach.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <Monitor className="h-16 w-16 text-burnt-orange mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-navy-blue mb-3">Digital Classrooms</h3>
                <p className="text-gray-600">
                  Interactive whiteboards and tablets for engaging multimedia lessons
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="text-6xl text-burnt-orange mb-4">💻</div>
                <h3 className="text-xl font-semibold text-navy-blue mb-3">Computer Lab</h3>
                <p className="text-gray-600">
                  Child-friendly computers with educational software and internet safety
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="text-6xl text-burnt-orange mb-4">📱</div>
                <h3 className="text-xl font-semibold text-navy-blue mb-3">Learning Apps</h3>
                <p className="text-gray-600">
                  Educational applications that make learning interactive and fun
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Facilities;
