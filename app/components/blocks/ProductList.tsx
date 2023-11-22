import React from 'react'

const ProductList = ({ pageTitle, products }) => {
  return (
    <div className="w-2/3">
      <h1 className="text-3xl font-bold mb-4 from-green-400 to-green-600 bg-gradient-to-l bg-clip-text text-transparent">{pageTitle}</h1>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border border-gray-300 rounded-md overflow-hidden">
            <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <p className="text-sm text-gray-500">{product.description}</p>
              {/* Additional product details or buttons can be added here */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList
