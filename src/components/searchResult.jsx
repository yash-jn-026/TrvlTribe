import React from 'react';
import { useLocation } from 'react-router-dom';
import HeroSectiontext from './heroSectiontext';
import Herosection from '../sections/Herosection';

const SearchResults = () => {
  const location = useLocation();
  const results = location.state?.results || [];

  if (!results.length) {
    return <div>No results found.</div>;
  }

  return (
    <>
    <Herosection/>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {results.map((hotel) => (
        <div key={hotel.hotel_id} className="border rounded-lg shadow-md p-4 flex flex-col bg-white">
          <img src={hotel.max_photo_url} alt={hotel.hotel_name} className="rounded-lg mb-4" />
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-semibold">{hotel.hotel_name}</h3>
              <p className="text-gray-500">{hotel.city_trans}, {hotel.country_trans}</p>
              <p className="text-yellow-500 font-bold">{hotel.review_score_word} ({hotel.review_nr} reviews)</p>
            </div>
            <span className="bg-blue-500 text-white rounded-full px-3 py-1">
              {hotel.review_score}
            </span>
          </div>
          <p className="text-lg font-bold mt-auto">{hotel.min_total_price} {hotel.currency_code}</p>
          <a href={hotel.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline mt-2">
            View on Booking.com
          </a>
        </div>
      ))}
    </div>
    </>
  );
};

export default SearchResults;
