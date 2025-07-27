'use client';

import React from 'react';
import ProductCard from './ProductCard';
import ProductFilter from './ProductFilter';
import { useProducts } from '../hooks/useProducts';

export default function ProductsSection() {
  const {
    currentItems,
    totalPages,
    currentPage,
    setCurrentPage,
    filter,
    setFilter,
  } = useProducts();

  return (
    <section className="max-w-[80%] mx-auto px-6 py-6">
      <h2 className="text-3xl font-extrabold text-left mb-6">Ofertas da Semana</h2>

      <ProductFilter
        selected={filter}
        onChange={(value) => {
          setFilter(value);
          setCurrentPage(1);
        }}/>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {currentItems.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>

      <div className="flex justify-center mt-10 gap-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-4 py-2 rounded cursor-pointer ${currentPage === i + 1 ? 'bg-black text-white' : 'bg-gray-200 text-black'}`}>
            {i + 1}
          </button>
        ))}
      </div>
    </section>
  );
}
