import React, { useState } from "react";
import axios from "axios";
import { FaMapMarkerAlt, FaBiking, FaCalendarAlt, FaUser, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import useNavigate from React Router

const SearchBar = () => {
  const [results, setResults] = useState([]);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showGuestsDropdown, setShowGuestsDropdown] = useState(false);
  const [location, setLocation] = useState("");
  const [activity, setActivity] = useState("");
  const [checkinDate, setCheckinDate] = useState("");
  const [checkoutDate, setCheckoutDate] = useState("");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);

  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleGuestsClick = () => {
    setShowGuestsDropdown(!showGuestsDropdown);
  };

  const handleAdultsChange = (amount) => {
    setAdults((prev) => Math.max(1, prev + amount));
  };

  const handleChildrenChange = (amount) => {
    setChildren((prev) => Math.max(0, prev + amount));
  };

  const handleRoomsChange = (amount) => {
    setRooms((prev) => Math.max(1, prev + amount));
  };

  const closeGuestsDropdown = () => {
    setShowGuestsDropdown(false);
  };

  const handleDateClick = () => {
    setShowDatePicker(!showDatePicker);
  };

  const handleCheckinDateChange = (e) => {
    setCheckinDate(e.target.value);
    setShowDatePicker(false);
  };

  const handleCheckoutDateChange = (e) => {
    setCheckoutDate(e.target.value);
    setShowDatePicker(false);
  };

  const handleSearch = async () => {
    if (!checkinDate || !checkoutDate || new Date(checkoutDate) <= new Date(checkinDate)) {
      alert("Please ensure that the checkout date is after the check-in date.");
      return;
    }
    const options = {
      method: "GET",
      url: "https://booking-com.p.rapidapi.com/v1/hotels/search",
      params: {
        children_ages: children > 0 ? Array(children).fill(5).join(",") : "", // Assume children's ages
        page_number: "0",
        adults_number: adults,
        children_number: children,
        room_number: rooms,
        include_adjacency: "true",
        units: "metric",
        categories_filter_ids: "class::2,class::4,free_cancellation::1",
        checkout_date: checkoutDate,
        dest_id: "-553173", // This should be dynamically set based on the location, you might need to call an API to get the dest_id from the location name
        filter_by_currency: "AED",
        dest_type: "city",
        checkin_date: checkinDate,
        order_by: "popularity",
        locale: "en-gb",
      },
      headers: {
        "x-rapidapi-key": "3f287ca404mshf2d45ee923d8e7cp17ad36jsneb17d9544fe0",
        "x-rapidapi-host": "booking-com.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      setResults(response.data.result); // Update state with the search results
      navigate("/search-results", { state: { results: response.data.result } }); // Navigate to the search results page
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center md:flex-row bg-white rounded-lg text-slate-500 shadow-lg w-fit max-w-fit mx-auto py-4">
        {/* Location Input */}
        <div className="flex items-center space-x-2 px-2">
          <FaMapMarkerAlt className="text-yellow-500 w-8 h-8" />
          <div>
            <p className="text-gray-500 text-sm text-left">Location</p>
            <input
              type="text"
              placeholder="Explore destinations"
              className="font-semibold bg-transparent outline-none text-base text-black"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
        </div>

        {/* Activity Input */}
        <div className="flex items-center space-x-2 px-2">
          <FaBiking className="text-yellow-500 w-8 h-8" />
          <div>
            <p className="text-gray-500 text-sm text-left">Activity</p>
            <input
              type="text"
              placeholder="All Activities"
              className="font-semibold bg-transparent outline-none text-sm text-black"
              value={activity}
              onChange={(e) => setActivity(e.target.value)}
            />
          </div>
        </div>

        {/* Check-in Date Picker Input */}
        <div className="flex items-center space-x-2 relative">
          <FaCalendarAlt
            className="text-yellow-500 w-8 h-8 cursor-pointer"
            onClick={() => setCheckinDate("")} // Toggle check-in date
          />
          <div>
            <p className="text-gray-500 text-sm text-left ">Check-in Date</p>
            <input
              type="date"
              value={checkinDate}
              onChange={(e) => setCheckinDate(e.target.value)}
              className="font-semibold bg-transparent outline-none text-sm text-black"
            />
          </div>
        </div>

        <div className="flex items-center space-x-2 relative">
          <FaCalendarAlt
            className="text-yellow-500 w-8 h-8 cursor-pointer"
            onClick={() => setCheckoutDate("")} // Toggle checkout date
          />
          <div>
            <p className="text-gray-500 text-sm text-left ">Checkout Date</p>
            <input
              type="date"
              value={checkoutDate}
              onChange={(e) => setCheckoutDate(e.target.value)}
              className="font-semibold bg-transparent outline-none text-sm text-black"
            />
          </div>
        </div>

        {/* Guests Input */}
        <div className="flex items-center space-x-2 px-2 relative">
          <FaUser
            className="text-yellow-500 w-8 h-8 cursor-pointer"
            onClick={handleGuestsClick}
          />
          <div>
            <p className="text-gray-500 text-sm text-left">Guests</p>
            <input
              type="text"
              value={`${adults} adults • ${children} children • ${rooms} room`}
              placeholder="1 guest"
              className="w-72 font-semibold bg-transparent outline-none text-sm text-black"
              readOnly
            />
          </div>
          {showGuestsDropdown && (
            <div className="absolute top-full left-0 mt-2 bg-white p-4 rounded shadow-lg w-64 z-10">
              <div className="flex justify-between items-center mb-2">
                <p className="text-gray-500 text-lg">Adults</p>
                <div className="flex items-center text-lg space-x-2">
                  <button
                    className="border rounded px-2"
                    onClick={() => handleAdultsChange(-1)}
                  >
                    -
                  </button>
                  <span>{adults}</span>
                  <button
                    className="border rounded px-2"
                    onClick={() => handleAdultsChange(1)}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-center mb-2">
                <p className="text-gray-500 text-lg">Children</p>
                <div className="flex items-center text-lg space-x-2">
                  <button
                    className="border rounded px-2"
                    onClick={() => handleChildrenChange(-1)}
                  >
                    -
                  </button>
                  <span>{children}</span>
                  <button
                    className="border rounded px-2"
                    onClick={() => handleChildrenChange(1)}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-center mb-2">
                <p className="text-gray-500 text-lg">Rooms</p>
                <div className="flex items-center text-lg space-x-2">
                  <button
                    className="border rounded px-2"
                    onClick={() => handleRoomsChange(-1)}
                  >
                    -
                  </button>
                  <span>{rooms}</span>
                  <button
                    className="border rounded px-2"
                    onClick={() => handleRoomsChange(1)}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-center mb-2 text-lg">
                <p className="text-gray-500 text-lg">Travelling with pets?</p>
                <input type="checkbox" className="toggle-checkbox" />
              </div>
              <button
                className="bg-purple-500 text-white p-3 w-fit h-fit rounded-lg shadow-md hover:bg-purple-700 text-lg"
                onClick={closeGuestsDropdown}
              >
                Done
              </button>
            </div>
          )}
        </div>
        <div className="flex items-center px-2">
          <button
            className="bg-purple-500 text-white p-3 w-fit h-fit rounded-full shadow-md hover:bg-purple-700"
            onClick={handleSearch}
          >
            <FaSearch className="text-white w-8 h-8" />
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
