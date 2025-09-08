import React from 'react';
import bgImg1 from '../assets/Suruli-Waterfalls-Cover-Photo-840x425.jpg';
import bgImg2 from '../assets/Elephants_at_meghamalai_20190121234421.jpg';
import bgImg3 from '../assets/3_pti01_22_2023_000030a.jpg';
import bgImg4 from '../assets/chinnar-wildlife-sanctuary-munna.jpg';
import bgImg5 from '../assets/kumbakkarai_falls.jpg';
import bgImg6 from '../assets/tamil-nadu-water-level-in-vaigai.jpg';
import { MapPin, Clock, Camera, Star } from 'lucide-react';

const Attractions = () => {
  const attractions = [
    {
      id: 1,
      name: 'Meghamalai (High Wavy Mountains)',
      image: bgImg2,
      description: 'A stunning hill station known for its mist-covered peaks, tea plantations, and diverse wildlife. Perfect for trekking and nature photography.',
      location: '40km from Theni',
      duration: 'Full Day',
      rating: 4.8,
      highlights: ['Tea Plantations', 'Wildlife Sanctuary', 'Trekking Trails', 'Scenic Views']
    },
    {
      id: 2,
      name: 'Suruli Falls',
      image: bgImg1,
      description: 'A magnificent waterfall cascading from a height of 150 feet, surrounded by lush greenery and medicinal herbs.',
      location: '30km from Theni',
      duration: 'Half Day',
      rating: 4.7,
      highlights: ['150ft Waterfall', 'Medicinal Plants', 'Natural Pool', 'Photography']
    },
    {
      id: 3,
      name: 'Kumbakkarai Falls',
      image: bgImg5,
      description: 'A series of beautiful waterfalls flowing through rocky terrain, ideal for adventure seekers and nature lovers.',
      location: '25km from Theni',
      duration: 'Half Day',
      rating: 4.6,
      highlights: ['Multiple Falls', 'Rock Climbing', 'Natural Pools', 'Adventure Sports']
    },
    {
      id: 4,
      name: 'Vaigai Dam',
      image: bgImg6,
      description: 'A major dam and reservoir offering beautiful lake views, boating facilities, and peaceful surroundings.',
      location: '15km from Theni',
      duration: '2-3 Hours',
      rating: 4.3,
      highlights: ['Lake Views', 'Boating', 'Sunset Views', 'Picnic Spots']
    },
    {
      id: 5,
      name: 'Chinnar Wildlife Sanctuary',
      image: bgImg4,
      description: 'A rich biodiversity hotspot home to endangered species including grizzled giant squirrels and star tortoises.',
      location: '50km from Theni',
      duration: 'Full Day',
      rating: 4.9,
      highlights: ['Wildlife Safari', 'Rare Species', 'Nature Walks', 'Bird Watching']
    },
    {
      id: 6,
      name: 'Tea Plantations',
      image: bgImg3,
      description: 'Vast stretches of emerald tea gardens across rolling hills, offering plantation tours and fresh tea tasting.',
      location: 'Various locations',
      duration: 'Half Day',
      rating: 4.5,
      highlights: ['Plantation Tours', 'Tea Tasting', 'Scenic Drives', 'Photography']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Tourist Attractions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the natural wonders and breathtaking landscapes that make Theni a paradise for nature lovers and adventure enthusiasts.
          </p>
        </div>

        {/* Attractions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {attractions.map((attraction) => (
            <div key={attraction.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img 
                  src={attraction.image} 
                  alt={attraction.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full flex items-center">
                  <Star className="h-4 w-4 text-yellow-500 fill-current mr-1" />
                  <span className="font-semibold text-sm">{attraction.rating}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{attraction.name}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{attraction.description}</p>
                
                <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1 text-green-600" />
                    {attraction.location}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1 text-green-600" />
                    {attraction.duration}
                  </div>
                  <div className="flex items-center">
                    <Camera className="h-4 w-4 mr-1 text-green-600" />
                    Photo Spot
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Highlights:</h4>
                  <div className="flex flex-wrap gap-2">
                    {attraction.highlights.map((highlight, index) => (
                      <span 
                        key={index} 
                        className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition-colors duration-300">
                  Get Directions
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16 bg-green-600 rounded-xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Explore?</h2>
          <p className="text-xl mb-6">Contact us for customized tour packages and expert guidance.</p>
          <button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
            Plan Your Trip
          </button>
        </div>
      </div>
    </div>
  );
};

export default Attractions;