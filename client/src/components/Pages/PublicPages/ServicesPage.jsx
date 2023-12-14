import React from 'react';
import useHeroImage from '../../../hooks/useHeroImage';
import ServiceCard from '../../Sections/PublicSections/ServiceCard';

export default function ServicesPage() {
  return (
    <>
      {useHeroImage('All Services From Our Business', 'Welcome to our website!', 'https://source.unsplash.com/random')}
      <ServiceCard />
    </>
  )
}
