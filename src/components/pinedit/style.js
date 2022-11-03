import styled from "styled-components";

export const DivSection = styled.div`
  max-width: 900px;
  min-width: 470px;
  width: 100vw;
  background-color: white;
  border-radius: 23px;

  display: flex;
  flex-direction: column;
  padding: 30px;
  .titleBox{
    height: 100px;
    font-size: 28px;
    font-weight: 600;
    text-align: center;
    padding: 32px;
  }

  .buttonContainer{
    height: 55px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 15px;

    .buttonwrap{
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      gap: 15px;
    }
  }

`
export const DivContent = styled.div`
  min-height: 55px;
  font-size: 16px;
  font-weight: 400;
  padding: 16px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
`

export const DivMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  max-width: 600px;

  .menulabel{
    max-width: 150px;
    width: 25%;
    text-align: left;
    font-size: 14px;
  }

  .menuinput{
    max-width: 450px;
    width: 75%;
    border-radius: 16px;
    border: #CDCDCD 2px solid;
    display: flex;
    justify-content: center;
    align-items: center;

    input{
      font-size: 16px;
      width: 95%;
      height: 48px;
      color: #a5a5a5;
      border: none;
    }

    textarea{
      font-size: 16px;
      font-family: segoe-ui;
      padding: 5px 0;
      width: 95%;
      resize: none;
      color: #a5a5a5;
      border: none;
      &::placeholder{
        font-size: 16px;
        font-family: segoe-ui;
        color: #a5a5a5;
      }
    }

    .content{
       height: 66px;
    }

    .memo{
       height: 99px;
    }
  }
`

export const DivContentLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 260px);
  gap: 15px;
  hr{
    margin: 0px;
  }
`

export const DivContentRight = styled.div`
  width: 260px;
  img{
    border-radius: 16px;
  }
`