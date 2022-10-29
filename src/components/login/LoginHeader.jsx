import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const LoginHeader = () => {
    return (
        <Container>
            {/* 핀터레스트 로고 */}
            <LogoCont>
                <Link to="/">
                    <HeaderBtn>
                        <svg  height="32" width="32" viewBox="0 0 24 24">
                            <path d="M0 12c0 5.123 3.211 9.497 7.73 11.218-.11-.937-.227-2.482.025-3.566.217-.932 1.401-5.938 1.401-5.938s-.357-.715-.357-1.774c0-1.66.962-2.9 2.161-2.9 1.02 0 1.512.765 1.512 1.682 0 1.025-.653 2.557-.99 3.978-.281 1.189.597 2.159 1.769 2.159 2.123 0 3.756-2.239 3.756-5.471 0-2.861-2.056-4.86-4.991-4.86-3.398 0-5.393 2.549-5.393 5.184 0 1.027.395 2.127.889 2.726a.36.36 0 0 1 .083.343c-.091.378-.293 1.189-.332 1.355-.053.218-.173.265-.4.159-1.492-.694-2.424-2.875-2.424-4.627 0-3.769 2.737-7.229 7.892-7.229 4.144 0 7.365 2.953 7.365 6.899 0 4.117-2.595 7.431-6.199 7.431-1.211 0-2.348-.63-2.738-1.373 0 0-.599 2.282-.744 2.84-.282 1.084-1.064 2.456-1.549 3.235C9.584 23.815 10.77 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12" fill="#CC0000"></path>
                        </svg>
                        <div style={{ color: "#CC0100", fontSize: "20px", fontWeight: "600", letterSpacing:"-1px"}}>
                            &nbsp;Pinterest
                        </div>
                    </HeaderBtn>
                </Link>
            </LogoCont>

            
            <RightCont>
                {/* 하이퍼링크 */}
                <HeaderBtn>
                    <DivBox>
                    <div style={{margin:"0 16px 0 16px", fontSize: "16px", fontWeight: "600"}}>
                        About
                    </div>

                    <div style={{margin:"0 16px 0 16px", fontSize: "16px", fontWeight: "600"}}>
                        Business
                    </div>

                    <div style={{margin:"0 16px 0 16px", fontSize: "16px", fontWeight: "600"}}>
                        Blog
                    </div>
                    </DivBox>
                </HeaderBtn>

                {/* 로그인, 회원가입 */}
                <LoginButton>
                    <p>Log in</p>
                    {/* <a onClick={scrollToBottom}>로그인</a> */}
                </LoginButton>
                <RegisterButton>
                    <p>Sign up</p>
                </RegisterButton>


            </RightCont>


        </Container>
    );
};

const Container = styled.div`
    display: flex;
    height : 80px;
    padding: 16px 16px 16px 16px;
    background-color: #ffffff;
    color: black;
    font-size: 12px;
`

const LogoCont = styled.div`
    flex: none;
    text-align: left;
    font-size: 15px;
    text-align: center;
    padding: 0 12px 0 12px;
    align-items: center;
    display: flex;
`

const HeaderBtn = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

const RightCont = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

const DivBox = styled.div`
    display: flex;
    margin: 0 25px 0 0;
    justify-content: flex-end;
`

const HomeButtons = styled.div`
    display: flex;
    height: 40px;
    justify-content: center;
    border-radius: 24px;
    cursor: pointer;
    align-items: center;
    font-size: 16px;
    text-align: center;
    font-weight: 600;
`;


const LoginButton = styled(HomeButtons)`
    background-color: #e60023;
    width: 76px;
    margin-right: 8px;

    p {color: white;}
`;


const RegisterButton = styled(HomeButtons)`
    background-color: #f2f0f0;
    width: 90px;

    p {color: black;}

    :hover {
        background-color: #e1e1e1;
    }
`;


export default LoginHeader;