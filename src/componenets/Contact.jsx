import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-green-900 to-black"
    >
      <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-12">
        {/* Left Section */}
        <div className="lg:w-1/2 flex flex-col justify-center">
          <h2 className="text-4xl font-zentry text-white mb-6">
            Let’s Connect
          </h2>
          <p className="text-lg text-gray-300 mb-4">
            Have an event idea? Want to collaborate? Fill out the form and let’s
            make something amazing together!
          </p>
          <p className="text-lg text-gray-300">
            You can also reach us at{" "}
            <a
              href="mailto:contact@techtitans.com"
              className="text-green-400 underline"
            >
              contact@techtitans.com
            </a>
          </p>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2">
          <form method="POST" className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white"
                required
              />
            </div>
            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone Number (Optional)"
                className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white"
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-green-700 text-white py-3 rounded-lg hover:bg-green-600 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
