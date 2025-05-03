'use client';

export default function ContactSection() {
  return (
    <section className="bg-white dark:bg-neutral-900 py-20 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
        {/* Info */}
        <div className="space-y-6 col-span-1">
          <h2 className="text-4xl font-bold text-neutral-900 dark:text-white">
            Get In<br />Touch <span className="text-emerald-500">With Us!</span>
          </h2>
          <div className="space-y-2 text-neutral-700 dark:text-neutral-300">
            <p><strong>Phone</strong><br />+91 8427534763<br />+91 8427534763</p>
            <p><strong>Email</strong><br />contactus@ranchirides.in<br />ranchiridesrentalservice@gmail.com</p>
            <p><strong>Address</strong><br />
              Bahu Bazaar, Chhat Talab Dhumsa Toli,<br />
              Near Apna Mart, Ranchi, Jharkhand<br />
              834001
            </p>
          </div>
        </div>

        {/* Map */}
        <div className="col-span-1">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.155125812829!2d85.3450449!3d23.3535444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDIxJzEyLjgiTiA4NcKwMjAnNTEuNCJF!5e0!3m2!1sen!2sin!4v1681727384602!5m2!1sen!2sin"
    width="100%"
    height="500"
    style={{ border: 0 }}
    allowFullScreen={true}
    loading="lazy"
    className="rounded-2xl shadow-md"
  ></iframe>
</div>


        {/* Contact Form */}
        <div className="bg-neutral-900 text-white p-8 rounded-3xl shadow-lg space-y-6 col-span-1">
          <h3 className="text-2xl font-semibold">Send a message</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 rounded-lg bg-white text-black placeholder-neutral-500 focus:outline-emerald-400"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded-lg bg-white text-black placeholder-neutral-500 focus:outline-emerald-400"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full p-3 rounded-lg bg-white text-black placeholder-neutral-500 focus:outline-emerald-400"
            ></textarea>
            <button type="submit" className="w-full bg-emerald-400 hover:bg-emerald-500 text-black font-semibold py-3 rounded-full transition">
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
