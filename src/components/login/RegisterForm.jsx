import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import useInput from '../../hook/useInput'
import { addUserThunk } from '../../redux/module/LoginSlice'

import { IoClose } from "react-icons/io5";
import { IoWarning } from "react-icons/io5";


const RegisterForm = ({closeModal, setIsLoginModalOpen, setIsSignupModalOpen, isLoginModalOpen, isSignupModalOpen}) => {

    const dispatch = useDispatch()
    const [userId, onChangeUserIdHandler] = useInput('');
    const [password, onChangePasswordHandler] = useInput('');
    const [age, onChangeAgeHandler] = useInput('');

    //유효성 검사 에러메세지 설정
    const [userIdError, setuserIdError] = useState();
    const [passwordError, setpasswordError] = useState();

    //회원가입버튼 유효성검사 핸들러
    const handleValidation = (event) => {

        let formIsValid = true;
    
        //이메일 유효성 검사
        if (!userId.match(/^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$/)) {
          formIsValid = false;
          setuserIdError(
            <>
            <StWarningIcon><IoWarning size="20"/></StWarningIcon>
            <span><StWarning>Hmm...that doesn't look like an email address</StWarning></span>
            </>
          );
          return false;
        } else {
          setuserIdError("");
          formIsValid = true;
        }

        //비밀번호 유효성 검사
        if (!password.match(/^(?=.*[A-Za-z])(?=.*\\d)(?=.*[~!@#$%^&*()+|=])[A-Za-z\\d~!@#$%^&*()+|=]{8,16}$/)) {
            formIsValid = false;
            setpasswordError(
              <>
              <IoWarning size="20" fill="#CC0100"/>
              <StWarning>Your password is too short! You need 6+ characters.</StWarning>
              </>
            );
            return false;
          } else {
            setpasswordError("");
            formIsValid = true;
          }

          return formIsValid;
    }

    //로그인 모달창 핸들러
    const handleLogin = () => {
      setIsSignupModalOpen(isSignupModalOpen);
      setIsLoginModalOpen(!isLoginModalOpen);
    };

    const signInit = {
        userId: "",
        password: "",
        age: "",
      }

    //signupValue로 입력된 로그인 정보 저장
    const [signupValue, setSignupValue] = useState(signInit)

    //서버로 회원가입 데이터 보내기
    const SubmitHandler = async (e) => {
        e.preventDefault();

        //회원가입버튼 유효성검사
        handleValidation();
        if(!(handleValidation===true)) return;

        dispatch(
            addUserThunk({
                userId:userId,
                password:password, 
                age:age, })
        )
        .then(response => {
              if (response.payload.success && handleValidation()) {
                //로그인 모달 열기
                setIsLoginModalOpen(true);
              } else {
                  alert("회원가입 실패!")
              }
          })
        
        //회원가입 값 초기화
        setSignupValue(signInit);
    }
    
    return (
        <ModalBG>
            <SignupModal>
                <ModalCont>

                    <svg height="34" width="34" viewBox="0 0 24 24">
                        <path d="M0 12c0 5.123 3.211 9.497 7.73 11.218-.11-.937-.227-2.482.025-3.566.217-.932 1.401-5.938 1.401-5.938s-.357-.715-.357-1.774c0-1.66.962-2.9 2.161-2.9 1.02 0 1.512.765 1.512 1.682 0 1.025-.653 2.557-.99 3.978-.281 1.189.597 2.159 1.769 2.159 2.123 0 3.756-2.239 3.756-5.471 0-2.861-2.056-4.86-4.991-4.86-3.398 0-5.393 2.549-5.393 5.184 0 1.027.395 2.127.889 2.726a.36.36 0 0 1 .083.343c-.091.378-.293 1.189-.332 1.355-.053.218-.173.265-.4.159-1.492-.694-2.424-2.875-2.424-4.627 0-3.769 2.737-7.229 7.892-7.229 4.144 0 7.365 2.953 7.365 6.899 0 4.117-2.595 7.431-6.199 7.431-1.211 0-2.348-.63-2.738-1.373 0 0-.599 2.282-.744 2.84-.282 1.084-1.064 2.456-1.549 3.235C9.584 23.815 10.77 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12" fill="#E60022"></path>
                    </svg>
                    <LoginTitle>Welcome to Pinterest</LoginTitle>
                    <SubTitle>Find new ideas to try</SubTitle>

                    <FormCont>

                        <div>
                            <LabelSt>Email</LabelSt>
                                <Input
                                    type='text'
                                    placeholder="Email"
                                    onChange={onChangeUserIdHandler}
                                    name="userId"
                                    value={userId}
                                    required
                                />
                            {userIdError}

                            <LabelSt>Password</LabelSt>
                                <Input
                                    type='password'
                                    placeholder="Create a password"
                                    onChange={onChangePasswordHandler}
                                    name="password"
                                    value={password}
                                    required
                                />
                            {passwordError}

                            <LabelSt>Age</LabelSt>
                                <Input
                                    type='age'
                                    placeholder="Age"
                                    onChange={onChangeAgeHandler}
                                    name="age"
                                    value={age}
                                    required
                                />
                        </div>

                        <RegisterBtn onClick={SubmitHandler}>
                            Continue
                        </RegisterBtn>
                            
                        <OrSt>OR</OrSt>

                        <FaceBookBtn>
                            Continue with Facebook
                        </FaceBookBtn>
                        
                        <GoogleBtn>
                            Continue with Google
                        </GoogleBtn>

                        <Stpolicy>
                            By continuing, you agree to Pinterest's<br/>
                            <b>Terms of Service</b> and acknowledge you've read<br/>
                            our <b>Privacy Policy</b>
                        </Stpolicy>

                        <ToLogin onClick={handleLogin}>
                            Already a member? Log in
                        </ToLogin>     

                        <StBusi>
                            Create a free business account
                        </StBusi>                   
                    </FormCont>

                    <StIcon>
                    <IoClose onClick={closeModal} size="30"/>
                    </StIcon>

                </ModalCont>
            </SignupModal>
        </ModalBG>
    );
};

const ModalBG = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
  background-color: rgba(0, 0, 0, 0.6);
  font-family: "system-ui";
`

const SignupModal = styled.div`
  width: 484px;
  background-color: rgb(255, 255, 255);
  border-radius: 32px;
  position: relative;
  text-align: center;
  margin: 0 auto;
  min-height: initial;
  box-shadow: rgb(0 0 0 / 45%) 0px 2px 3px;
`

const ModalCont = styled.div`
  min-height: 635px;
  background-color: rgb(255, 255, 255);
  border-radius: 32px;
  display: flex;
  padding: 30px 10px 0px 10px;
  box-shadow: rgb(0 0 0 / 45%) 0px 2px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const LoginTitle = styled.div`
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  color: rgb(51, 51, 51);
  font-size: 31.5px;
  font-weight: 640;
  letter-spacing: -1px;
  line-height: 40px;
  text-align: center;
  margin-bottom: 5px;
  margin-top: 10px;
`

const SubTitle = styled.div`
  color: rgb(51, 51, 51);
  font-size: 16px;
  text-align: center;
  margin-bottom: 13px;
`

const FormCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 268px;
  //margin-top: 2px;
`

const LabelSt = styled.div`
    font-size: 14px;
    text-align: left;
    padding: 8px 10px 4px 8px;
`

const Input = styled.input`
  box-sizing: border-box;
  border: 2px solid #cdcdcd;
  padding: 8px 16px;
  min-height: 48px;
  width: 268px;
  white-space: nowrap;
  font-size: 16px;
  border-radius: 16px;
  font-weight: 200;
  :focus {
    box-shadow: 0 0 0 4px rgb(0 132 255 / 50%);
    outline: 0;
  }
  :hover {
    border: 2px solid #A5A5A5;
  }
`

const OrSt = styled.div`
  padding: 8px 8px 10px 8px;
  font-weight: 700;
  font-size: 14px;
`

const StIcon = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`

const RegisterBtn = styled.div`
    border-radius: 20px;
    width: 100%;
    height: 40px;
    font-size: 15px;
    font-weight: 700;
    background-color:#E60022;
    color:#ffffff;
    cursor: pointer;
    justify-content: center;
    display:flex;
    align-items: center;
    margin-top: 8px;
    :hover {
        background-color:#D40B22;
    }
`

const FaceBookBtn = styled.div`
    border-radius: 20px;
    width: 100%;
    height: 40px;
    font-size: 16px;
    font-weight: 750;
    background-color:#1977F2;
    color:#ffffff;
    cursor: pointer;
    justify-content: center;
    display:flex;
    align-items: center;
`

const GoogleBtn = styled.div`
    border-radius: 20px;
    margin-top: 10px;
    width: 100%;
    height: 40px;
    font-size: 14px;
    color:#000000;
    cursor: pointer;
    justify-content: center;
    display:flex;
    align-items: center;
    border: 1px solid #cdcdcd;
`

const Stpolicy = styled.div`
    font-size: 11px;
    color: #7d7d7d;
    margin-top:15px;
    margin-bottom: 15px;
    line-height: 1.3;
    
    b {
        color:black;
        cursor: pointer;
        :hover{
        border-bottom: 1px solid #000000;
        }
    }
`

const ToLogin = styled.div`
    cursor: pointer;
    margin-bottom: 8px;
    font-size: 12px;
    font-weight: 700;
`

const StBusi = styled.div`
    position: relative;
    bottom: 0px;
    width: 484px;
    border-bottom-left-radius: 32px;
    border-bottom-right-radius: 32px;
    font-size: 16px;
    font-weight: 550;
    background-color: #E9E9E9;
    height: 62px;
    margin-top: 20px;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    display: flex;
`

const StWarningIcon = styled.div`
  color: #CC0100;
  float: left;
  margin-top: 5px;
  margin-right: 5px;
`

const StWarning = styled.div`
    font-size: 12.5px;
    font-weight: 1px;
    text-align: left;
    margin-top: 7px;
    color: #CC0100;
    line-height: -1;
`

export default RegisterForm;