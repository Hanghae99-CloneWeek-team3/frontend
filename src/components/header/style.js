import styled from "styled-components"

export const DivHeaderSection = styled.div`
  width: 100%;
  height: 80px;

  display: flex;
`

export const DivLeftBox = styled.div`
  width: 230px;  
  display: flex;
  justify-content: center;
  align-items: center;
`

export const DivRightBox = styled.div`
  width: 190px;
  display: flex;
  justify-content: center;
  align-items: center;
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
  background-color: rgb(233, 233, 233);

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
  }
`

export const DivIconBox = styled.div`
  width: ${props => props.size};
  height: ${props => props.size};
  border-radius: 25px;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  &:hover{
    background-color: rgb(233, 233, 233);
  }  
`

export const DivTextBox = styled.div`
  position: relative;
  font-family: segoe-ui;
  font-weight: 600;
  color: #000;

  width: ${props => props.size};
  height: 48px;
  border-radius: 24px;
  
  text-align: center;
  span{
    line-height: 48px;
  }
  a{
    color: #000;
    text-decoration: none;
  }
`

export const DivProfileBox = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;

  .infoBox{
    width: 150px;
    margin-left: 5px;
  }
`