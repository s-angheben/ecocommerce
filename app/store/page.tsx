import React from 'react'
import Navbar2 from '../components/blocks/NavBar2'
import UnderlineLink from "../components/blocks/underline-link"
import Slider from "../components/blocks/Slider.tsx"
import ShopList from "../components/blocks/ShopList"


const StorePage = () => {
    return (

    <main>
    <Navbar2 />

    <div className="flex flex-col items-center justify-start ">
      <h1 className="text-3xl font-bold mt-8 mb-6 from-green-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">
      Set your location
      </h1>
      <div className="w-1/3 flex items-center border-2 rounded-md px-4 py-2 mb-4">
        <img
          src="https://fonts.gstatic.com/s/i/materialicons/location_on/v10/24px.svg" // Replace with your Google Material Icons URL
          alt="Location Icon"
          className="h-6 w-6 mr-2 text-blue-500" // Set the color here
        />
        <input
          type="text"
          placeholder="Trento Povo 1..."
          className="w-full border-2 rounded-md px-4 py-2 outline-none focus:border-blue-500"
        />
      </div>
    <Slider />
    </div>

    <UnderlineLink href="/products">Explore all local products</UnderlineLink>

    <ShopList />


    </main>
    )
}

export default StorePage
