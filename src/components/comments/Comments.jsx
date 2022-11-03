// library & package & hook
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getComments, __getComment } from "../../redux/module/CommentSlice";

// components
import Comment from "./comment/Comment";
import CommentForm from "./commentform/CommentForm";
import ProfileImage from "../profileimage/ProfileImage";
import Loading from "../loading/Loading";
import DefaultButton from "../defaultbutton/DefaultButton";
import instanceJSon from "../../shared/Request";
// style
import { DivCommentSection, DivCommentHeader, DivComments, DivRecomments, DivCommentForm } from './style'

export default function Comments({ postId }) {
  const COMMENTS_PAGE_SIZE = 2;

  const [openComments, setOpenComments] = useState(false);
  const [commentsPage, setCommentsPage] = useState(0);

  const dispatch = useDispatch();
  const { comments, isLoading, error, numberComments } = useSelector(state => state.CommentSlice);
  const toggleComments = () => {
    setOpenComments(!openComments);
  }

  const moreCommentHandler = () => {
    setCommentsPage(commentsPage + 1);
  }

  const moreRecommentHandler = (commentId) => {
    dispatch(__getComment(commentId));
  }


  useEffect(() => {
    dispatch(__getComments({
      postId: postId,
      page: 0,
      size: COMMENTS_PAGE_SIZE * (commentsPage + 1),
    }))
  }, [commentsPage])

  useEffect(() => {

    return // need to : store 초기화
  }, [])

  if (isLoading || !comments)
    return <Loading />

  return <DivCommentSection>
    <DivCommentHeader>
      <span>댓글{numberComments ? ' ' + numberComments + '개' : ''}</span>
      <a href='#' onClick={toggleComments}>
        {openComments ?
          <svg height="18" width="18" viewBox="0 0 24 24" aria-hidden="true" aria-label role="img">
            <path d="M12 19.5.66 8.29c-.88-.86-.88-2.27 0-3.14.88-.87 2.3-.87 3.18 0L12 13.21l8.16-8.06c.88-.87 2.3-.87 3.18 0 .88.87.88 2.28 0 3.14L12 19.5z"></path>
          </svg>
          :
          <svg height="18" width="18" viewBox="0 0 24 24" aria-hidden="true" aria-label role="img">
            <path d="M6.72 24c.57 0 1.14-.22 1.57-.66L19.5 12 8.29.66c-.86-.88-2.27-.88-3.14 0-.87.88-.87 2.3 0 3.18L13.21 12l-8.06 8.16c-.87.88-.87 2.3 0 3.18.43.44 1 .66 1.57.66"></path>
          </svg>
        }
      </a>


    </DivCommentHeader>
    <DivComments isOpen={openComments}>
      {Object.values(comments).map(comment => {
        return <div key={comment.comment.commentId}><Comment comment={comment.comment}></Comment>
          <DivRecomments>
            {comment.recomments?.map(recomment => {
              return <Comment key={recomment.commentId} comment={recomment} />
            })}
            {comment.numberRecomments > comment.recomments.length ? <a href='#' onClick={() => moreRecommentHandler(comment.comment.commentId)}>⎯⎯ 답변 {comment.numberRecomments}개 보기</a> : ''}
          </DivRecomments>
        </div>
      })}
      <div style={{ width: 90, marginTop: 15 }}>
        {numberComments > COMMENTS_PAGE_SIZE * (commentsPage + 1) ? <DefaultButton onClick={moreCommentHandler}>더 보기</DefaultButton> : ''}
      </div>
      <DivCommentForm>
        <ProfileImage size='50' url='https://i.pinimg.com/564x/2e/7b/9f/2e7b9ff81c0af98a9769b85bd6035575.jpg' />
        <CommentForm rootName='post' rootId={postId} />
      </DivCommentForm>
    </DivComments>
  </DivCommentSection>
}
