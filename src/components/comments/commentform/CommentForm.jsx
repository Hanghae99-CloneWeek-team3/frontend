// library & package & hook
import { useState } from 'react';
import useInput from '../../../hook/useInput';

// components
import DefaultButton from '../../defaultbutton/DefaultButton';

// style
import { DivEdit, DivBeforeEdit, DivSmile, DivButtonWrap, DivEditSection } from './style';


export default function CommentForm({editValue='', focus=false, fOnClick=()=>{}}){
  // variable
  const [ isFocus, setIsFocus ] = useState(focus);
  const [ value, handler ] = useInput(editValue);

  // function
  function onFocusInput(){
    setIsFocus(!isFocus);
  } 

  function onClickCancle(){
    // need to
    if(editValue !== value){
      // 변경이 있을 때 
      
    } else {
      // 변경이 없을 때
      setIsFocus(false);
      fOnClick();
    }   
  }

  function onClickSave(){
    // need to : API connect
  }
  
  // render
  if(isFocus) {
    return <DivEditSection>
      <DivEdit>
        <input type='text' defaultValue={editValue} onChange={handler} />
        <DivSmile><a href='#'>😀</a></DivSmile>
      </DivEdit>
      <DivButtonWrap>
        <DefaultButton onClick={onClickCancle}>취소</DefaultButton>
        <DefaultButton onClick={onClickSave} type='disable'>저장</DefaultButton>
      </DivButtonWrap>
    </DivEditSection>
  }

  return <DivBeforeEdit>
      <input type='text' onFocus={onFocusInput} />
      <DivSmile><a href='#'>😀</a></DivSmile>
    </DivBeforeEdit>
}