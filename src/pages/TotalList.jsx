import React from 'react';
import Header from '../components/header/header/Header';
import LoginedHeader from '../components/header/loginedheader/LoginedHeader';
import { useCookies } from 'react-cookie';
import { useEffect } from 'react';
import PinList from '../components/pin/PinList';
import { __getPins } from '../redux/module/PinSlice';
import { useDispatch, useSelector } from 'react-redux';

const TotalList = () => {
  const dispatch = useDispatch();
  const { pins } = useSelector((state) => state.PinSlice);

  const [cookie] = useCookies();
  const isLogined = cookie['access_token'] && cookie['refresh_token'];

  useEffect(() => {
    dispatch(__getPins());
  }, []);

  return (
    <>
      {isLogined ? <LoginedHeader /> : <Header />}
      <PinList pins={pins} />
    </>
  );
};

export default TotalList;