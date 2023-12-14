import React, { useState } from 'react';
import useHeroImage from '../../../hooks/useHeroImage';
import { LiaPrayingHandsSolid } from 'react-icons/lia';
import { MdSyncProblem } from 'react-icons/md';
import { FaHandHoldingUsd } from 'react-icons/fa';
import { TbBulbFilled } from 'react-icons/tb';
import ContactTabContent from '../../UiParts/CommonUiParts/ContactTabContent';
import GoogleMap from '../../UiParts/CommonUiParts/GoogleMap';
import ContactDetails from '../../UiParts/CommonUiParts/ContactDetails';

export default function ContactPages() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };
  // Define an array of tab data
  const tabData = [
    {
      icon: LiaPrayingHandsSolid,
      name: 'Request',
      color: 'purple',
    },
    {
      icon: MdSyncProblem,
      name: 'Complain',
      color: 'red',
    },
    {
      icon: FaHandHoldingUsd,
      name: 'Proposal',
      color: 'yellow',
    },
    {
      icon: TbBulbFilled,
      name: 'Suggestion',
      color: 'slate',
    },
  ];


  return (
    <>
      {useHeroImage('Contact Our Business', 'Welcome to our website!', 'https://source.unsplash.com/random')}

      <div className="items-center justify-center p-4 md:m-4">
        <div className="row">
          {tabData.map((tab, index) => (
            <div
              key={index}
              className={`cursor-pointer shadow-lg col m-4 py-2 text-lg font-medium rounded-xl hover:opacity-60 ${
                activeTab === index + 1 ? `scale-125 bg-${tab.color}-500 text-white` : `bg-${tab.color}-200 text-${tab.color}-500`
              }`}
              onClick={() => handleTabClick(index + 1)}
            >
              <div className='flex justify-center gap-1 items-center'>
                {React.createElement(tab.icon, { className: 'text-3xl' })}
                <b>{tab.name}</b>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6">
          {tabData.map((tab, index) => (
            activeTab === index + 1 && (
              <ContactTabContent
                content={{
                  title: `Custom Tab Title - ${tab.name}`,
                  description: `Custom Tab Description - ${tab.name}`,
                }}
                imageUrl="https://source.unsplash.com/random"
                formPlaceholder={{
                  name: `Enter your name for ${tab.name}`,
                  email: `Enter your email address for ${tab.name}`,
                  message: `Enter your message for ${tab.name}`,
                }}
                formButtonLabel={`Submit ${tab.name}`}
                bgColor={tab.color}
              />
            )
          ))}
        </div>
      </div>
      <div className='my-8 px-4'>
        <div className='row rounded-xl bg-emerald-100 px-4 items-center'>
          <div className='col-md-6 md:my-0 my-4'>
            <ContactDetails />
          </div>
          <div className='col-md-6 md:my-0 my-4 md:order-first'>
            <GoogleMap />
          </div>
        </div>
      </div>
    </>
  );
}
