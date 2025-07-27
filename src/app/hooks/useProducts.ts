import { useEffect, useMemo, useState } from 'react';
import { getAllProducts, Product } from '../lib/products';

export type FilterOption = '' | 'masculino' | 'feminino' | 'joias' | 'preco-maior' | 'preco-menor' | 'rating-maior';

const ITEMS_PER_PAGE = 6;

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState<FilterOption>('');

  useEffect(() => {
    async function fetchProducts() {
      const data = await getAllProducts();
      const filtered = data.filter((product) => product.category !== 'electronics');
      setProducts(filtered);
      setCurrentPage(1);
    }

    fetchProducts();
  }, []);

  const filteredProducts = useMemo(() => {
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
        break;
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

  return {
    currentItems,
    totalPages,
    currentPage,
    setCurrentPage,
    filter,
    setFilter,
  };
}
