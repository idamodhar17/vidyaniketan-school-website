
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Photos" },
    { id: "events", name: "Events" },
    { id: "classroom", name: "Classroom" },
    { id: "activities", name: "Activities" },
    { id: "sports", name: "Sports" }
  ];

  const galleryImages = [
    {
      id: 1,
      category: "events",
      title: "Annual Day Celebration",
      description: "Students performing on Annual Day",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      category: "classroom",
      title: "Interactive Learning",
      description: "Students engaged in classroom activities",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      category: "activities",
      title: "Art & Craft Session",
      description: "Creative arts and crafts time",
      image: "/placeholder.svg"
    },
    {
      id: 4,
      category: "sports",
      title: "Sports Day Fun",
      description: "Children enjoying sports activities",
      image: "/placeholder.svg"
    },
    {
      id: 5,
      category: "events",
      title: "Science Exhibition",
      description: "Students showcasing their projects",
      image: "/placeholder.svg"
    },
    {
      id: 6,
      category: "classroom",
      title: "Reading Corner",
      description: "Story time in the library",
      image: "/placeholder.svg"
    },
    {
      id: 7,
      category: "activities",
      title: "Music Class",
      description: "Learning musical instruments",
      image: "/placeholder.svg"
    },
    {
      id: 8,
      category: "sports",
      title: "Playground Time",
      description: "Children playing during break",
      image: "/placeholder.svg"
    },
    {
      id: 9,
      category: "events",
      title: "Cultural Program",
      description: "Traditional dance performance",
      image: "/placeholder.svg"
    }
  ];

  const filteredImages = selectedCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen bg-off-white">
      <Header />
      
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-deep-blue mb-4">Photo Gallery</h1>
            <p className="text-lg text-navy-blue max-w-3xl mx-auto">
              Take a glimpse into the vibrant life at Vidyaniketan through our collection of memorable moments and activities.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category.id
                    ? "bg-burnt-orange text-white"
                    : "bg-white text-navy-blue hover:bg-light-blue/20"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image) => (
              <div key={image.id} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-[4/3] bg-light-blue/20 flex items-center justify-center">
                  <img
                    src={image.image}
                    alt={image.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-end">
                  <div className="p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-lg font-bold mb-1">{image.title}</h3>
                    <p className="text-sm opacity-90">{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Video Section */}
          <section className="mt-16">
            <h2 className="text-3xl font-bold text-deep-blue mb-8 text-center">School Life Videos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="aspect-video bg-light-blue/20 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-burnt-orange rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-2xl">▶</span>
                    </div>
                    <p className="text-navy-blue">School Tour Video</p>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-deep-blue mb-2">Virtual School Tour</h3>
                <p className="text-navy-blue">Take a virtual tour of our beautiful campus and facilities.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="aspect-video bg-light-blue/20 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-burnt-orange rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-2xl">▶</span>
                    </div>
                    <p className="text-navy-blue">Annual Day Highlights</p>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-deep-blue mb-2">Annual Day 2023</h3>
                <p className="text-navy-blue">Watch highlights from our spectacular Annual Day celebration.</p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;
