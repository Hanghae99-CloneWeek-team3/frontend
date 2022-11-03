import styled from "styled-components";

export const DivHeartBox = styled.div`
  display: flex;
  gap: 5px;
`

export const DivHeart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 24px;
  height: 24px;
  
  border-radius: 12px;

  font-size: 14px;
  color: ${props => props.liked ? '#CC0000' : '#767676'};
`

export const SpanNumberHeart = styled.span`
  font-size: 14px;
  color: #767676;
`