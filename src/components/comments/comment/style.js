import styled from "styled-components";

export const DivCommentSection = styled.div`
  display: flex;
  font-size: 16px;
  margin-top: 15px;
  min-width: 400px;
`

export const DivCommentBox = styled.div`
  width: 100%;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #111111;
  margin-left: 5px;
`

export const DivComment = styled.div`
  display: flex;
  flex-wrap: wrap;
  a{
    color: #111111;
  }

  .uniquename{
    font-weight: 600;

    &:hover{
      text-decoration: underline;
    }
  }

  .comment{
    margin-left: 5px;
  }

`

export const DivCommentMenuBox = styled.div`
  font-size: 14px;
  color: #767676;
  display: flex;
  gap: 20px;
  align-items: center;
  a{
    color: #767676;
    text-decoration: none;
  }

  .dotmenu{
    display: flex;
    justify-content: center;
    align-items: center;

    width: 24px;
    height: 24px;

    border-radius: 12px;
    &:hover{
      background-color: rgb(233, 233, 233);
    }
  }
`

export const DivRecommentBox = styled.div`
  display: flex;
  margin-top: 10px;
  gap: 5px;
  width: 100%;
`