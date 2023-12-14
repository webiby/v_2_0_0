import React from 'react'
import useHeroImage from '../../../hooks/useHeroImage'
import ProductCard from '../../Sections/PublicSections/ProductCard'

export default function ProductsPage() {
  return (
    <>
      {useHeroImage('All Products From Our Business', 'Welcome to our website!', 'https://source.unsplash.com/random')}
      <ProductCard />
    </>
  )
}
