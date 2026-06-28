import React from 'react';
import { Factory, Leaf, Recycle, Award, Users, Globe } from 'lucide-react';

const Factories: React.FC = () => {
  const partnerFactories = [
    {
      id: 1,
      name: 'EcoTech Manufacturing',
      location: 'San Francisco, CA',
      specialty: 'Electronics Refurbishment',
      description: 'Specializing in giving new life to electronic devices through professional refurbishment and upcycling.',
      impact: '15,000+ devices refurbished',
      certifications: ['ISO 14001', 'R2 Certified'],
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      name: 'Green Textile Works',
      location: 'Portland, OR',
      specialty: 'Clothing & Textile Recycling',
      description: 'Converting old textiles into new products through innovative recycling processes and sustainable manufacturing.',
      impact: '50,000+ garments processed',
      certifications: ['GOTS Certified', 'Fair Trade'],
      image: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 3,
      name: 'Sustainable Furniture Co.',
      location: 'Austin, TX',
      specialty: 'Furniture Restoration',
      description: 'Expert restoration and upcycling of furniture pieces, creating beautiful and functional items from discarded materials.',
      impact: '8,000+ furniture pieces restored',
      certifications: ['FSC Certified', 'Cradle to Cradle'],
      image: 'https://images.pexels.com/photos/6474471/pexels-photo-6474471.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 4,
      name: 'Circular Plastics Inc.',
      location: 'Seattle, WA',
      specialty: 'Plastic Recycling & Manufacturing',
      description: 'Advanced plastic recycling facility creating new products from plastic waste using cutting-edge technology.',
      impact: '100+ tons of plastic recycled monthly',
      certifications: ['ISO 9001', 'Zero Waste Certified'],
      image: 'https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const benefits = [
    {
      icon: <Recycle className="h-8 w-8 text-green-600" />,
      title: 'Waste Reduction',
      description: 'Our partner factories help divert thousands of items from landfills every month.'
    },
    {
      icon: <Leaf className="h-8 w-8 text-green-600" />,
      title: 'Sustainable Processing',
      description: 'All partners follow strict environmental standards and sustainable manufacturing practices.'
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: 'Job Creation',
      description: 'Supporting local economies by creating green jobs in the circular economy sector.'
    },
    {
      icon: <Globe className="h-8 w-8 text-green-600" />,
      title: 'Global Impact',
      description: 'Contributing to worldwide sustainability goals and climate change mitigation efforts.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Factory className="h-16 w-16 text-green-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Partner Factories</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet our network of certified partner factories that transform donated items into valuable resources, 
            supporting the circular economy and reducing environmental impact.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Why Partner Factories Matter
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Partner Factories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {partnerFactories.map((factory) => (
            <div key={factory.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img
                    src={factory.image}
                    alt={factory.name}
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {factory.name}
                    </h3>
                    <div className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                      Certified
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-2">{factory.location}</p>
                  <p className="text-green-600 font-medium mb-3">{factory.specialty}</p>
                  
                  <p className="text-gray-700 text-sm mb-4">
                    {factory.description}
                  </p>
                  
                  <div className="mb-4">
                    <div className="flex items-center mb-2">
                      <Award className="h-4 w-4 text-yellow-500 mr-2" />
                      <span className="text-sm font-medium text-gray-900">Impact:</span>
                    </div>
                    <p className="text-sm text-gray-600 ml-6">{factory.impact}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {factory.certifications.map((cert, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">1</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Collection</h3>
              <p className="text-gray-600 text-sm">Items are collected from drop points and sorted by category and condition.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Processing</h3>
              <p className="text-gray-600 text-sm">Partner factories receive items and begin the refurbishment or recycling process.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Transformation</h3>
              <p className="text-gray-600 text-sm">Items are transformed into new products or restored to like-new condition.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-yellow-600">4</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Distribution</h3>
              <p className="text-gray-600 text-sm">Finished products are made available to the community or sold to support operations.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gray-900 rounded-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">
            Interested in Becoming a Partner Factory?
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Join our network of sustainable manufacturers and help us create a more circular economy. 
            We're always looking for certified facilities that share our commitment to environmental responsibility.
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Apply to Partner
          </button>
        </div>
      </div>
    </div>
  );
};

export default Factories;