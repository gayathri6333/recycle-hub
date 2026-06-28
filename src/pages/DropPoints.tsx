import React, { useState, useEffect } from 'react';
import { MapPin, Clock, Phone, Navigation } from 'lucide-react';
import { api } from '../lib/api';

interface DropPoint {
  id: string;
  name: string;
  address: string;
  city: string;
  phone?: string;
  hours: string;
  description?: string;
  latitude?: number;
  longitude?: number;
}

const DropPoints: React.FC = () => {
  const [dropPoints, setDropPoints] = useState<DropPoint[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCity, setSelectedCity] = useState('all');

  useEffect(() => {
    fetchDropPoints();
  }, []);

  const fetchDropPoints = async () => {
    try {
      const data = await api.getDropPoints();
      setDropPoints(data);
    } catch (error) {
      console.error('Error fetching drop points:', error);
      // Mock data for demonstration
      setDropPoints([
        {
          id: '1',
          name: 'Green Community Center',
          address: '123 Eco Street',
          city: 'San Francisco',
          phone: '(555) 123-4567',
          hours: 'Mon-Fri: 9AM-6PM, Sat: 10AM-4PM',
          description: 'Main collection point with sorting facilities and volunteer support.',
        },
        {
          id: '2',
          name: 'Sustainable Living Hub',
          address: '456 Recycle Avenue',
          city: 'Oakland',
          phone: '(555) 234-5678',
          hours: 'Daily: 8AM-8PM',
          description: 'Large facility accepting all types of items with immediate processing.',
        },
        {
          id: '3',
          name: 'Neighborhood Swap Station',
          address: '789 Community Lane',
          city: 'Berkeley',
          phone: '(555) 345-6789',
          hours: 'Tue-Sun: 10AM-7PM',
          description: 'Cozy local spot perfect for small items and quick exchanges.',
        },
        {
          id: '4',
          name: 'Eco Exchange Point',
          address: '321 Green Way',
          city: 'San Jose',
          phone: '(555) 456-7890',
          hours: 'Mon-Sat: 9AM-5PM',
          description: 'Specialized in electronics and furniture with repair services.',
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const cities = ['all', ...Array.from(new Set(dropPoints.map(dp => dp.city)))];
  
  const filteredDropPoints = dropPoints.filter(dp => 
    selectedCity === 'all' || dp.city === selectedCity
  );

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Drop Points</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find convenient locations near you to drop off items or pick up treasures from the community. 
            Our network of drop points makes swapping easy and accessible.
          </p>
        </div>

        {/* Filter */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <label className="text-sm font-medium text-gray-700">Filter by city:</label>
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              {cities.map(city => (
                <option key={city} value={city}>
                  {city === 'all' ? 'All Cities' : city}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Drop Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDropPoints.map((dropPoint) => (
            <div key={dropPoint.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {dropPoint.name}
                  </h3>
                  <div className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                    Active
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-gray-400 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-gray-900">{dropPoint.address}</p>
                      <p className="text-gray-600">{dropPoint.city}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                    <p className="text-gray-700">{dropPoint.hours}</p>
                  </div>
                  
                  {dropPoint.phone && (
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                      <p className="text-gray-700">{dropPoint.phone}</p>
                    </div>
                  )}
                </div>
                
                {dropPoint.description && (
                  <p className="text-gray-600 text-sm mb-6">
                    {dropPoint.description}
                  </p>
                )}
                
                <div className="flex gap-3">
                  <button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-colors font-medium">
                    Get Directions
                  </button>
                  <button className="p-2 border border-gray-300 hover:border-green-500 rounded-lg transition-colors">
                    <Navigation className="h-5 w-5 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-16 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              How Drop Points Work
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">1</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Drop Off Items</h3>
                <p className="text-gray-600">Bring your clean, usable items to any drop point during operating hours.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">2</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Browse & Collect</h3>
                <p className="text-gray-600">Explore available items and take what you need - it's completely free!</p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">3</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Make Impact</h3>
                <p className="text-gray-600">Every swap reduces waste and helps build a more sustainable community.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropPoints;