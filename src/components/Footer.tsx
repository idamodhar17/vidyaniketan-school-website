
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-deep-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/8b133f71-45b5-4978-8e75-51e3af5bfc09.png" 
                alt="Vidyaniketan Logo" 
                className="h-10 w-auto"
              />
              <div>
                <h3 className="text-lg font-bold">VIDYANIKETAN</h3>
                <p className="text-sm text-light-blue">Primary School</p>
              </div>
            </div>
            <p className="text-sm text-gray-300 mb-4">
              Nurturing young minds with joy, creativity, and values. A safe space where every child learns and grows.
            </p>
            <p className="text-burnt-orange text-sm font-semibold">सर्वे भवन्तु शिक्षिता:</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm hover:text-light-blue transition-colors">About Us</Link></li>
              <li><Link to="/academics" className="text-sm hover:text-light-blue transition-colors">Academics</Link></li>
              <li><Link to="/admissions" className="text-sm hover:text-light-blue transition-colors">Admissions</Link></li>
              <li><Link to="/facilities" className="text-sm hover:text-light-blue transition-colors">Facilities</Link></li>
              <li><Link to="/faculty" className="text-sm hover:text-light-blue transition-colors">Faculty</Link></li>
              <li><Link to="/gallery" className="text-sm hover:text-light-blue transition-colors">Gallery</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1 text-burnt-orange" />
                <div className="text-sm">
                  <p>123 Education Street,</p>
                  <p>Learning District,</p>
                  <p>Mumbai - 400001</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-burnt-orange" />
                <span className="text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-burnt-orange" />
                <span className="text-sm">info@vidyaniketan.edu.in</span>
              </div>
            </div>
          </div>

          {/* School Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">School Hours</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <Clock className="h-4 w-4 mt-1 text-burnt-orange" />
                <div className="text-sm">
                  <p className="font-semibold">Monday - Friday</p>
                  <p>8:00 AM - 2:00 PM</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <Clock className="h-4 w-4 mt-1 text-burnt-orange" />
                <div className="text-sm">
                  <p className="font-semibold">Saturday</p>
                  <p>8:00 AM - 12:00 PM</p>
                </div>
              </div>
              <div className="text-sm">
                <p className="font-semibold text-bright-red">Sunday: Closed</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <h5 className="text-sm font-semibold mb-2">Follow Us</h5>
              <div className="flex space-x-3">
                <a href="#" className="text-light-blue hover:text-white transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-light-blue hover:text-white transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-light-blue hover:text-white transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-navy-blue mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-300">
              © 2024 Vidyaniketan Primary School. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="#" className="text-sm text-gray-300 hover:text-light-blue transition-colors">
                Privacy Policy
              </Link>
              <Link to="#" className="text-sm text-gray-300 hover:text-light-blue transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
