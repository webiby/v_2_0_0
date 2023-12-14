import React from 'react';

export default function ContactTabContent({ content, imageUrl, formPlaceholder, formButtonLabel, bgColor }) {
  return (
    <div className={`bg-${bgColor}-200 w-full rounded-xl py-4 px-2`}>
      <div className="text-center">
        <h2 className="text-xl md:text-3xl font-semibold text-gray-900 mb-2">{content.title}</h2>
        <p className="text-gray-600 text-md md:text-xl mb-2">{content.description}</p>
        <hr />
      </div>
      <div className="md:flex items-center text-left justify-center">
        <div className="md:order-last w-full md:w-1/2 md:mb-0 mb-4">
          <img className="object-cover rounded-xl w-full h-[70dvh]" src={imageUrl} alt="Image" />
        </div>
        <div className="w-full md:w-1/2 md:px-8">
          <div className="flex items-center justify-center">
            <div className="p-8 rounded-xl shadow-lg w-[100dvh]">
              <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-800 font-bold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full border border-gray-300 p-2 rounded-lg"
                    placeholder={formPlaceholder.name}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-800 font-bold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full border border-gray-300 p-2 rounded-lg"
                    placeholder={formPlaceholder.email}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-800 font-bold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    className="w-full border border-gray-300 p-2 rounded-lg"
                    placeholder={formPlaceholder.message}
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className={`w-full rounded-full bg-${bgColor}-500 px-6 py-2 text-xl font-medium uppercase text-white`}
                  >
                    {formButtonLabel}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
