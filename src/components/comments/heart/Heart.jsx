// components
import DefaultIcon from "../../defaulticon/DefaultIcon";
import instanceJSon from "../../../shared/Request";
import { useState } from 'react';

// style
import { DivHeartBox, DivHeart, SpanNumberHeart } from "./style";

export default function Heart({ commentId, liked=false, numberLike}){
  const [ isLiked, setIsLiked ] = useState(liked);
  const [ countLike, setCountLike] = useState(numberLike)

  // function
  function onClickHeart(){
    if(isLiked){
      instanceJSon.delete(`/api/comments/likes/${commentId}`)
      setIsLiked(false)
      setCountLike(countLike - 1)
    } else {
      instanceJSon.post(`/api/comments/likes/${commentId}`)
      setIsLiked(true)
      setCountLike(countLike + 1)
    } 
  }

  // render
  return <DivHeartBox>
    <DefaultIcon size='24'><DivHeart liked={isLiked} onClick={onClickHeart}>❤</DivHeart></DefaultIcon>
    <SpanNumberHeart>{countLike ? countLike : ''}</SpanNumberHeart>
  </DivHeartBox>
}