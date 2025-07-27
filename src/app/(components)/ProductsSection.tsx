"use client";
import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { getAllProducts } from '../lib/products';
import ProductFilter, { FilterOption } from './ProductFilter';

const ITEMS_PER_PAGE = 6;

export default function ProductsSection() {
  const [products, setProducts] = useState<any[]>([]);
  const [filtered, setFiltered] = useState<any[]>([]);
  const [filter, setFilter] = useState<FilterOption>('');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function fetchProducts() {
      const data = await getAllProducts();
      const filteredData = data.filter((p: any) => p.category !== 'electronics');
      setProducts(filteredData);
      setFiltered(filteredData);
    }

    fetchProducts();
  }, []);

  useEffect(() => {
    let result = [...products];

    switch (filter) {
      case 'masculino':
        result = result.filter((p) => p.category === "men's clothing");
        break;
      case 'feminino':
        result = result.filter((p) => p.category === "women's clothing");
        break;
      case 'joias':
        result = result.filter((p) => p.category === "jewelery");
        break;
      case 'preco-maior':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'preco-menor':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'rating-maior':
        result.sort((a, b) => b.rating.rate - a.rating.rate);
        break;
    }

    setFiltered(result);
    setCurrentPage(1);
  }, [filter, products]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = filtered.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <section className="max-w-[80%] mx-auto px-6 py-6">
      <h2 className="text-3xl font-extrabold text-left mb-6">
        Ofertas da Semana
      </h2>

      <ProductFilter selected={filter} onChange={setFilter} />

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {currentItems.map((product) => (
          <ProductCard
            key={product.id}
            {...product}
          />
        ))}
      </div>

      <div className="flex justify-center mt-10 gap-2">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-4 py-2 rounded cursor-pointer ${currentPage === index + 1
              ? 'bg-black text-white'
              : 'bg-gray-200 text-black'
              }`}>
            {index + 1}
          </button>
        ))}
      </div>
    </section>
  );
}
