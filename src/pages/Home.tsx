import React from 'react';
import bgImg from '../assets/meghamalai-1656587260_b20f2e0f1e.jpg';
import bgImg1 from '../assets/Suruli-Waterfalls-Cover-Photo-840x425.jpg';
import bgImg2 from '../assets/Elephants_at_meghamalai_20190121234421.jpg';
import bgImg3 from '../assets/3_pti01_22_2023_000030a.jpg';
import { Link } from 'react-router-dom';
import { Mountain, Camera, Users, Award, ArrowRight } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: Mountain,
      title: 'Scenic Mountains',
      description: 'Experience the majestic Western Ghats and breathtaking hill stations.'
    },
    {
      icon: Camera,
      title: 'Photography Tours',
      description: 'Capture stunning landscapes and wildlife with expert guidance.'
    },
    {
      icon: Users,
      title: 'Group Adventures',
      description: 'Join like-minded travelers on unforgettable group expeditions.'
    },
    {
      icon: Award,
      title: 'Award-winning Service',
      description: 'Recognized for exceptional hospitality and authentic experiences.'
    }
  ];

  const popularAttractions = [
    {
      name: 'Meghamalai Hills',
      image: bgImg2,
      description: 'Misty mountains perfect for trekking and nature photography.'
    },
    {
      name: 'Suruli Falls',
      image: bgImg1,
      description: 'Magnificent waterfalls cascading from great heights.'
    },
    {
      name: 'Tea Plantations',
      image: bgImg3,
      description: 'Lush green tea gardens stretching across rolling hills.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen">
        <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${bgImg})`
            }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              Discover Theni
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Where misty mountains meet cascading waterfalls in Tamil Nadu's hidden paradise
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/attractions"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Explore Attractions
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Plan Your Trip
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Theni Tourism?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer authentic experiences that connect you with the natural beauty and rich culture of Theni district.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <feature.icon className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Attractions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Destinations</h2>
            <p className="text-xl text-gray-600">Discover the most breathtaking spots in Theni</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularAttractions.map((attraction, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-xl shadow-lg">
                  <img 
                    src={attraction.image} 
                    alt={attraction.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-semibold mb-2">{attraction.name}</h3>
                    <p className="text-sm text-gray-200">{attraction.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/attractions"
              className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              View All Attractions
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Explore Theni?</h2>
          <p className="text-xl mb-8">
            Book your adventure today and create memories that will last a lifetime in Tamil Nadu's most beautiful district.
          </p>
          <Link
            to="/contact"
            className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
          >
            Start Your Journey
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;