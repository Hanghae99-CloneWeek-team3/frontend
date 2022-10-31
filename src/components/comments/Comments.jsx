// library & package & hook
import { useState, useEffect } from "react";

// components
import Comment from "./comment/Comment";
import CommentForm from "./commentform/CommentForm";
import ProfileImage from "../profileimage/ProfileImage";

// style
import { DivCommentSection, DivCommentHeader, DivComments, DivRecomments, DivCommentForm } from './style'

export default function Comments() {
  const [openComments, setOpenComments] = useState(false);
  const [numberComments, setNumberComments] = useState(0);

  const comments = [
    {
      commentId: 1,
      userName: 'useName',
      uniqueName: 'uniqueName',
      content: 'content, content, content, content',
      profileImage: 'https://i.pinimg.com/564x/6a/1f/04/6a1f04f624bea13e324c12e71338d392.jpg',
      likes: 10,
      redHeart: false,
      createdAt: '2021-07-06T14:32:27.002333',
      reComment: [
        {
          commentId: 1,
          userName: 'userName',
          uniqueName: 'uniqueName',
          content: 'content',
          likes: 10,
          redHeart: true,
          profileImage: 'https://i.pinimg.com/564x/6a/1f/04/6a1f04f624bea13e324c12e71338d392.jpg'
        }
      ]
    }, {
      commentId: 2,
      userName: 'useName',
      uniqueName: 'uniqueName',
      content: 'content, content, content, content',
      profileImage: 'https://i.pinimg.com/564x/6a/1f/04/6a1f04f624bea13e324c12e71338d392.jpg',
      likes: 10,
      redHeart: false,
      createdAt: '2021-07-06T14:32:27.002333',
      reComment: [
        {
          commentId: 1,
          userName: 'userName',
          uniqueName: 'uniqueName',
          content: 'content',
          likes: 10,
          redHeart: true,
          profileImage: 'https://i.pinimg.com/564x/6a/1f/04/6a1f04f624bea13e324c12e71338d392.jpg'
        }, {
          commentId: 2,
          userName: 'userName',
          uniqueName: 'uniqueName',
          content: 'content',
          likes: 10,
          redHeart: true,
          profileImage: 'https://i.pinimg.com/564x/6a/1f/04/6a1f04f624bea13e324c12e71338d392.jpg'
        }
      ]
    }
  ]

  const toggleComments = () => {
    setOpenComments(!openComments);
  }

  const countComments = () => {
    const numberRecomments = comments.reduce((prev, curr) => {
      return prev + curr.reComment.length;
    }, 0)
    setNumberComments(comments.length + numberRecomments);
  }

  useEffect(() => {
    countComments();
  }, [])

  return <DivCommentSection>
    <DivCommentHeader>
      <span>댓글{numberComments ? ' ' + numberComments + '개' : ''}</span>
      <a href='#' onClick={toggleComments}>
        <svg height="18" width="18" viewBox="0 0 24 24" aria-hidden="true" aria-label role="img">
          <path d="M12 19.5.66 8.29c-.88-.86-.88-2.27 0-3.14.88-.87 2.3-.87 3.18 0L12 13.21l8.16-8.06c.88-.87 2.3-.87 3.18 0 .88.87.88 2.28 0 3.14L12 19.5z"></path>
        </svg>
      </a>
    </DivCommentHeader>
    <DivComments isOpen={openComments}>
      {comments.map(comment => {
        return <div key={comment.commentId}><Comment comment={comment}></Comment>
          <DivRecomments>
            {comment.reComment.map(recomment => {
              return <Comment comment={recomment} key={recomment.commentId} />
            })}
          </DivRecomments>
        </div>
      })
      }
      <DivCommentForm>
        <ProfileImage size='50' url='https://i.pinimg.com/564x/2e/7b/9f/2e7b9ff81c0af98a9769b85bd6035575.jpg' />
        <CommentForm />
      </DivCommentForm>
    </DivComments>
  </DivCommentSection>

}