import React, { useState, useEffect } from 'react';
import { Heart, Users, Clock, MapPin, Phone, Mail, Plus } from 'lucide-react';
import { api } from '../lib/api';

interface Volunteer {
  id: string;
  name: string;
  email: string;
  phone?: string;
  location?: string;
  availability: string;
  created_at: string;
}

const Volunteers: React.FC = () => {
  const [volunteers, setVolunteers] = useState<Volunteer[]>([]);
  const [loading, setLoading] = useState(true);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);

  useEffect(() => {
    fetchVolunteers();
  }, []);

  const fetchVolunteers = async () => {
    try {
      const data = await api.getVolunteers();
      setVolunteers(data);
    } catch (error) {
      console.error('Error fetching volunteers:', error);
      // Mock data for demonstration
      setVolunteers([
        {
          id: '1',
          name: 'Gayathri Devi',
          email: 'Devi@gmail.com',
          phone: '(+91) 9064627829',
          location: 'Palnadu',
          availability: 'weekends',
          created_at: '2025-01-10T20:00:00+05:30'
        },
        {
          id: '2',
          name: 'Reshmanjali',
          email: 'reshma@gmail.com',
          phone: '(+91) 7854753325',
          location: 'Guntur',
          availability: 'evenings',
          created_at: '2025-01-10T20:00:00+05:30'
        },
        {
          id: '3',
          name: 'Karthi',
          email: 'Karthi@gmail.com',
          phone: '(+91) 8976467788',
          location: '',
          availability: 'flexible',
          created_at: '2025-01-10T20:00:00+05:30'
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const VolunteerRegistrationForm = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      location: '',
      availability: 'weekends'
    });
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setSubmitting(true);
      
      try {
        await api.registerVolunteer(formData);
        setShowRegistrationForm(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          location: '',
          availability: 'weekends'
        });
        fetchVolunteers();
      } catch (error) {
        console.error('Error registering volunteer:', error);
      } finally {
        setSubmitting(false);
      }
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-lg max-w-md w-full p-6">
          <h3 className="text-lg font-semibold mb-4">Become a Volunteer</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone (optional)
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="City, State"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Availability
              </label>
              <select
                value={formData.availability}
                onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="weekends">Weekends</option>
                <option value="evenings">Evenings</option>
                <option value="weekdays">Weekdays</option>
                <option value="flexible">Flexible</option>
              </select>
            </div>
            
            <div className="flex gap-3 pt-4">
              <button
                type="button"
                onClick={() => setShowRegistrationForm(false)}
                className="flex-1 px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={submitting}
                className="flex-1 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md transition-colors disabled:opacity-50"
              >
                {submitting ? 'Registering...' : 'Register'}
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

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
          <div className="flex justify-center mb-4">
            <Heart className="h-16 w-16 text-red-500" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Amazing Volunteers</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Meet the incredible people who make our community possible. Our volunteers help organize swaps, 
            manage drop points, and spread the word about sustainable living.
          </p>
          
          <button
            onClick={() => setShowRegistrationForm(true)}
            className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors shadow-lg hover:shadow-xl"
          >
            <Plus className="h-5 w-5 mr-2" />
            Become a Volunteer
          </button>
        </div>

        {/* Why Volunteer Section */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Why Volunteer With Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Make a Difference</h3>
              <p className="text-gray-600">Help reduce waste and promote sustainable living in your community.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Meet Like-minded People</h3>
              <p className="text-gray-600">Connect with others who share your passion for environmental sustainability.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Flexible Schedule</h3>
              <p className="text-gray-600">Volunteer on your own terms with opportunities that fit your schedule.</p>
            </div>
          </div>
        </div>

        {/* Volunteers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {volunteers.map((volunteer) => (
            <div key={volunteer.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6">
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-br from-green-400 to-blue-500 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {volunteer.name.charAt(0)}
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-semibold text-gray-900">{volunteer.name}</h3>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    <span className="capitalize">{volunteer.availability}</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2 text-sm">
                <div className="flex items-center text-gray-600">
                  <Mail className="h-4 w-4 mr-2 flex-shrink-0" />
                  <span className="truncate">{volunteer.email}</span>
                </div>
                
                {volunteer.phone && (
                  <div className="flex items-center text-gray-600">
                    <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span>{volunteer.phone}</span>
                  </div>
                )}
                
                {volunteer.location && (
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span>{volunteer.location}</span>
                  </div>
                )}
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-100">
                <span className="text-xs text-gray-500">
                  Volunteer since {new Date(volunteer.created_at).toLocaleDateString()}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Volunteer Opportunities */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Volunteer Opportunities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Drop Point Manager</h3>
              <p className="text-gray-600 text-sm">Help organize and maintain drop point locations.</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Event Coordinator</h3>
              <p className="text-gray-600 text-sm">Organize community swap events and workshops.</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Community Outreach</h3>
              <p className="text-gray-600 text-sm">Spread awareness about sustainable living practices.</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Flexible Helper</h3>
              <p className="text-gray-600 text-sm">Assist with various tasks based on your availability.</p>
            </div>
          </div>
        </div>
      </div>

      {showRegistrationForm && <VolunteerRegistrationForm />}
    </div>
  );
};

export default Volunteers;