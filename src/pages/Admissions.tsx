
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Download, CheckCircle, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Admissions = () => {
  const whyChooseUs = [
    "Safe and nurturing environment",
    "CBSE-aligned curriculum",
    "Play-based learning approach",
    "Qualified and caring teachers",
    "Small class sizes for individual attention",
    "Focus on holistic development"
  ];

  const admissionProcess = [
    {
      step: "1",
      title: "Inquiry",
      description: "Contact us or visit the school for information"
    },
    {
      step: "2",
      title: "Application Form",
      description: "Fill out the admission form with required details"
    },
    {
      step: "3",
      title: "Interaction",
      description: "Informal interaction with the child and parents"
    },
    {
      step: "4",
      title: "Confirmation",
      description: "Submit documents and confirm admission"
    }
  ];

  const requiredDocuments = [
    "Birth Certificate (Age Proof)",
    "Recent Passport Size Photographs",
    "Medical Certificate",
    "Aadhar Card Copy (Child & Parents)",
    "Address Proof",
    "Transfer Certificate (if applicable)"
  ];

  return (
    <div className="min-h-screen bg-off-white">
      <Header />
      
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-deep-blue mb-4">Admissions Open</h1>
            <p className="text-lg text-navy-blue max-w-3xl mx-auto mb-8">
              Join the Vidyaniketan family and give your child the foundation for a bright future. 
              Admissions are now open for Classes 1-4.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-bright-red hover:bg-bright-red/90 text-white px-8 py-3">
                <Download className="mr-2 h-5 w-5" />
                Download Application Form
              </Button>
              <Button variant="outline" className="border-burnt-orange text-burnt-orange hover:bg-burnt-orange hover:text-white px-8 py-3">
                <Phone className="mr-2 h-5 w-5" />
                Call for Inquiry
              </Button>
            </div>
          </div>

          {/* Why Choose Vidyaniketan */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-deep-blue mb-8 text-center">Why Choose Vidyaniketan?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyChooseUs.map((reason, index) => (
                <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow-md">
                  <CheckCircle className="h-6 w-6 text-burnt-orange mr-3" />
                  <span className="text-navy-blue font-medium">{reason}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Admission Process */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-deep-blue mb-8 text-center">Admission Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {admissionProcess.map((process, index) => (
                <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md">
                  <div className="w-12 h-12 bg-burnt-orange text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {process.step}
                  </div>
                  <h3 className="text-lg font-bold text-deep-blue mb-2">{process.title}</h3>
                  <p className="text-navy-blue text-sm">{process.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Required Documents */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-deep-blue mb-8 text-center">Required Documents</h2>
            <div className="bg-light-blue/20 p-8 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {requiredDocuments.map((document, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-burnt-orange mr-3" />
                    <span className="text-navy-blue">{document}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Fee Structure */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-deep-blue mb-8 text-center">Fee Structure</h2>
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-bold text-deep-blue">Class</th>
                      <th className="text-left py-3 px-4 font-bold text-deep-blue">Admission Fee</th>
                      <th className="text-left py-3 px-4 font-bold text-deep-blue">Monthly Fee</th>
                      <th className="text-left py-3 px-4 font-bold text-deep-blue">Annual Fee</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 text-navy-blue">Class 1</td>
                      <td className="py-3 px-4 text-navy-blue">₹5,000</td>
                      <td className="py-3 px-4 text-navy-blue">₹2,500</td>
                      <td className="py-3 px-4 text-navy-blue">₹30,000</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 text-navy-blue">Class 2</td>
                      <td className="py-3 px-4 text-navy-blue">₹5,000</td>
                      <td className="py-3 px-4 text-navy-blue">₹2,700</td>
                      <td className="py-3 px-4 text-navy-blue">₹32,400</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 text-navy-blue">Class 3</td>
                      <td className="py-3 px-4 text-navy-blue">₹5,000</td>
                      <td className="py-3 px-4 text-navy-blue">₹2,900</td>
                      <td className="py-3 px-4 text-navy-blue">₹34,800</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-navy-blue">Class 4</td>
                      <td className="py-3 px-4 text-navy-blue">₹5,000</td>
                      <td className="py-3 px-4 text-navy-blue">₹3,100</td>
                      <td className="py-3 px-4 text-navy-blue">₹37,200</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-navy-blue mt-4">
                *Fees include tuition, activities, and basic stationery. Transport charges separate.
              </p>
            </div>
          </section>

          {/* Contact for Admissions */}
          <section className="text-center bg-deep-blue text-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Ready to Join Vidyaniketan?</h2>
            <p className="mb-6">Contact us today for more information or to schedule a school visit.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center justify-center">
                <Phone className="h-5 w-5 mr-2" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center justify-center">
                <Mail className="h-5 w-5 mr-2" />
                <span>admissions@vidyaniketan.edu.in</span>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Admissions;
