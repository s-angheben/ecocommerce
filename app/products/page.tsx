import React from 'react'
import Navbar2 from '../components/blocks/NavBar2'
import ProductList from '../components/blocks/ProductList'

const products = [
  { id: 1, name: 'Ball', imageUrl: '/images/product/ball.jpg', description: 'Description 1' },
  { id: 2, name: 'Hat', imageUrl: '/images/product/hat.jpg', description: 'Description 2' },
  { id: 3, name: 'Paper', imageUrl: '/images/product/paper.jpg', description: 'Description 3' },
  { id: 4, name: 'Scissor', imageUrl: '/images/product/scissor.jpg', description: 'Description 4' },
  { id: 5, name: 'Shoes', imageUrl: '/images/product/shoe.jpg', description: 'Description 5' },
  { id: 6, name: 'T-shirt', imageUrl: '/images/product/tshirt.jpg', description: 'Description 6' },
  // Add more products as needed
];



const ProductPage = () => {

    return (
    <main>
    <Navbar2 />

    <div className="flex justify-center mt-8">
            <ProductList pageTitle="All Local Products" products={products} />
    </div>

    </main>
    )

}

export default ProductPage
