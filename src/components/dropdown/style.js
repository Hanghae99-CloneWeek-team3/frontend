import styled from "styled-components";

export const DivDropDownBox = styled.div`
  visibility: ${props => props.isOpen? 'visible': 'hidden' };
  position: absolute;
  top: 100%;
  right: ${props => props.alignRight ? 0 : ''};
  min-width: 180px;
  min-height: 40px;
  width: ${props => props.size};

  z-index: 2px;
  border-radius: 16px;
  padding: 8px;
  background-color: #fff;
  box-shadow: 0px 0px 10px 0px #ccc;
  color: #000;
  &:first-child {
    margin-top: 0px;
  }
`

export const DivMenuBox = styled.div`
  min-height: 35px;
  border-radius: 8px;
  text-align: left;
  padding: 0 8px;
  overflow: hidden;

  display: flex;
  align-items: center;

  font-family: segoe-ui;
  font-weight: 600;
  color: #000;

  &:hover{
    background-color: #e9e9e9;
  }
`

export const DivCategoryBox = styled.div`
  margin-top: 20px;
  height: 32px;
  font-size: 12px;
  font-weight: 400;
  text-align: left;
  padding-left: 8px;
  line-height: 32px;

`