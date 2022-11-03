import React from 'react';
import Header from '../components/header/header/Header';
import PinWrite from '../components/pin/PinWrite';
import { useCookies } from 'react-cookie';
import LoginedHeader from '../components/header/loginedheader/LoginedHeader';

const Write = () => {
  const [ cookie] = useCookies();

  const isLogined= cookie['refresh_token'] && cookie['access_token'];

  return (
    <>
      {isLogined ? <LoginedHeader /> :<Header />}
      <PinWrite />
    </>
  );
};

export default Write;
