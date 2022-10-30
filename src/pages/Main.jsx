import React from 'react';
import LoginHeader from '../components/login/LoginHeader'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper';
import { Keyboard } from 'swiper';

import 'swiper/css';
import "swiper/css/mousewheel";
import "swiper/css/keyboard";

import "../shared/main.css"

const Main = () => {
  return (
    <div>
      <LoginHeader/>

      <Swiper className="mySwiper"
        direction={'vertical'} // 슬라이드의 방향을 수직으로 설정
        mousewheel // 마우스 휠 동작을 허용
        keyboard // 키보드 방향키에 의한 동작을 허용

        modules={[Keyboard, Mousewheel]} // 키보드 사용 모듈 import
        speed={1000} // 슬라이드 넘어가는 속도(ms)
        slidesPerView={1} // 뷰 당 한개의 슬라이드
        threshold={500000} // 터치 감도 조정, 숫자가 클수록 터치에 둔감
        resistance={true}

        breakpoints={720}

        //슬라이드 바뀔때
        onSlideChange={() => console.log('slide change')}
        //슬라이드 인덱스 번호
        onActiveIndexChange={(swiper) => {
          console.log(swiper.activeIndex);
        }}
      >

      <SwiperSlide>
        <img src="https://velog.velcdn.com/images/mingki831/post/70622c1e-fd50-492e-a9da-2da314d86aae/image.png" alt=""/>
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://velog.velcdn.com/images/mingki831/post/69da211d-081e-48f1-a3d3-6edaa3627171/image.png" alt=""/>
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://velog.velcdn.com/images/mingki831/post/66f07ef5-35eb-4577-88f9-a0748c8ef326/image.png" alt=""/>
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://velog.velcdn.com/images/mingki831/post/b7f09093-6b82-4cb0-aa2f-2ff711454634/image.png" alt=""/>
      </SwiperSlide>

    </Swiper>
    </div>
  );
};

export default Main;