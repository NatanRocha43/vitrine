export async function getAllProducts() {
  try {
    const res = await fetch('https://fakestoreapi.com/products');
    if (!res.ok) throw new Error('Erro');
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Erro na API:', error);
    return [];
  }
}
