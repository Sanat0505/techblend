import React from "react";
import { FaPhoneAlt, FaEnvelope, FaHome } from "react-icons/fa";
import ImprintModal from "./Modal/ImprintModal";

function ContactUs() {
  return (
    <div
      id="contact"
      className="min-h-screen bg-silver_main flex items-center justify-center rounded-lg"
    >
      <div className=" w-full p-8">
        <h2 className="lg:text-4xl text-3xl font-bold text-center text-black mb-8">
          Contact Us
        </h2>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="flex items-center space-x-3">
              <FaPhoneAlt className="text-black" />
              <p className="text-gray-700 font-medium">+49 176 48733397</p>
            </div>
            <div className="flex items-center space-x-3">
              <FaEnvelope className="text-black" />
              <p className="text-gray-700 font-medium">team.techblend@gmail.com</p>
            </div>
            <div className="flex items-center space-x-3">
              <FaHome className="text-black" />
              <p className="text-gray-700 font-medium">
                Reichenhainer Str. 35/37
              </p>
            </div>
          </div>

          {/* Embedded Google Map */}
          <div className="w-full h-64">
            <iframe
              title="TechBlend Location"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2706165.719690682!2d17.0136452!3d47.1816682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1698978587398"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div className="flex md:flex-row flex-col items-center justify-between text-black text-sm mt-10 md:px-10">
          <p>© 2024 TechBlend. All rights reserved.</p>
          <div className="text-semibold">
            <ImprintModal />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
