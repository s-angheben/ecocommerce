import React from 'react'
import Navbar2 from '../components/blocks/NavBar2'
import ProductList from '../components/blocks/ProductList'

const products = [
  { id: 2, name: 'Hat', imageUrl: '/images/product/hat.jpg', description: 'Description 2' },
  { id: 5, name: 'Shoes', imageUrl: '/images/product/shoe.jpg', description: 'Description 5' },
  { id: 6, name: 'T-shirt', imageUrl: '/images/product/tshirt.jpg', description: 'Description 6' },
  // Add more products as needed
];



const ProductPage = () => {

    return (
    <main>
    <Navbar2 />

    <div className="flex justify-center mt-8">
            <ProductList pageTitle="Shop 1" products={products} />
    </div>

    </main>
    )

}

export default ProductPage
