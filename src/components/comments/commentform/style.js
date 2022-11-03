import styled from "styled-components";

export const DivEditSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const DivEdit = styled.div`
  height: 56px;
  border: 1px solid  #e2e2e2;
  border-radius: 16px;
  padding: 12px;
  font-size: 16px;
  font-family: 'Segoe UI';
  display: flex;
  width: 100%;

  input{
    width: 100%;
    height: 30px;
    border-style: none;
    font-family: 'Segoe UI';

    &:focus{
      outline: none;
    }
  }
`

export const DivBeforeEdit = styled.div`
  height: 48px;
  border: 1px solid  #e2e2e2;
  border-radius: 26px;
  padding: 12px;
  font-size: 16px;
  font-family: 'Segoe UI';
  display: flex;
  align-items: center;
  width: 100%;

  input{
    width: 100%;
    height: 30px;
    border-style: none;
    font-family: 'Segoe UI';

    &:focus{
      outline: none;
    }
  }
`

export const DivSmile = styled.div`
  font-size: 24px;
`

export const DivButtonWrap = styled.div`
  display: flex;
  gap: 5px;
  justify-content: flex-end;
  margin-top: 10px;
`