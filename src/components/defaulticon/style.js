import styled from "styled-components"

export const DivIconBox = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  width: ${props => props.size}px;
  height: ${props => props.size}px;
  
  border-radius: ${props => props.size/2}px;

  &:hover{
    background-color: rgb(233, 233, 233);
  }  
`