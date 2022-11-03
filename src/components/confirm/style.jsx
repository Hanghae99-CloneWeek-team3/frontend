import styled from "styled-components";

export const DivSection = styled.div`
  max-width: 720px;
  min-width: 470px;
  width: 100vw;
  background-color: white;
  border-radius: 23px;

  display: flex;
  flex-direction: column;

  .titleBox{
    height: 100px;
    font-size: 28px;
    font-weight: 600;
    text-align: center;
    padding: 32px;
  }

  .contentBox{
    min-height: 55px;
    font-size: 16px;
    font-weight: 400;
    padding: 16px;

  }

  .buttonContainer{
    height: 55px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    gap: 15px;
    padding: 16px;
  }

`