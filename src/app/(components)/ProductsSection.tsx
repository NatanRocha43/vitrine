"use client";
import React, { useState } from 'react';
import ProductCard from './ProductCard';

export default function ProductsSection() {
  const mockProduct = {
    id: 4,
    title: 'Mens Casual Slim Fit',
    price: 15.99,
    description:
      'The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.',
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
    rating: {
      rate: 2.1,
      count: 430,
    },
  };

  const products = Array.from({ length: 20 }, (_, index) => ({
    ...mockProduct,
    id: index + 1,
    title: `${mockProduct.title} ${index + 1}`,
  }));

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = products.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section className="max-w-[80%] mx-auto px-6 py-6">
      <h2 className="text-3xl font-extrabold text-left mb-10">
        Ofertas da Semana
      </h2>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {currentProducts.map((product) => (
          <ProductCard
            key={product.id}
            {...product}
          />
        ))}
      </div>

      <div className="flex justify-center items-center gap-4 mt-10">
        <button
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
          onClick={() => setCurrentPage((prev) => prev - 1)}
          disabled={currentPage === 1}
        >
          Anterior
        </button>
        <span className="font-semibold">
          Página {currentPage} de {totalPages}
        </span>
        <button
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
          onClick={() => setCurrentPage((prev) => prev + 1)}
          disabled={currentPage === totalPages}
        >
          Próxima
        </button>
      </div>
    </section>
  );
}
