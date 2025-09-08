import React from 'react';
import { Star, Quote, User } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      location: 'New York, USA',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      date: 'December 2024',
      review: 'Absolutely magical experience! The Meghamalai trek was beyond our expectations. Our guide Rajesh was incredibly knowledgeable about the local flora and fauna. The tea plantations were breathtaking, and the sunrise from the peak was unforgettable. Highly recommend Theni Tourism for authentic nature experiences.',
      tour: 'Meghamalai Adventure Package'
    },
    {
      id: 2,
      name: 'David Chen',
      location: 'Singapore',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      date: 'November 2024',
      review: 'The waterfall expedition was incredible! Suruli Falls and Kumbakkarai Falls were stunning. Priya\'s knowledge of local culture and traditions made the trip even more special. The team ensured our safety throughout while making it an adventure of a lifetime. Will definitely return!',
      tour: 'Waterfall Expedition'
    },
    {
      id: 3,
      name: 'Emma Thompson',
      location: 'London, UK',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      date: 'October 2024',
      review: 'Perfect for photography enthusiasts! The biodiversity at Chinnar Wildlife Sanctuary was amazing. We spotted rare birds and the grizzled giant squirrel. The guides were patient and helped us get the perfect shots. The accommodations were comfortable and the food was delicious.',
      tour: 'Wildlife Photography Tour'
    },
    {
      id: 4,
      name: 'Ravi Patel',
      location: 'Mumbai, India',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 4,
      date: 'September 2024',
      review: 'Great family vacation! The team organized everything perfectly for our group of 8. Kids loved the adventure activities and adults enjoyed the scenic beauty. The cultural insights provided by the guides were fascinating. Only minor issue was the weather, but that\'s nature!',
      tour: 'Family Adventure Package'
    },
    {
      id: 5,
      name: 'Lisa Anderson',
      location: 'Sydney, Australia',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      date: 'August 2024',
      review: 'Solo traveler and felt completely safe and welcomed! Arun was an excellent guide for the rock climbing activities. The group was friendly and the experiences were well-planned. Theni\'s natural beauty is unparalleled. Already planning my next visit!',
      tour: 'Solo Adventure Experience'
    },
    {
      id: 6,
      name: 'Michael Rodriguez',
      location: 'Barcelona, Spain',
      image: 'https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      date: 'July 2024',
      review: 'Exceeded all expectations! The combination of adventure and cultural immersion was perfect. Tea plantation visits were educational and the tasting sessions were delightful. Local food was incredible. This is authentic tourism at its best. Thank you Theni Tourism!',
      tour: 'Cultural Heritage Tour'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-5 w-5 ${
          index < rating ? 'text-yellow-500 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  const averageRating = testimonials.reduce((acc, t) => acc + t.rating, 0) / testimonials.length;

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">What Our Travelers Say</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover why hundreds of travelers choose Theni Tourism for their adventures in Tamil Nadu's hidden paradise.
          </p>
          
          {/* Rating Summary */}
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-md mx-auto">
            <div className="text-4xl font-bold text-gray-900 mb-2">{averageRating.toFixed(1)}</div>
            <div className="flex justify-center mb-2">
              {renderStars(Math.round(averageRating))}
            </div>
            <div className="text-gray-600">Based on {testimonials.length} reviews</div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              {/* Quote Icon */}
              <Quote className="h-8 w-8 text-green-600 mb-4" />
              
              {/* Review */}
              <p className="text-gray-700 mb-6 leading-relaxed">{testimonial.review}</p>
              
              {/* Tour Package */}
              <div className="mb-4">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  {testimonial.tour}
                </span>
              </div>
              
              {/* Rating */}
              <div className="flex items-center mb-4">
                {renderStars(testimonial.rating)}
                <span className="ml-2 text-sm text-gray-600">({testimonial.rating}/5)</span>
              </div>
              
              {/* Reviewer Info */}
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.location}</div>
                  <div className="text-sm text-gray-500">{testimonial.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-green-600 rounded-xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Share Your Experience</h2>
          <p className="text-xl mb-6 text-green-100">
            Have you traveled with us? We'd love to hear about your adventure and share it with future travelers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors duration-300">
              Write a Review
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-6 py-3 rounded-lg font-semibold transition-colors duration-300">
              Book Your Trip
            </button>
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
            <div className="text-gray-600">Happy Travelers</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-green-600 mb-2">4.8</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
            <div className="text-gray-600">Would Recommend</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;