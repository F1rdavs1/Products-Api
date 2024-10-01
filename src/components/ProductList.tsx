import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../api';
import { Link } from 'react-router-dom';
import { FaBookmark } from 'react-icons/fa';

interface Product {
  id: number;
  title: string;
  price: number;
  images: string[];
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };

    getProducts();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Products</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <li key={product.id} className="border rounded-lg shadow-lg hover:shadow-2xl transition-shadow p-4 bg-white">
            <Link to={`/products/${product.id}`} className="block text-center">
              <img
                src={product.images[0]}
                alt={product.title}
                className="w-full h-48 object-contain mb-4 rounded"
              />
              <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
              <p className="text-gray-700 mb-4">Price: <span className="text-green-500">${product.price}</span></p>
            </Link>
            <div className="flex justify-center">
              <button className="text-blue-600 hover:text-blue-800 transition-colors">
                <FaBookmark className="w-6 h-6" />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
