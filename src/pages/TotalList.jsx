import React from 'react';
import { useEffect } from 'react';
import PinList from '../components/pin/PinList';
import { __getPins } from '../redux/module/PinSlice';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/header/header/Header';
import LoginForm from '../components/login/LoginForm';
import { useCookies } from 'react-cookie';


const TotalList = () => {

  const dispatch = useDispatch();
  const {pins} = useSelector(state => state.PinSlice)

  const [ cookie ] = useCookies();
  const isLogined = cookie['access_token'] && cookie['refresh_token'];

  useEffect(() => {
    dispatch(__getPins())
  }, [])   
  
  return (
    <>
      {isLogined ? <LoginForm /> : <Header />}
      <PinList pins={pins}/>
    </>
  );
};

export default TotalList;
