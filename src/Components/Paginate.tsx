import React from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch } from 'react-redux';
import { setPage } from '../store/products';

const Paginate: React.FC = () => {
  const dispatch = useDispatch();

  const onPageChange = (event: { selected: number }) => {
    dispatch(setPage(event.selected));
  };

  return (
    <ReactPaginate
  pageCount={9}
  onPageChange={onPageChange}
  previousLabel='<<'
  nextLabel='>>'
  containerClassName="paginate"
  pageClassName="paginate_page"
  pageLinkClassName="paginate_link"
  previousClassName="paginate_prev"
  previousLinkClassName="paginate_link"
  nextClassName="paginate_next"
  nextLinkClassName="paginate_link"
  activeClassName="paginate_active"
/>

  );
};

export default Paginate;

