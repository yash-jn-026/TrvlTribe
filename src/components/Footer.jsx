import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"; // Importing social media icons
import { FiSend } from "react-icons/fi"; // Importing send icon
import Logo from "../assets/logo.svg";

function Footer() {
  return (
    <div className="bg-[#f9f9f9] py-8 px-4 md:px-16">
      <div className="flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0">
        <div className="md:w-1/4">
        <img src={Logo } className="bg-[#7F56D9] rounded-lg p-6" alt="" />
          <p className="text-gray-600 mt-4">
            We always make our customers happy by providing as many choices as possible.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-[#7F56D9]"><FaFacebookF /></a>
            <a href="#" className="text-[#7F56D9]"><FaTwitter /></a>
            <a href="#" className="text-[#7F56D9]"><FaInstagram /></a>
          </div>
        </div>

        <div className="md:w-1/5">
          <h3 className="font-poppins font-semibold text-lg text-[#161414]">About</h3>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Menu</a></li>
          </ul>
        </div>

        <div className="md:w-1/5">
          <h3 className="font-poppins font-semibold text-lg text-[#161414]">Company</h3>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li><a href="#">Why 2rism</a></li>
            <li><a href="#">Partner With Us</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>

        <div className="md:w-1/5">
          <h3 className="font-poppins font-semibold text-lg text-[#161414]">Support</h3>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li><a href="#">Account</a></li>
            <li><a href="#">Support Center</a></li>
            <li><a href="#">Feedback</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        <div className="md:w-1/4">
          <h3 className="font-poppins font-semibold text-lg text-[#161414]">Subscribe on our destination review newsletters</h3>
          <form className="mt-4 flex items-center">
            <input 
              type="email" 
              placeholder="Your Email" 
              className="p-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7F56D9] flex-grow"
            />
            <button 
              type="submit" 
              className="p-3 bg-[#7F56D9] text-white rounded-r-lg">
              <FiSend />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Footer;
