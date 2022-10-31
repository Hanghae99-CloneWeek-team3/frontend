// library & package & hook
import { useState } from "react";

// components 
import DropDown from "../../dropdown/DropDown";
import ProfileImage from "../../profileimage/ProfileImage";
import CommentForm from "../commentform/CommentForm";
import Heart from "../heart/Heart";
import DefaultIcon from "../../defaulticon/DefaultIcon";

// styled Components 
import { DivCommentSection, DivCommentBox, DivCommentMenuBox, DivComment, DivRecommentBox } from "./style"

export default function Comment({comment}){
  // variable 
  const [ isEditMode, setIsEditMode ] = useState(false);
  const [ isCommentMode, setIsCommentMode ] = useState(false);
  const menus = [{
    menu:[
      {
        title: '강조 표시',
        href: '#'
      }, {
        title: '수정',
        href: '#',
        onClick: toggleEditMode
      }, {
        title: '삭제',
        href: '#',
        onClick: onClickDelete
      }
    ]
  }];
  
  // function 
  function toggleEditMode(){
    setIsEditMode(!isEditMode);
  }

  function onClickDelete(){
    // need to : 확인창없이 바로 삭제
  }
  
  function onClickComment(){
    setIsCommentMode(true);
  }

  // render 
  if(isEditMode){
    return <DivCommentSection>
     <CommentForm editValue={comment.content} focus={true} fOnClick={toggleEditMode}/>
    </DivCommentSection>
  }

  return <DivCommentSection>
    <div><ProfileImage size={30} url='https://i.pinimg.com/564x/2e/7b/9f/2e7b9ff81c0af98a9769b85bd6035575.jpg' /></div>
    <DivCommentBox>
      <DivComment>
        <a href='/profile'><span className='uniquename'>{comment.uniqueName}</span></a>
        <span className='comment'>{comment.content}</span>
      </DivComment>
      <DivCommentMenuBox><span>1m</span> <a href='#' onClick={onClickComment}>답변</a> <Heart liked={comment.redHeart} numberLike={comment.likes}/>
        <div className='dotmenu' style={{position: 'relative'}}>
          <DropDown menus={menus} size='170'>
            <svg height="12" width="12" viewBox="0 0 24 24" aria-hidden="true" aria-label role="img">
              <path d="M12 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3M3 9c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm18 0c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z" fill="#767676"></path>
            </svg>
          </DropDown>
        </div>
      </DivCommentMenuBox>
      { isCommentMode ? <DivRecommentBox>
        <ProfileImage size={50} url='https://i.pinimg.com/564x/2e/7b/9f/2e7b9ff81c0af98a9769b85bd6035575.jpg' />
        <CommentForm focus={true} fOnClick={() => setIsCommentMode(false)}/>
      </DivRecommentBox> : <></>}
    </DivCommentBox>
  </DivCommentSection>
}

