import React from 'react';
import { Award, Users, Heart, Mountain } from 'lucide-react';
import bgImg1 from '../assets/727822TUEC144.jpg';
import bgImg2 from '../assets/KishoVarma.jpg';
import bgImg3 from '../assets/MohdSuhi.jpg';

const About = () => {
  const team = [
    {
      name: 'Rajakumar S',
      role: 'Team member',
      image: bgImg1,
      experience: '12 Years',
      bio: 'A passionate naturalist and certified mountain guide with extensive knowledge of Theni\'s flora and fauna. Rajesh has been leading eco-tours across the Western Ghats for over a decade.',
      specialties: ['Wildlife Photography', 'Mountain Trekking', 'Eco-Tourism']
    },
    {
      name: 'Kisho Varma M',
      role: 'Team member',
      image: bgImg2,
      experience: '8 Years',
      bio: 'An expert in Tamil culture and traditions, Priya brings the rich heritage of Theni to life through her engaging storytelling and deep cultural insights.',
      specialties: ['Cultural Tours', 'Local Traditions', 'Historical Sites']
    },
    {
      name: 'Mohamed Suhail N',
      role: 'Team member',
      image: bgImg3,
      experience: '10 Years',
      bio: 'A certified adventure sports instructor specializing in waterfall rappelling, rock climbing, and camping expeditions across Theni\'s challenging terrains.',
      specialties: ['Adventure Sports', 'Rock Climbing', 'Camping Expeditions']
    }
  ];

  const stats = [
    { number: '500+', label: 'Happy Travelers', icon: Users },
    { number: '50+', label: 'Tour Destinations', icon: Mountain },
    { number: '15+', label: 'Years Experience', icon: Award },
    { number: '98%', label: 'Satisfaction Rate', icon: Heart }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Theni Tourism</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We are passionate locals dedicated to sharing the hidden treasures of Theni district with travelers 
            from around the world. Our mission is to provide authentic, sustainable, and unforgettable experiences 
            while preserving the natural beauty of our homeland.
          </p>
        </div>

        {/* Our Story */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2010, Theni Tourism began as a small family initiative to showcase the untouched beauty 
                  of our region. What started as weekend treks with friends has grown into a trusted tourism company 
                  serving hundreds of nature enthusiasts annually.
                </p>
                <p>
                  We believe in responsible tourism that benefits local communities while preserving the pristine 
                  environment that makes Theni special. Our team of certified guides combines deep local knowledge 
                  with professional expertise to ensure safe and memorable adventures.
                </p>
                <p>
                  From the misty peaks of Meghamalai to the thundering waters of Suruli Falls, we've explored every 
                  corner of this magnificent district to bring you the very best experiences Theni has to offer.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Theni Landscape"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg">
              <stat.icon className="h-8 w-8 text-green-600 mx-auto mb-3" />
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
              <div className="text-gray-600 text-sm md:text-base">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced team of local experts is dedicated to providing you with authentic and safe adventures 
              throughout Theni district.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-fit object-cover"
                  />
                  <div className="absolute bottom-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {member.experience}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-green-600 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.bio}</p>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Specialties:</h4>
                    <div className="flex flex-wrap gap-1">
                      {member.specialties.map((specialty, idx) => (
                        <span 
                          key={idx} 
                          className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission & Values */}
        <div className="bg-green-600 rounded-xl p-8 md:p-12 text-white">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission & Values</h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              We are committed to sustainable tourism that preserves natural heritage while creating meaningful 
              connections between travelers and our beautiful region.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Award className="h-12 w-12 text-green-200 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Excellence</h3>
              <p className="text-green-100">
                Delivering exceptional experiences through professional service and local expertise.
              </p>
            </div>
            <div className="text-center">
              <Heart className="h-12 w-12 text-green-200 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Sustainability</h3>
              <p className="text-green-100">
                Protecting our environment and supporting local communities for future generations.
              </p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-green-200 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Community</h3>
              <p className="text-green-100">
                Building lasting relationships with travelers and contributing to local development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;