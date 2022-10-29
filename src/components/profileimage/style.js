import styled from "styled-components"

export const DivProfileImageBox = styled.div`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: ${props => props.size/2}px;
  }
`