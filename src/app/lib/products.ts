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

export async function getAllProducts(): Promise<Product[]> {
  try {
    const res = await fetch('https://fakestoreapi.com/products');
    if (!res.ok) throw new Error('Erro na requisição');
    const data = await res.json();
    return data as Product[];
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    return [];
  }
}
