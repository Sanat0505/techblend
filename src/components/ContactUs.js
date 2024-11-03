import React from "react";
import { FaPhoneAlt, FaEnvelope, FaHome } from "react-icons/fa";

function ContactUs() {
  return (
    <div id="contact" className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center ">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center text-black mb-8">Contact Us</h2>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="flex items-center space-x-3">
              <FaPhoneAlt className="text-black" />
              <p className="text-gray-700 font-medium">+49 176 48733397</p>
            </div>
            <div className="flex items-center space-x-3">
              <FaEnvelope className="text-black" />
              <p className="text-gray-700 font-medium">contact@techblend.com</p>
            </div>
            <div className="flex items-center space-x-3">
              <FaHome className="text-black" />
              <p className="text-gray-700 font-medium">Reichenhainer Str. 35/37</p>
            </div>
          </div>

          {/* Embedded Google Map */}
          <div className="w-full h-64">
            <iframe
              title="TechBlend Location"
            //   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.156218704847!2d-122.41941548468134!3d37.77492927975857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064cb7a47a9%3A0x8acdfed1dcdafcc7!2sTechBlend%20Headquarters!5e0!3m2!1sen!2sus!4v1632170373834!5m2!1sen!2sus"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2706165.719690682!2d17.0136452!3d47.1816682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1698978587398"
            width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-500 text-sm mt-10">
          <p>© 2024 TechBlend. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
