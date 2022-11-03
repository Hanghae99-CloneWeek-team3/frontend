// Library& Package -----------------------------------------
import styled from 'styled-components';

// Components -----------------------------------------------
import Header from "../components/header/Header"
import DefaultButton from "../components/defaultbutton/DefaultButton";
import ProfileImage from "../components/profileimage/ProfileImage"

// need to : API connect
export default function Profile(){

  const mock = {
    profileImage: 'https://i.pinimg.com/564x/2e/7b/9f/2e7b9ff81c0af98a9769b85bd6035575.jpg',
    userName: 'Minjoo Kim',
    uniqueName: 'roses16dev',
  }


  const temp = {
    userId: 'test16@naver.com',
    password: 'qwer1234!'
  }

  return <>
  <Header />
  <DivProfileInfoSection>
    <ProfileImage size='120' url={mock.profileImage} />
    <h1 style={{fontWeight:600}}>{mock.userName}</h1>
    <p className='uniquename'>@{mock.uniqueName}</p>
    <p>- introduce -</p>
    <p>팔로잉 0명</p>
    <div className='buttonwrap'>
      <DefaultButton>공유</DefaultButton>
      <DefaultButton>프로필 수정</DefaultButton>
    </div>
  </DivProfileInfoSection>
  <Hr/>
  </>
}

// Styled Components -----------------------------------------
const Hr = styled.hr`
  border: 1px solid #ECECEC;
`

const DivProfileInfoSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px 0px;
  h1{
    margin-top: 20px;
  }
  p{
    color: rgb(17, 17, 17);
    margin: 5px 0;
  }

  .uniquename{
    font-size: 14px;
    color: rgb(118, 118, 118);
  }

  .buttonwrap{
    margin-top: 15px;
    display: flex;
    gap: 10px;
  }
`

const DivButton = styled.div`
  margin-top: 15px;
  height: 48px;
  background-color: rgb(239, 239, 239);
  color: rgb(17, 17, 17);
  font-family: segoe-ui;
  font-size: 16px;
  font-weight: 600;
  border-radius: 24px;
  padding: 12px 16px;
  border: none;

  &:hover{
    background-color: #E2E2E2;
  }
`