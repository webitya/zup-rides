'use client';

export default function ContactSection() {
  return (
    <section className="bg-white dark:bg-black py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-10">
        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white leading-snug">
            Get In<br />
            Touch <span className="text-teal-500">With Us!</span>
          </h2>
          <div className="space-y-3 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
            <p>
              <strong className="text-black dark:text-white">Phone</strong><br />
              +91 97981 46740
            </p>
            <p>
              <strong className="text-black dark:text-white">Email</strong><br />
              support@zuprides.in<br />
              zuprides.in@gmail.com
            </p>
            <p>
              <strong className="text-black dark:text-white">Address</strong><br />
              Amar Chowk, Harihar Toli, Chutia, Ranchi, Jharkhand
            </p>
          </div>
        </div>

        {/* Embedded Map */}
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.1537790098977!2d85.34509127541982!3d23.353530379008957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e1a79ee0b42d%3A0xfb2091245f88b76!2sZupRides!5e0!3m2!1sen!2sin!4v1714812950407!5m2!1sen!2sin"
            width="100%"
            height="420"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            className="rounded-2xl shadow-lg"
          ></iframe>
        </div>

        {/* Contact Form */}
        <div className="bg-black text-white p-6 md:p-8 rounded-2xl shadow-lg space-y-5">
          <h3 className="text-xl font-semibold">Send a message</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-3 rounded-md bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-md bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full px-4 py-3 rounded-md bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 bg-teal-500 hover:bg-teal-600 text-white font-medium rounded-full transition"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
