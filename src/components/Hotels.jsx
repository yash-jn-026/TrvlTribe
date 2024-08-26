import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import HotelViewCard from './HotelViewCard';

const Hotels = () => {
  const [hotels, setHotels] = useState([]);
  const [error, setError] = useState(null);

  // Array of hotel IDs to fetch
  const hotelIds = ['1377070', '1576501', '2395903', '2914653'];

  useEffect(() => {
    const fetchHotelsSequentially = async () => {
      const fetchedHotels = [];
      for (let i = 0; i < hotelIds.length; i++) {
        try {
          const options = {
            method: 'GET',
            url: 'https://booking-com.p.rapidapi.com/v1/hotels/data',
            params: { hotel_id: hotelIds[i], locale: 'en-gb' },
            headers: {
              'x-rapidapi-key': '3f287ca404mshf2d45ee923d8e7cp17ad36jsneb17d9544fe0',
              'x-rapidapi-host': 'booking-com.p.rapidapi.com',
            },
          };
          const response = await axios.request(options);
          fetchedHotels.push(response.data);
          setHotels([...fetchedHotels]);

          // Adding a delay between requests to avoid hitting the rate limit
          await new Promise((resolve) => setTimeout(resolve, 200)); // 2-second delay
        } catch (error) {
          if (error.response && error.response.status === 429) {
            setError('Too many requests. Please try again later.');
            break; // Stop further requests if rate limit is hit
          } else {
            setError('Failed to fetch data. Please try again later.');
            console.error(error);
            break;
          }
        }
      }
    };

    fetchHotelsSequentially();
  }, []);

  return (
    <div className="flex flex-col space-y-8 px-4 md:px-16 my-8 md:my-16">
      <h2 className="font-poppins font-semibold text-2xl md:text-4xl text-[#161414]">Hotels and Restaurants</h2>
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div className="flex space-x-4 overflow-x-scroll">
          {hotels.map((hotel) => (
            <HotelViewCard
              key={hotel.hotel_id}
              image={hotel.main_photo_url}
              name={hotel.name}
              location={`${hotel.city}, ${hotel.country}`}
              rating={hotel.class}
            />
          ))}
        </div>
      )}
      <Link to="/view-all" className="mt-6 inline-block text-blue-500 hover:underline">
        View all
      </Link>
    </div>
  );
};

export default Hotels;
