import React from 'react';
import Header from '../components/header/header/Header';
import LoginedHeader from '../components/header/loginedheader/LoginedHeader';
import { useCookies } from 'react-cookie';
import PinList from '../components/pin/PinList';

const TotalList = () => {
  const [cookie] = useCookies();
  const isLogined = cookie['refresh_token'] && cookie['access_token'];

  return (
    <>
      {isLogined ? <LoginedHeader /> : <Header />}
      {/* <PinList /> */}
    </>
  );
};

export default TotalList;
