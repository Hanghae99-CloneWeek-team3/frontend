import React from 'react';
import Header from '../components/header/Header';
import PinList from '../components/pin/PinList';

const TotalList = () => {
  const [cookie] = useCookies();
  return (
    <>
      <Header />
      <PinList />
    </>
  );
};

export default TotalList;
