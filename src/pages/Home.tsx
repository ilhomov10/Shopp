import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../store";
import { setProducts, setSearchTerm } from "../store/products";
import { useProducts } from "../services/api";
import { Link } from "react-router-dom";
import Skeleton from "../Components/Skleton";
import Sort from "../Components/Sort";
import Qidiruv from "../Components/qidiruv";
import Paginate from "../Components/Paginate";

const Home: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { page, products, searchTerm, sort } = useSelector(
    (state: RootState) => state.products
  );

  const { data: pagedData, isLoading: loadingPaged } = useProducts({ page, limit: 12 });
  const { data: allData, isLoading: loadingAll } = useProducts({ search: searchTerm, limit: 10000 });

  useEffect(() => {
    const sourceData = searchTerm.trim() ? allData : pagedData;
    if (Array.isArray(sourceData)) {
      dispatch(setProducts(sourceData));
    }
  }, [searchTerm, pagedData, allData, dispatch]);

  const isLoading = searchTerm.trim() ? loadingAll : loadingPaged;

  const handleSearch = (val: string) => {
    dispatch(setSearchTerm(val));
  };

  const filtered = useMemo(() => {
    if (!searchTerm.trim()) return products;
    return products.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [products, searchTerm]);

  const sorted = useMemo(() => {
    const sortedList = [...filtered];
    switch (sort) {
      case "title":
        return sortedList.sort((a, b) => a.title.localeCompare(b.title));
      case "price":
        return sortedList.sort((a, b) => a.price - b.price);
      case "rating":
        return sortedList.sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
      default:
        return sortedList;
    }
  }, [filtered, sort]);

  return (
    <div className="recipt">
      <div className="container">
        <div className="top">
          <Sort />
          <Qidiruv search={searchTerm} setSearch={handleSearch} />
        </div>

        <div className="recipt_box">
          {isLoading ? (
            Array.from({ length: 8 }).map((_, i) => (
              <div className="recipt_card" key={i}>
                <Skeleton />
              </div>
            ))
          ) : sorted.length > 0 ? (
            sorted.map((item) => (
              <Link to={`/products/${item.id}`} className="recipt_card" key={item.id}>
                <div className="recipt_card_img_wrapper">
                  <img
                    src={item.images?.[0] || "https://via.placeholder.com/150"}
                    alt={item.title}
                  />
                  <span className="discount_badge">
                    -{item.discountPercentage ?? "N/A"}%
                  </span>
                </div>
                <div className="recipt_card_info">
                  <h3 className="recipt_card_title">
                     {item.title}
                  </h3>
                  <p className="recipt_card_price">
                    {item.price}$
                  </p>
                  <p className="recipt_card_price">
  <span className="rating-number">{item.rating ?? "N/A"}</span>
  &nbsp;
  {[1, 2, 3, 4, 5].map((i) => (
    <span
      key={i}
      className={`star ${item.rating >= i ? "filled" : ""}`}
    >
      ★
    </span>
  ))}
</p>


                </div>
              </Link>
            ))
          ) : (
            <p>Mahsulotlar topilmadi</p>
          )}
        </div>

        <Paginate />
      </div>
    </div>
  );
};

export default Home;



