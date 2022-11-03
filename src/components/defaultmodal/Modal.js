import React from "react";
import styled from "styled-components";

const Modal = ({ onClose, content }) => {

  return (
    <Background onClick={onClose}>
      <Content onClick={(event) => {event.stopPropagation()}}>
        {content}
      </ Content>
    </Background>
  );
};

export default Modal;

//아래는 styled-components를 통한 스타일링

const Background = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  text-align: center;
  background: rgba(0, 0, 0, 0.5);
`

const Content = styled.div`
  position: relative;
`