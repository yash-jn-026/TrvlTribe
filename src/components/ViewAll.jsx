import React from 'react';
import { useLocation } from 'react-router-dom';
import HotelCard from './HotelCard';

const ViewAll = () => {
  const location = useLocation();
  const { hotels } = location.state || { hotels: [] }; // Fallback in case there is no state

  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold mb-6">All Hotels</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {hotels.map((hotel) => (
          <HotelCard
            key={hotel.hotel_id}
            image={hotel.main_photo_url}
            name={hotel.name}
            location={`${hotel.city}, ${hotel.country}`}
            rating={hotel.class}
          />
        ))}
      </div>
    </div>
  );
};

export default ViewAll;
