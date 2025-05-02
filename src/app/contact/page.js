'use client';

import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  Email as EmailIcon,
  LocationOn,
  Phone,
  AccessTime,
  Facebook,
  Instagram,
  Twitter,
} from '@mui/icons-material';

export default function ContactPage() {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then(() => {
        setStatus('Message sent successfully!');
        form.current.reset();
      })
      .catch(() => {
        setStatus('Failed to send message. Try again.');
      });
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 py-20 text-center text-white">
        <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
        <p className="text-lg">We’d love to hear from you. Let’s get in touch!</p>
      </div>

      {/* Form + Info Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-6 lg:p-16">
        {/* Contact Form */}
        <form ref={form} onSubmit={sendEmail} className="space-y-6 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Send us a message</h2>
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full border px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full border px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full border px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
          >
            Send Message
          </button>
          {status && <p className="text-sm text-green-600 mt-2">{status}</p>}
        </form>

        {/* Contact Info */}
        <div className="space-y-6 text-gray-700">
          <h2 className="text-2xl font-semibold mb-4">Our Contact Info</h2>
          <div className="flex items-center gap-4">
            <LocationOn className="text-blue-600" />
            <span>Amar chowk , harihar toli chutia ranchi , jharkhand</span>
          </div>
          <div className="flex items-center gap-4">
            <Phone className="text-green-600" />
            <a href="tel:+919693245941" className="hover:underline"> +91 97981 46740</a>
          </div>
          <div className="flex items-center gap-4">
            <EmailIcon className="text-red-600" />
            <a href="mailto:support@zuprides.in" className="hover:underline">support@zuprides.in</a>
          </div>
          <div className="flex items-center gap-4">
            <AccessTime className="text-yellow-600" />
            <span>Mon - Sat: 9:00 AM to 6:00 PM</span>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex gap-4 text-white">
              <a href="#" className="bg-blue-700 p-2 rounded hover:bg-blue-800">
                <Facebook />
              </a>
              <a href="#" className="bg-gradient-to-tr from-yellow-400 to-pink-600 p-2 rounded hover:scale-105 transition">
                <Instagram />
              </a>
              <a href="#" className="bg-sky-400 p-2 rounded hover:bg-sky-500">
                <Twitter />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="w-full h-64 sm:h-96">
        <iframe
          src="https://www.google.com/maps?q=Kanchan%20Stationery,%20Ranchi&output=embed"
          width="100%"
          height="100%"
          loading="lazy"
          style={{ border: 0 }}
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
