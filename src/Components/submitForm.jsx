import React from "react";

const ContactForm = () => {
  return (
    <div className="mx-auto px-6 md:px-16 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <div className="hidden lg:block">
          <h3 className="text-gray-600 text-lg font-medium">Request a Call</h3>
        </div>

        <div className="lg:col-span-2">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            To learn more about our residential complex, please provide your contact details
          </h2>
          <p className="text-gray-600 mb-8">
            Fill out the form and we will call you back within 24 hours
          </p>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border-b border-gray-300 focus:outline-none focus:border-black py-2"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border-b border-gray-300 focus:outline-none focus:border-black py-2"
              />
            </div>

            <div className="flex items-center space-x-2">
              <input
                id="privacy"
                type="checkbox"
                className="h-4 w-4 border-gray-300 rounded"
              />
              <label htmlFor="privacy" className="text-gray-600 text-sm">
                I agree to the processing of my personal data
              </label>
            </div>

            <button
              type="submit"
              className="px-6 py-2 border border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white transition rounded-md"
            >
              Request a Call
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
