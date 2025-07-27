"use client";
import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { getAllProducts } from '../lib/products';

const ITEMS_PER_PAGE = 6;

export default function ProductsSection() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

useEffect(() => {
  async function fetchProducts() {
    const data = await getAllProducts();

    const filtered = data.filter((product: any) => product.category !== 'electronics');

    setProducts(filtered);
  }

  fetchProducts();
}, []);

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = products.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <section className="max-w-[80%] mx-auto px-6 py-6">
      <h2 className="text-3xl font-extrabold text-left mb-10">
        Ofertas da Semana
      </h2>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {currentItems.map((product: any) => (
          <ProductCard
            key={product.id}
            {...product}
            onBuy={() => alert(`Comprou ${product.title}`)}
          />
        ))}
      </div>

      <div className="flex justify-center mt-10 gap-2">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-4 py-2 rounded cursor-pointer ${
              currentPage === index + 1
                ? 'bg-black text-white'
                : 'bg-gray-200 text-black'
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </section>
  );
}
