import React from 'react';
import HotelCard from './HotelCard'; // Assuming HotelCard is a separate component

const HotelsList = ({ hotels = [] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {hotels.map((hotel) => (
        <HotelCard key={hotel.hotel_id} hotel={hotel} />
      ))}
    </div>
  );
};

export default HotelsList;
