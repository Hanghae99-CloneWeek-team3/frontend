import styled from "styled-components"

export const DivButton = styled.div`
  display: flex;
  align-items: center;

  height: 43px;
  padding: 12px 16px;

  border: none;
  border-radius: 24px;

  background-color: ${props => props.colorSet.defaultBackgroundColor};

  font-family: segoe-ui;
  font-size: 16px;
  font-weight: 600;
  color: ${props => props.colorSet.fontColor};

  &:hover{
    background-color: ${props => props.colorSet.hoverBackgroundColor};
  }
`