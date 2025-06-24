
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    childAge: "",
    interestedClass: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
    alert("Thank you for your inquiry! We will contact you soon.");
    setFormData({
      name: "",
      phone: "",
      email: "",
      childAge: "",
      interestedClass: "",
      message: ""
    });
  };

  return (
    <div className="min-h-screen bg-off-white">
      <Header />
      
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-deep-blue mb-4">Contact Us</h1>
            <p className="text-lg text-navy-blue max-w-3xl mx-auto">
              Get in touch with us for admissions, inquiries, or to schedule a visit to our campus. We're here to help!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-deep-blue mb-6">Get In Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-burnt-orange mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-deep-blue mb-1">Address</h3>
                    <p className="text-navy-blue">
                      Vidyaniketan Primary School<br />
                      123, Education Lane, Knowledge Park<br />
                      City - 400001, Maharashtra, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-burnt-orange mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-deep-blue mb-1">Phone</h3>
                    <p className="text-navy-blue">
                      Main Office: +91 98765 43210<br />
                      Admissions: +91 98765 43211
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-burnt-orange mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-deep-blue mb-1">Email</h3>
                    <p className="text-navy-blue">
                      General: info@vidyaniketan.edu.in<br />
                      Admissions: admissions@vidyaniketan.edu.in
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-burnt-orange mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-deep-blue mb-1">Office Hours</h3>
                    <p className="text-navy-blue">
                      Monday - Friday: 8:00 AM - 4:00 PM<br />
                      Saturday: 9:00 AM - 1:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8">
                <h3 className="font-semibold text-deep-blue mb-4">Location</h3>
                <div className="bg-light-blue/20 rounded-lg p-8 text-center">
                  <MapPin className="h-12 w-12 text-burnt-orange mx-auto mb-4" />
                  <p className="text-navy-blue">Interactive Map Coming Soon</p>
                  <p className="text-sm text-navy-blue mt-2">
                    Click for directions via Google Maps
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-deep-blue mb-6">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-navy-blue mb-2">
                      Parent's Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-burnt-orange focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-navy-blue mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-burnt-orange focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-navy-blue mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-burnt-orange focus:border-transparent"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="childAge" className="block text-sm font-medium text-navy-blue mb-2">
                      Child's Age
                    </label>
                    <input
                      type="number"
                      id="childAge"
                      name="childAge"
                      value={formData.childAge}
                      onChange={handleInputChange}
                      min="4"
                      max="12"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-burnt-orange focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="interestedClass" className="block text-sm font-medium text-navy-blue mb-2">
                      Interested Class
                    </label>
                    <select
                      id="interestedClass"
                      name="interestedClass"
                      value={formData.interestedClass}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-burnt-orange focus:border-transparent"
                    >
                      <option value="">Select Class</option>
                      <option value="class1">Class 1</option>
                      <option value="class2">Class 2</option>
                      <option value="class3">Class 3</option>
                      <option value="class4">Class 4</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-navy-blue mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-burnt-orange focus:border-transparent"
                    placeholder="Tell us about your inquiry..."
                  ></textarea>
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-bright-red hover:bg-bright-red/90 text-white py-3"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
