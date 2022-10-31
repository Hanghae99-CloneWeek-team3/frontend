import { DivHeaderSection, DivLeftBox, DivRightBox, DivSearchBox, DivTextBox, DivSearchInputBox, DivProfileBox, DivIconBox } from "./style"
import ProfileImage from "../profileimage/ProfileImage"
import DropDown from "../dropdown/DropDown"
import DefaultIcon from '../defaulticon/DefaultIcon'

export default function Header(){

  const writeMenu = [
    {  
      menu : [
      {
        title: '아이디어 핀 만들기',
        href: '#'
      },
      {
        title: '핀 만들기',
        href: '/write'
      }
    ]}
  ]

  const mainMenu = [
    {  
      category : '현재 로그인 계정',
      menu : [
      {
        title: <ProfileBox />,
        href: '/profile'
      }
    ]},
    {  
      category : '내 계정',
      menu : [
      {
        title: '계정 추가',
        href: '#'
      }, {
        title: 'Business 계정으로 전환',
        href: '#'
      }
    ]}, {  
      category : '옵션 더 보기',
      menu : [
      {
        title: '설정',
        href: '#'
      }, {
        title: '홈피드 조정',
        href: '#'
      }, {
        title: 'windows 앱 설치',
        href: '#'
      }, {
        title: '개인정보 보호권',
        href: '#'
      }, {
        title: '도움 받기',
        href: '#'
      }, {
        title: '약관 및 개인정보 보기',
        href: '#'
      }, {
        title: '로그아웃',
        href: '#'
      }
    ]}
  ]
  
  return <>
    <DivHeaderSection>
      <DivLeftBox>
        <DefaultIcon size='50' href='/'>
          <svg height="24" width="24" viewBox="0 0 24 24" aria-hidden="true" aria-label role="img">
            <path d="M0 12c0 5.123 3.211 9.497 7.73 11.218-.11-.937-.227-2.482.025-3.566.217-.932 1.401-5.938 1.401-5.938s-.357-.715-.357-1.774c0-1.66.962-2.9 2.161-2.9 1.02 0 1.512.765 1.512 1.682 0 1.025-.653 2.557-.99 3.978-.281 1.189.597 2.159 1.769 2.159 2.123 0 3.756-2.239 3.756-5.471 0-2.861-2.056-4.86-4.991-4.86-3.398 0-5.393 2.549-5.393 5.184 0 1.027.395 2.127.889 2.726a.36.36 0 0 1 .083.343c-.091.378-.293 1.189-.332 1.355-.053.218-.173.265-.4.159-1.492-.694-2.424-2.875-2.424-4.627 0-3.769 2.737-7.229 7.892-7.229 4.144 0 7.365 2.953 7.365 6.899 0 4.117-2.595 7.431-6.199 7.431-1.211 0-2.348-.63-2.738-1.373 0 0-.599 2.282-.744 2.84-.282 1.084-1.064 2.456-1.549 3.235C9.584 23.815 10.77 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12" fill="#CC0000"></path>
          </svg>
        </DefaultIcon>
        <a href='/totallist'>
          <DivTextBox size='60px'>
            <span>홈</span>
          </DivTextBox>
        </a>
        
          <DivTextBox size='100px'>
            <DropDown menus={writeMenu}>
              <span>만들기 </span>
              <svg height="12" width="12" viewBox="0 0 24 24" aria-hidden="true" aria-label role="img">
                <path d="M12 19.5.66 8.29c-.88-.86-.88-2.27 0-3.14.88-.87 2.3-.87 3.18 0L12 13.21l8.16-8.06c.88-.87 2.3-.87 3.18 0 .88.87.88 2.28 0 3.14L12 19.5z"></path>
              </svg>
            </DropDown> 
          </DivTextBox>
        
      </DivLeftBox>
      <DivSearchBox>
        <DivSearchInputBox>
          <svg height="16" width="16" viewBox="0 0 24 24" aria-label="검색 아이콘" role="img">
            <path d="M10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6m13.12 2.88-4.26-4.26A9.842 9.842 0 0 0 20 10c0-5.52-4.48-10-10-10S0 4.48 0 10s4.48 10 10 10c1.67 0 3.24-.41 4.62-1.14l4.26 4.26a3 3 0 0 0 4.24 0 3 3 0 0 0 0-4.24" fill='#767676'></path>
          </svg>
          <input type='text' placeholder='검색'/>
        </DivSearchInputBox>
      </DivSearchBox>
      <DivRightBox>
        <DefaultIcon size='50'>
          <svg height="24" width="24" viewBox="0 0 24 24" aria-hidden="true" aria-label role="img">
          <path d="M12 24c-1.66 0-3-1.34-3-3h6c0 1.66-1.34 3-3 3zm7-10.83c1.58 1.52 2.67 3.55 3 5.83H2c.33-2.28 1.42-4.31 3-5.83V7c0-3.87 3.13-7 7-7s7 3.13 7 7v6.17z" fill='#767676'></path>
          </svg>
      </DefaultIcon>
      <DefaultIcon size='50'>
        <svg height="24" width="24" viewBox="0 0 24 24" aria-hidden="true" aria-label role="img">
          <path d="M18 12.5a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 18 12.5m-6 0a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 12 12.5m-6 0a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 6 12.5M12 0C5.925 0 1 4.925 1 11c0 2.653.94 5.086 2.504 6.986L2 24l5.336-3.049A10.93 10.93 0 0 0 12 22c6.075 0 11-4.925 11-11S18.075 0 12 0" fill='#767676'></path>
        </svg>
      </DefaultIcon>
      {/* need to : connect login user profile */}
      <DefaultIcon size='50' href='/profile'>
        <ProfileImage size='25' url='https://i.pinimg.com/564x/2e/7b/9f/2e7b9ff81c0af98a9769b85bd6035575.jpg' />
      </DefaultIcon>
        <DivIconBox size='25'>
        <DropDown menus={mainMenu} alignRight={true}>
          <svg height="12" width="12" viewBox="0 0 24 24" aria-hidden="true" aria-label role="img">
            <path d="M12 19.5.66 8.29c-.88-.86-.88-2.27 0-3.14.88-.87 2.3-.87 3.18 0L12 13.21l8.16-8.06c.88-.87 2.3-.87 3.18 0 .88.87.88 2.28 0 3.14L12 19.5z" fill='#767676'></path>
          </svg>
        </DropDown>
        </DivIconBox>
      </DivRightBox>
    </DivHeaderSection>
    </>
}

const ProfileBox = () => {
  return <DivProfileBox style={{flexDirection: 'row'}}>
    <ProfileImage size='60' url='https://i.pinimg.com/564x/2e/7b/9f/2e7b9ff81c0af98a9769b85bd6035575.jpg' />
    <div className='infoBox'>
      Minjoo Kim
      <p style={{fontSize:14, fontWeight:400}}>개인</p>
      <p style={{fontSize:14, fontWeight:400}}>roses.16.dev@gmail.com</p>
    </div>
    <div>
      <svg height="12" width="12" viewBox="0 0 24 24" aria-label="Selected item" role="img">
      <path d="M9.17 21.75.73 12.79c-.97-1.04-.97-2.71 0-3.75a2.403 2.403 0 0 1 3.53 0l4.91 5.22L19.74 3.03c.98-1.04 2.55-1.04 3.53 0 .97 1.03.97 2.71 0 3.74L9.17 21.75z"></path>
      </svg>
    </div>
  </DivProfileBox>
}