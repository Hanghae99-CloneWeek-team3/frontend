// library & package & hook
import React from 'react';
import { useEffect, useState } from 'react';
import { throttle } from 'lodash';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { useDispatch, useSelector } from 'react-redux';

// actions
import { __getPin } from '../../redux/module/PinSlice';

// components
import Comments from '../comments/Comments';
import DefaultButton from '../defaultbutton/DefaultButton';
import DefaultIcon from '../defaulticon/DefaultIcon';
import DropDown from '../dropdown/DropDown';
import ProfileImage from '../profileimage/ProfileImage';
import Loading from '../loading/Loading';

import Modal from '../defaultmodal/Modal'
import ModalPortal from '../defaultmodal/portal'

import PinEdit from '../pinedit/PinEdit';

// style
import { DivSection, DivDetailBox, DivLeftBox, DivRightBox, DivImageBox, DivInfoBox, DivIconBox, DivHeaderBox } from './style';
import Profile from '../../pages/Profile';

export default function DetailSection({ openModal, postId }) {
  // variables
  const SECTION_WIDE_SIZE = 1020;
  const IMAGE_WIDE_SIZE = 508;
  const THROTTLE_WAIT = 200;

  const [modalOpen, setModalOpen] = useState(false);
  const [cookie, setCookie, removeCookie] = useCookies();
  const navigator = useNavigate();
  const dispatch = useDispatch();

  const { isLoading, error, pin } = useSelector((state) => state.PinSlice);
  const [isWide, setIsWide] = useState(window.innerWidth > SECTION_WIDE_SIZE);
  const image = new Image();
  image.src = pin.filePath;
  const isWideImage = image.width >= IMAGE_WIDE_SIZE;
  const isLongImage = image.width < image.height;
  const isLogined = cookie['access_token'] && cookie['refresh_token'];
  // const isLogined = true;
  const loginedMenus = [
    {
      menu: [
        {
          title: '핀 수정',
          href: '#',
          onClick: openEditHandler
        },
        {
          title: '이미지 다운로드',
          href: '#'
        },
        {
          title: '핀 신고',
          href: '#'
        },
        {
          title: '핀 임베드 코드 가져오기',
          href: '#'
        }
      ]
    }
  ]

  const menus = [
    {
      menu: [
        {
          title: '이미지 다운로드',
          href: '#'
        },
        {
          title: '핀 숨기기',
          href: '#'
        },
        {
          title: '핀 신고',
          href: '#'
        },
        {
          title: '핀 임베드 코드 가져오기',
          href: '#'
        }
      ]
    }
  ]

  function openEditHandler(event){
    setModalOpen(true);
  }

  const closeEditHandler = (event) => {
    setModalOpen(false);

  }


  const sectionClickHandler = (event) => {
    event.stopPropagation()
    navigator('/totallist');

    // 본인 게시물일 경우 profile
  }

  const checkSizeHandler = throttle(() => {
    if (window.innerWidth < SECTION_WIDE_SIZE) setIsWide(false);
    if (window.innerWidth >= SECTION_WIDE_SIZE) setIsWide(true);
  }, THROTTLE_WAIT)

  useEffect(() => {
    window.addEventListener('resize', checkSizeHandler, false);
  }, [])

  useEffect(() => {
    dispatch(__getPin(postId));
  }, [dispatch])


  if (isLoading) <Loading />

  return <DivSection onClick={sectionClickHandler}>
    <DivDetailBox isWide={isWide} onClick={(event) => { event.stopPropagation() }}>
      <DivLeftBox>
        <DivImageBox isWide={isWide} isWideImage={isWideImage} isLongImage={isLongImage}>
          <img src={image.src} />
        </DivImageBox>
      </DivLeftBox>
      <DivRightBox>
        <DivInfoBox>
          <div className='headerbox'>
            <div>
              <DivIconBox size='48'>
                <DropDown size='210px' menus={loginedMenus}>
                  <svg height="20" width="20" viewBox="0 0 24 24" aria-hidden="true" aria-label role="img">
                    <path d="M12 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3M3 9c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm18 0c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z"></path>
                  </svg>
                </DropDown>
              </DivIconBox>
              <DefaultIcon size='48'>
                <svg height="20" width="20" viewBox="0 0 24 24" aria-hidden="true" aria-label role="img">
                  <path d="M21 14c1.1 0 2 .9 2 2v6c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2v-6c0-1.1.9-2 2-2s2 .9 2 2v4h14v-4c0-1.1.9-2 2-2zM8.82 8.84c-.78.78-2.05.79-2.83 0-.78-.78-.79-2.04-.01-2.82L11.99 0l6.02 6.01c.78.78.79 2.05.01 2.83-.78.78-2.05.79-2.83 0l-1.2-1.19v6.18a2 2 0 1 1-4 0V7.66L8.82 8.84z"></path>
                </svg>
              </DefaultIcon>
              <DefaultIcon size='48'>
                <svg height="20" width="20" viewBox="0 0 24 24" aria-hidden="true" aria-label role="img">
                  <path d="M10.52 3.11a2 2 0 013.59 0l2.06 4.17c.02.06.08.1.15.11l4.6.67a2 2 0 011.1 3.41l-3.32 3.25a.2.2 0 00-.06.17l.78 4.58a2 2 0 01-2.9 2.11l-4.11-2.16a.2.2 0 00-.19 0l-4.11 2.16a2 2 0 01-2.9-2.1l.78-4.59a.2.2 0 00-.06-.17l-3.32-3.25a2 2 0 011.1-3.41l4.6-.67a.2.2 0 00.15-.1zm3.9 5.15l-1.75-3.53a.4.4 0 00-.71 0L10.2 8.26a2 2 0 01-1.5 1.1l-3.9.56a.4.4 0 00-.23.69l2.83 2.75a2 2 0 01.57 1.77L7.31 19a.4.4 0 00.58.42l3.5-1.83a2 2 0 011.86 0l3.48 1.83a.4.4 0 00.59-.42l-.67-3.88a2 2 0 01.57-1.77l2.83-2.75a.4.4 0 00-.22-.69l-3.9-.56a2 2 0 01-1.51-1.1z"></path>
                </svg>
              </DefaultIcon>
            </div>
            <div>
              <DefaultButton type='important'>저장</DefaultButton>
            </div>
          </div>

          <div className='writerbox'>
            업로드한 사람: <span>{pin.userName}</span>
          </div>

          <div className='titlebox'>
            {pin.title}
          </div>
          <div className='contentbox'>
            {pin.content}
          </div>
          <div className='profilebox'>
            <div>
              <ProfileImage size='48' url='https://i.pinimg.com/564x/61/d4/e9/61d4e9e3c3822777ea96f0c5cceb9d57.jpg' />
            </div>
            <div>
              <p className='username'>{pin.userName}</p>
              <p>팔로워 0명</p>
            </div>
          </div>
        </DivInfoBox>
        {isLogined ? <Comments postId={postId} /> : ''}
      </DivRightBox>
    </DivDetailBox>

    <ModalPortal>
      {modalOpen && <Modal onClose={closeEditHandler} content={<PinEdit closeModal={closeEditHandler} />} />}
    </ModalPortal>

  </DivSection>
}