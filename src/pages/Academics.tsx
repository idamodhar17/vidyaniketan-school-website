
import { BookOpen, Users, Award, Target, Lightbulb, PenTool } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Academics = () => {
  const subjects = [
    { name: "English", description: "Reading, writing, speaking, and literature appreciation" },
    { name: "Mathematics", description: "Number concepts, basic operations, and problem-solving" },
    { name: "Environmental Studies", description: "Understanding our world, nature, and society" },
    { name: "Hindi", description: "Language skills and cultural understanding" },
    { name: "Computer Studies", description: "Basic digital literacy and technology awareness" },
    { name: "Art & Craft", description: "Creative expression and fine motor development" },
    { name: "Moral Science", description: "Values, ethics, and character building" },
    { name: "Physical Education", description: "Sports, games, and physical fitness" }
  ];

  const assessmentMethods = [
    {
      icon: PenTool,
      title: "Continuous Assessment",
      description: "Regular evaluation through classroom activities, assignments, and participation"
    },
    {
      icon: Lightbulb,
      title: "Project-Based Learning",
      description: "Hands-on projects that encourage creativity and critical thinking"
    },
    {
      icon: Users,
      title: "Oral Presentations",
      description: "Building confidence through speaking and presentation skills"
    },
    {
      icon: Award,
      title: "Portfolio Assessment",
      description: "Comprehensive documentation of student progress and achievements"
    }
  ];

  return (
    <div className="min-h-screen bg-off-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-deep-blue to-navy-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Academics</h1>
            <p className="text-xl md:text-2xl text-light-blue mb-4">
              CBSE-Aligned Excellence in Primary Education
            </p>
            <p className="text-lg max-w-3xl mx-auto">
              Our curriculum is designed to build strong foundations while nurturing creativity, 
              critical thinking, and a lifelong love for learning.
            </p>
          </div>
        </div>
      </section>

      {/* Curriculum Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-6">
                Activity-Based Learning Approach
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our CBSE-aligned curriculum emphasizes hands-on learning experiences that make 
                education engaging and meaningful. We believe that children learn best when they 
                can explore, experiment, and discover concepts through interactive activities.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-burnt-orange rounded-full p-2">
                    <BookOpen className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-blue">Integrated Learning</h3>
                    <p className="text-gray-600">Subjects are interconnected to provide holistic understanding</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-burnt-orange rounded-full p-2">
                    <Target className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-blue">Skill Development</h3>
                    <p className="text-gray-600">Focus on critical thinking, creativity, and problem-solving</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-burnt-orange rounded-full p-2">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-blue">Individual Attention</h3>
                    <p className="text-gray-600">Small class sizes ensure personalized learning</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Card className="border-0 shadow-xl max-w-md">
                <CardContent className="p-8 text-center">
                  <div className="bg-light-blue rounded-lg p-6 mb-4">
                    <BookOpen className="h-16 w-16 text-deep-blue mx-auto" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-blue mb-2">CBSE Affiliated</h3>
                  <p className="text-gray-600">
                    Our curriculum follows CBSE guidelines while incorporating innovative 
                    teaching methods that make learning enjoyable and effective.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Grade-wise Breakdown */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-blue mb-12">
            Grade-wise Learning Journey
          </h2>
          
          <Tabs defaultValue="class1" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="class1">Class 1</TabsTrigger>
              <TabsTrigger value="class2">Class 2</TabsTrigger>
              <TabsTrigger value="class3">Class 3</TabsTrigger>
              <TabsTrigger value="class4">Class 4</TabsTrigger>
            </TabsList>
            
            <TabsContent value="class1">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-navy-blue mb-4">Class 1 - Foundation Building</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-burnt-orange mb-2">Learning Focus</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Introduction to letters and numbers</li>
                        <li>• Basic reading and writing skills</li>
                        <li>• Color recognition and shapes</li>
                        <li>• Simple counting and patterns</li>
                        <li>• Social skills and classroom behavior</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-burnt-orange mb-2">Activities</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Story telling and picture books</li>
                        <li>• Hands-on number activities</li>
                        <li>• Art and craft projects</li>
                        <li>• Music and movement</li>
                        <li>• Nature walks and observation</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="class2">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-navy-blue mb-4">Class 2 - Skill Development</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-burnt-orange mb-2">Learning Focus</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Reading fluency development</li>
                        <li>• Basic addition and subtraction</li>
                        <li>• Sentence formation and grammar</li>
                        <li>• Understanding family and community</li>
                        <li>• Introduction to computer basics</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-burnt-orange mb-2">Activities</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Reading comprehension exercises</li>
                        <li>• Math games and puzzles</li>
                        <li>• Creative writing activities</li>
                        <li>• Science experiments</li>
                        <li>• Group projects and presentations</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="class3">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-navy-blue mb-4">Class 3 - Knowledge Expansion</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-burnt-orange mb-2">Learning Focus</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Advanced reading and comprehension</li>
                        <li>• Multiplication and division concepts</li>
                        <li>• Paragraph writing and essays</li>
                        <li>• Environmental awareness</li>
                        <li>• Basic computer applications</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-burnt-orange mb-2">Activities</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Library research projects</li>
                        <li>• Mathematical problem solving</li>
                        <li>• Debate and discussion sessions</li>
                        <li>• Field trips and observations</li>
                        <li>• Technology-integrated lessons</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="class4">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-navy-blue mb-4">Class 4 - Advanced Learning</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-burnt-orange mb-2">Learning Focus</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Literature appreciation and analysis</li>
                        <li>• Complex mathematical operations</li>
                        <li>• Research and report writing</li>
                        <li>• Scientific thinking and reasoning</li>
                        <li>• Preparation for middle school</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-burnt-orange mb-2">Activities</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Independent research projects</li>
                        <li>• Mathematical modeling</li>
                        <li>• Public speaking and presentations</li>
                        <li>• Science fair participation</li>
                        <li>• Leadership opportunities</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Subjects Taught */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-blue mb-12">
            Subjects We Teach
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {subjects.map((subject, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="bg-light-blue rounded-lg p-4 mb-4">
                    <BookOpen className="h-8 w-8 text-deep-blue mx-auto" />
                  </div>
                  <h3 className="text-lg font-semibold text-navy-blue mb-2">{subject.name}</h3>
                  <p className="text-sm text-gray-600">{subject.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment Methods */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-blue mb-12">
            Our Assessment Approach
          </h2>
          <p className="text-lg text-center text-gray-700 mb-12 max-w-3xl mx-auto">
            We follow the Continuous and Comprehensive Evaluation (CCE) system that focuses on 
            holistic development rather than just academic performance.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {assessmentMethods.map((method, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <CardContent className="p-8">
                  <div className="bg-burnt-orange rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <method.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-navy-blue mb-3">{method.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{method.description}</p>
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

export default Academics;
