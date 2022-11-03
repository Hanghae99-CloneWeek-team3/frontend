import styled from "styled-components"

export const DivHeaderSection = styled.div`
  width: 100%;
  height: 80px;

  display: flex;
`

export const DivLeftBox = styled.div`
  width: 200px;  

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  gap: 10px;

  span{
    font-family: segoe-ui;
    font-weight: 600;
    color: #000;
  }
`
export const DivLogoBox = styled.div`
  display: flex;
  gap: 5px;

  h2{
    font-size: 20px;
    font-weight: 600;
    font-family: segoe-ui;
    color: #CC0000;
  }
`


export const DivRightBox = styled.div`
  width: 230px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;
  
`

export const DivSearchBox = styled.div`
  flex-grow: 1;

  display: flex;
  justify-content: center;
  align-items: center;
`


export const DivSearchInputBox = styled.div`
  width: 100%;
  height: 48px;
  border-radius: 24px;
  border: 2px solid rgb(233, 233, 233);
  
  display: flex;
  align-items: center;
  padding: 0 0 0 16px;

  input{
    margin-left: 5px;
    width: 100%;
    height: 48px;
    font-family: segoe-ui;
    font-size: 16px;
    background-color: transparent;
    border: none;

    &:focus{
      outline: none;
    }
  }
`