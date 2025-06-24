
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, Award } from "lucide-react";

const Faculty = () => {
  const facultyMembers = [
    {
      name: "Mrs. Priya Sharma",
      position: "Principal",
      qualification: "M.Ed, B.Ed",
      experience: "15 years",
      subjects: "Educational Leadership",
      email: "principal@vidyaniketan.edu.in",
      phone: "+91 98765 43210"
    },
    {
      name: "Ms. Anita Desai",
      position: "Class 1 Teacher",
      qualification: "B.Ed, BA",
      experience: "8 years",
      subjects: "All Primary Subjects",
      email: "anita@vidyaniketan.edu.in",
      phone: "+91 98765 43211"
    },
    {
      name: "Mrs. Sunita Patil",
      position: "Class 2 Teacher",
      qualification: "B.Ed, BSc",
      experience: "10 years",
      subjects: "Mathematics, EVS",
      email: "sunita@vidyaniketan.edu.in",
      phone: "+91 98765 43212"
    },
    {
      name: "Ms. Kavita Joshi",
      position: "Class 3 Teacher",
      qualification: "M.Ed, BA",
      experience: "12 years",
      subjects: "English, Hindi",
      email: "kavita@vidyaniketan.edu.in",
      phone: "+91 98765 43213"
    },
    {
      name: "Mrs. Rekha Singh",
      position: "Class 4 Teacher",
      qualification: "B.Ed, MA",
      experience: "9 years",
      subjects: "Social Studies, Computer",
      email: "rekha@vidyaniketan.edu.in",
      phone: "+91 98765 43214"
    },
    {
      name: "Mr. Rajesh Kumar",
      position: "Physical Education",
      qualification: "B.P.Ed",
      experience: "6 years",
      subjects: "Sports, Yoga",
      email: "rajesh@vidyaniketan.edu.in",
      phone: "+91 98765 43215"
    }
  ];

  return (
    <div className="min-h-screen bg-off-white">
      <Header />
      
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-deep-blue mb-4">Our Faculty</h1>
            <p className="text-lg text-navy-blue max-w-3xl mx-auto">
              Meet our dedicated team of qualified educators who nurture young minds with care, creativity, and expertise.
            </p>
          </div>

          {/* Faculty Philosophy */}
          <div className="bg-light-blue/20 p-8 rounded-lg mb-16 text-center">
            <h2 className="text-2xl font-bold text-deep-blue mb-4">Our Teaching Philosophy</h2>
            <p className="text-lg text-navy-blue max-w-4xl mx-auto">
              "Every teacher at Vidyaniketan is not just an educator but a facilitator, mentor, and nurturer. 
              We believe in creating a joyful learning environment where every child feels valued, supported, and inspired to reach their potential."
            </p>
          </div>

          {/* Faculty Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facultyMembers.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-6">
                  <div className="w-24 h-24 bg-light-blue rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-deep-blue">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-deep-blue mb-1">{member.name}</h3>
                  <p className="text-burnt-orange font-medium">{member.position}</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Award className="h-4 w-4 mr-2 text-burnt-orange" />
                    <span className="text-navy-blue text-sm">{member.qualification}</span>
                  </div>
                  <div>
                    <p className="text-sm text-navy-blue">
                      <strong>Experience:</strong> {member.experience}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-navy-blue">
                      <strong>Subjects:</strong> {member.subjects}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-gray-200">
                    <div className="flex items-center mb-2">
                      <Mail className="h-4 w-4 mr-2 text-burnt-orange" />
                      <a href={`mailto:${member.email}`} className="text-sm text-navy-blue hover:text-burnt-orange">
                        {member.email}
                      </a>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 mr-2 text-burnt-orange" />
                      <a href={`tel:${member.phone}`} className="text-sm text-navy-blue hover:text-burnt-orange">
                        {member.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Faculty;
