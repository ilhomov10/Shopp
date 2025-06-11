import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../Components/Nav';

const HomeLayout: FC = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};

export default HomeLayout;

