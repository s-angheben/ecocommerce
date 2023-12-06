import Link from 'next/link'

const products = [
  { id: 1, name: 'Shop 1', imageUrl: '/images/shop.jpg', description: 'Description 1' },
  { id: 2, name: 'Shop 2', imageUrl: '/images/shop.jpg', description: 'Description 2' },
  { id: 3, name: 'Shop 3', imageUrl: '/images/shop.jpg', description: 'Description 3' },
  { id: 4, name: 'Shop 4', imageUrl: '/images/shop.jpg', description: 'Description 4' },
  { id: 5, name: 'Shop 5', imageUrl: '/images/shop.jpg', description: 'Description 5' },
  { id: 6, name: 'Shop 6', imageUrl: '/images/shop.jpg', description: 'Description 6' },
];

const ShopList =  () => {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen mt-8"> {/* Added mt-8 for top margin */}
      <div className="w-2/3 flex justify-start mb-6">
        <h1 className="text-3xl font-bold from-green-400 to-green-600 bg-gradient-to-l bg-clip-text text-transparent">Local Shops</h1>
      </div>
      <div className="grid grid-cols-3 gap-4 w-2/3">
        {products.map((product) => (
          <div key={product.id} className="border border-gray-300 rounded-md overflow-hidden">
            <Link href="/shop1">
                    <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover" />
            </Link>
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

export default ShopList;
