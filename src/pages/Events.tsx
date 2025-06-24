
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Clock, MapPin } from "lucide-react";

const Events = () => {
  const upcomingEvents = [
    {
      title: "Annual Day Celebration",
      date: "March 15, 2024",
      time: "10:00 AM",
      location: "School Auditorium",
      description: "Join us for our grand annual day celebration featuring performances by all classes."
    },
    {
      title: "Sports Day",
      date: "February 28, 2024",
      time: "9:00 AM",
      location: "School Playground",
      description: "Fun-filled sports activities and competitions for all students."
    },
    {
      title: "Science Exhibition",
      date: "April 10, 2024",
      time: "11:00 AM",
      location: "Activity Room",
      description: "Students showcase their creative science projects and experiments."
    }
  ];

  const pastEvents = [
    {
      title: "Children's Day Celebration",
      date: "November 14, 2023",
      description: "A joyful celebration with games, performances, and treats for all children."
    },
    {
      title: "Diwali Festival",
      date: "November 2, 2023",
      description: "Traditional celebration with rangoli making and cultural activities."
    }
  ];

  return (
    <div className="min-h-screen bg-off-white">
      <Header />
      
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-deep-blue mb-4">School Events</h1>
            <p className="text-lg text-navy-blue max-w-3xl mx-auto">
              Join us in celebrating learning, creativity, and joy through our exciting school events and activities.
            </p>
          </div>

          {/* Upcoming Events */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-deep-blue mb-8 text-center">Upcoming Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-deep-blue mb-3">{event.title}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-navy-blue">
                      <Calendar className="h-4 w-4 mr-2 text-burnt-orange" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-navy-blue">
                      <Clock className="h-4 w-4 mr-2 text-burnt-orange" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-navy-blue">
                      <MapPin className="h-4 w-4 mr-2 text-burnt-orange" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <p className="text-navy-blue">{event.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Past Events */}
          <section>
            <h2 className="text-3xl font-bold text-deep-blue mb-8 text-center">Past Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pastEvents.map((event, index) => (
                <div key={index} className="bg-light-blue/20 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-deep-blue mb-2">{event.title}</h3>
                  <p className="text-burnt-orange font-medium mb-3">{event.date}</p>
                  <p className="text-navy-blue">{event.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Events;
