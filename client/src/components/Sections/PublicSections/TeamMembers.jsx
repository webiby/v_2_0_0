import React from 'react';
import TeamCardA from '../../UiParts/CommonUiParts/TeamCardA';
import TeamCardB from '../../UiParts/CommonUiParts/TeamCardB';
import TeamCardC from '../../UiParts/CommonUiParts/TeamCardC';
import TeamCardD from '../../UiParts/CommonUiParts/TeamCardD';

export default function TeamMembers() {
  return (
    <>
        <div className="py-12">
            <div className="max-w-screen-xl mx-auto px-4">
                <div className="text-center">
                    <div className="text-3xl font-semibold text-gray-900">Meet Our Team Members</div>
                    <p className="text-gray-600 text-lg">United We Grow</p>
                </div>
                {/* Team A */}
                <div className='lg:flex'>
                  <TeamCardA />
                </div>
                {/* Team B */}
                <div className='lg:flex lg:space-x-8'>
                  <TeamCardB />
                  <TeamCardB />
                </div>
                {/* Team C */}
                <div className='lg:flex justify-evenly lg:space-x-8 space-y-8 lg:space-y-0'>
                  <div className='justify-evenly md:flex lg:space-x-8 space-y-8 md:space-y-0'>
                    <TeamCardC />
                    <TeamCardC />
                  </div>
                  <div className='justify-evenly md:flex lg:space-x-8 space-y-8 md:space-y-0'>
                    <TeamCardC />
                    <TeamCardC />
                  </div>
                </div>
                {/* Team D */}
                <div className='row justify-center'>
                  <div className='col-auto'>
                    <TeamCardD />
                  </div>
                  <div className='col-auto'>
                    <TeamCardD />
                  </div>
                  <div className='col-auto'>
                    <TeamCardD />
                  </div>
                  <div className='col-auto'>
                    <TeamCardD />
                  </div>
                  <div className='col-auto'>
                    <TeamCardD />
                  </div>
                  <div className='col-auto'>
                    <TeamCardD />
                  </div>
                  <div className='col-auto'>
                    <TeamCardD />
                  </div>
                  <div className='col-auto'>
                    <TeamCardD />
                  </div>
                  <div className='col-auto'>
                    <TeamCardD />
                  </div>
                  <div className='col-auto'>
                    <TeamCardD />
                  </div>
                  <div className='col-auto'>
                    <TeamCardD />
                  </div>
                </div>
            </div>
        </div>
    </>
  )
}
