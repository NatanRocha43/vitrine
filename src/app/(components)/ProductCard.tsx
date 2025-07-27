'use client';

import React from 'react';

type ProductCardProps = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export default function ProductCard({
  title,
  price,
  description,
  category,
  image,
  rating,
}: ProductCardProps) {
  return (
    <div className="border rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 p-4 flex flex-col">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-contain mb-4"
      />

      <div className="flex flex-col flex-grow">
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-sm text-gray-500 mb-2 line-clamp-2">{description}</p>
        <p className="text-sm text-gray-400 mb-1 capitalize">{category}</p>
        <p className="text-yellow-500 text-sm mb-1">
          ⭐ {rating.rate} ({rating.count})
        </p>

        <div className="mt-auto">
          <p className="text-lg font-bold text-black mb-2">
            R$ {price.toFixed(2).replace('.', ',')}
          </p>
          <button
            className="w-full bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition cursor-pointer"
          >
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
}
