import React, { useEffect, useState } from 'react';
import { fetchProductById } from '../api';
import { useParams } from 'react-router-dom';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
}

const MoreProducts: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const getProduct = async () => {
      const data = await fetchProductById(id!);
      setProduct(data);
    };

    getProduct();
  }, [id]);

  if (!product) return <p className="text-center text-gray-500">Loading...</p>;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg max-w-sm p-6">
        <img
          className="rounded-t-lg w-full h-64 object-cover mb-4"
          src={product.images[0]}
          alt={product.title}
        />
        <h1 className="text-xl font-bold mb-2">{product.title}</h1>
        <p className="text-gray-700 mb-4">{product.description}</p>
        <p className="text-lg font-semibold text-gray-800">Price: ${product.price}</p>
      </div>
    </div>
  );
};

export default MoreProducts;
