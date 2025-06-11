import { useQuery, UseQueryResult } from '@tanstack/react-query';
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://dummyjson.com/',
});

interface Product {
  id: number;
  title: string;
  price: number;
  images: string[];
  discountPercentage: number;
  rating: number;
  description: string;
  category: {
    name: string;
  };
}

interface UseProductsOptions {
  page?: number;
  limit?: number;
  search?: string;
}

export const useProducts = ({
  page = 1,
  limit = 12,
  search = '',
}: UseProductsOptions): UseQueryResult<Product[], Error> => {
  const skip = (page - 1) * limit;

  return useQuery<Product[], Error>({
    queryKey: ['products', page, search],
    queryFn: async () => {
      const url = search.trim()
        ? `products/search?q=${encodeURIComponent(search)}&limit=10000`
        : `products?limit=${limit}&skip=${skip}`;

      const res = await api.get(url);
      return res.data.products;
    },
  });
};

// Mahsulot ID bo‘yicha olish
export const useProductById = (
  id: string | number
): UseQueryResult<Product, Error> => {
  return useQuery<Product, Error>({
    queryKey: ['product', id],
    queryFn: async () => {
      const res = await api.get<Product>(`products/${id}`);
      return res.data;
    },
    enabled: !!id,
  });
};


