// components
import DefaultIcon from "../../defaulticon/DefaultIcon";

// style
import { DivHeartBox, DivHeart, SpanNumberHeart } from "./style";

export default function Heart({liked=false, numberLike}){

  // function
  function onClickHeart(){
    // need to : Heart toggle
    // API : /api/comments/likes/{commentId} Delete & Post
  }

  // render
  return <DivHeartBox>
    <DefaultIcon size='24'><DivHeart liked={liked}>❤</DivHeart></DefaultIcon>
    <SpanNumberHeart>{numberLike ? numberLike : ''}</SpanNumberHeart>
  </DivHeartBox>
}