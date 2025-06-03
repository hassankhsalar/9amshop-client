import React, { useContext, useEffect, useState } from 'react';
import bg from '../../public/bg.jpg';
import axios from 'axios';
import { faker } from '@faker-js/faker';
import { AuthContext } from '../Provider/AuthProvider';

const DashboardHome = () => {
  const { user } = useContext(AuthContext);
  const [shopNames, setShopNames] = useState([]);
  const [showShops, setShowShops] = useState(false);
  const avatarUrl = faker.image.avatar();

  const fetchShops = async () => {
    try {
      if (!user?.email) return;
      const res = await axios.get(`http://localhost:5000/user-shops?email=${user.email}`);
      setShopNames(res.data.shops || []);
      setShowShops(true);
    } catch (error) {
      console.error('Failed to fetch shop names:', error);
    }
  };

  return (
    <div className="w-full h-screen flex flex-col relative">
      {/* Top Image Section */}
      <div className="h-1/3 rounded-md overflow-hidden">
        <img className="w-full h-screen object-cover" src={bg} alt="Background" />
      </div>

      {/* Avatar */}
      <div className="absolute left-1/2 top-[30%] transform -translate-x-1/2 -translate-y-1/2">
        <img
          src={avatarUrl}
          alt="Profile"
          className="w-48 h-48 rounded-full border-4 border-white shadow-md cursor-pointer"
          onClick={fetchShops}
        />
      </div>

      {/* Bottom Section */}
      <div className="h-2/3 bg-white pt-20 px-6 text-center">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">
          Welcome, {user?.email || 'Guest'}
        </h1>

        {showShops && (
          <div className="mt-4">
            <h2 className="text-xl font-bold text-gray-700 mb-2">Your Shop Names:</h2>
            <ul className="space-y-1 text-gray-600">
              {shopNames.map((shop, idx) => (
                <li key={idx}>• {shop}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardHome;
