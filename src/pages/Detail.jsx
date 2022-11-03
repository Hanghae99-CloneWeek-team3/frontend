
// package & library & hook
import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useParams } from 'react-router-dom';

// components
import LoginedHeader from '../components/header/loginedheader/LoginedHeader';
import Header from '../components/header/header/Header';
import DetailSection from '../components/detailsection/DetailSection';

export default function Detail() {

  const { postId } = useParams();
  const [cookie, setCookie, removeCookie] = useCookies();
  const [isOpen, setIsOpen] = useState(false);
  const isLogined = cookie['access_token'] && cookie['refresh_token'];

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  useEffect(() => {

  }, []);

  return <>
    {isLogined ? <LoginedHeader /> : <Header />}
    <DetailSection openModal={openModal} postId={postId} />
    {/* need to : Add pinlist */}
  </>
}