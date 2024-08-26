import React from 'react';

const HotelViewCard = ({ image, name, location, rating }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-96">
      <img src={image} alt={name} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-500">{location}</p>
        <div className="flex items-center mt-2">
          {rating ? (
            <span className="text-yellow-400">{'⭐'.repeat(rating)}</span>
          ) : (
            <span className="text-gray-400">Rating not available</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default HotelViewCard;
