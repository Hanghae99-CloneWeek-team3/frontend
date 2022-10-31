import styled from "styled-components";

export const DivCommentSection = styled.div`
  width: 100%;  
`

export const DivCommentHeader = styled.div`
  height: 27px;

  font-size: 20px;
  font-weight: 600;

  span{
    margin-right: 15px;
  }
`

export const DivComments = styled.div`
  display: ${props => props.isOpen? '' : 'none'};
`

export const DivRecomments = styled.div`
  width: 100%;
  padding-left: 50px;
`

export const DivCommentForm = styled.div`
  display: flex;
  gap: 10px;
  
  margin-top: 30px;
`