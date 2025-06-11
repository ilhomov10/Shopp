import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
  id: number;
  title: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  images?: string[];
}

type SortType = "price" | "title" | "rating" | "";

interface ProductsState {
  products: Product[];
  page: number;
  sort: SortType;
  searchTerm: string;  // qo'shildi
}

const initialState: ProductsState = {
  products: [],
  page: 1,
  sort: "",
  searchTerm: "",  // boshlang'ich qiymat
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setSort: (state, action: PayloadAction<SortType>) => {
      state.sort = action.payload;
    },
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { setProducts, setPage, setSort, setSearchTerm } = productsSlice.actions;
export default productsSlice.reducer;