import React from 'react';
import Slider from '../../Sections/PublicSections/Slider';
import Testimonial from '../../Sections/PublicSections/Testimonial';
import BrandSmoothSlider from '../../Sections/BrandSmoothSlider';
import ProductCard from '../../Sections/PublicSections/ProductCard';
import BusinessFeatures from '../../Sections/PublicSections/BusinessFeatures';
import ServiceCard from '../../Sections/PublicSections/ServiceCard';
import BeforeAfter from '../../Sections/PublicSections/BeforeAfter';

  const itemlist = [
    {
      title: "Parthrajsinh Jethwa",
      description: "This is the description for Card 1. This is the description for Card 1. This is the description for Card 1. This is the description for Card 1.",
      designation: "Product Soft Demonstrator",
      image: "https://source.unsplash.com/random",
    },
    {
      title: "Parthrajsinh Jethwa",
      description: "This is the description for Card 2.",
      designation: "Product Soft Demonstrator",
      image: "https://source.unsplash.com/random",
    },
    {
      title: "Parthrajsinh Jethwa",
      description: "This is the description for Card 3.",
      designation: "Product Soft Demonstrator",
      image: "https://source.unsplash.com/random",
    },
    {
      title: "Parthrajsinh Jethwa",
      description: "This is the description for Card 4.",
      designation: "Product Soft Demonstrator",
      image: "https://source.unsplash.com/random",
    },
  ];

export default function HomePage({website}) {
  console.log('Website ID:', website.id);

  return (
    <>
      <Slider />
      <BrandSmoothSlider />
      <BeforeAfter
      title="Before | After"
      subtitle="Quality is our Passion"
      items={itemlist}
      />
      <BusinessFeatures />
      <ProductCard />
      <ServiceCard />
      <Testimonial
        title="Testimonial"
        subtitle="What Our Clients' Say About Us!"
        items={itemlist}
      />
    </>
  )
}
