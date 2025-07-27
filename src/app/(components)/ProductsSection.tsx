'use client';

import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import ProductFilter, { FilterOption } from './ProductFilter';

export type Product = {
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

const ITEMS_PER_PAGE = 6;

export default function ProductsSection() {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState<FilterOption>('');

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch('https://fakestoreapi.com/products');
      if (!res.ok) throw new Error('Erro ao buscar produtos');
      const data: Product[] = await res.json();

      const filtered = data.filter((product) => product.category !== 'electronics');

      setProducts(filtered);
      setCurrentPage(1);
    }

    fetchProducts();
  }, []);

  const filteredProducts = React.useMemo(() => {
    let filtered = [...products];

    switch (filter) {
      case 'masculino':
        filtered = filtered.filter((p) => /\bmen\b/.test(p.category.toLowerCase()));
        break;
      case 'feminino':
        filtered = filtered.filter((p) => /\bwomen\b/.test(p.category.toLowerCase()));
        break;
      case 'joias':
        filtered = filtered.filter((p) => p.category.toLowerCase() === 'jewelery');
        break
      case 'preco-maior':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'preco-menor':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'rating-maior':
        filtered.sort((a, b) => b.rating.rate - a.rating.rate);
        break;
      default:
        break;
    }
    return filtered;
  }, [products, filter]);

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <section className="max-w-[80%] mx-auto px-6 py-6">
      <h2 className="text-3xl font-extrabold text-left mb-6">Ofertas da Semana</h2>

      <ProductFilter selected={filter} onChange={(value) => {
        setFilter(value);
        setCurrentPage(1);
      }} />

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {currentItems.map((product) => (
          <ProductCard
            key={product.id}
            {...product} />
        ))}
      </div>

      <div className="flex justify-center mt-10 gap-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-4 py-2 rounded cursor-pointer ${currentPage === i + 1 ? 'bg-black text-white' : 'bg-gray-200 text-black'
              }`}>
            {i + 1}
          </button>
        ))}
      </div>
    </section>
  );
}
