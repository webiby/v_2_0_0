import React, { useState } from 'react';
import useHeroImage from '../../../hooks/useHeroImage';
import { IoIosPeople } from 'react-icons/io';
import { IoTelescope, IoDiamondSharp } from 'react-icons/io5';
import { BsRocketFill } from 'react-icons/bs';
import TeamMembers from '../../Sections/PublicSections/TeamMembers';
import VisionContent from '../../Sections/PublicSections/VisionContent';
import MissionContent from '../../Sections/PublicSections/MissionContent';
import ValuesContent from '../../Sections/PublicSections/ValuesContent';

export default function AboutPages() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };
  // Define an array of tab data
  const tabData = [
    {
      icon: IoTelescope,
      name: 'Vision',
      color: 'purple',
    },
    {
      icon: BsRocketFill,
      name: 'Mission',
      color: 'red',
    },
    {
      icon: IoDiamondSharp,
      name: 'Values',
      color: 'yellow',
    },
    {
      icon: IoIosPeople,
      name: 'Team Members',
      color: 'slate',
    },
  ];


  return (
    <>
      {useHeroImage('About Our Business', 'Welcome to our website!', 'https://source.unsplash.com/random')}

      <div className="items-center justify-center p-4 md:m-4 mx-4">
        <div className="row">
          {tabData.map((tab, index) => (
            <div
              key={index}
              className={`shadow-lg col m-4 py-2 text-lg font-medium rounded-xl hover:opacity-60 ${
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
          {activeTab === 1 && <VisionContent />
          }
          {activeTab === 2 && <MissionContent />
          }
          {activeTab === 3 && <ValuesContent />
          }
          {activeTab === 4 && <TeamMembers />
          }
        </div>
      </div>
      {/* Out Of Tab Content */}
    </>
  );
}
