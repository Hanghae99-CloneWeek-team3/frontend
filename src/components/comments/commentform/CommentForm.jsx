// library & package & hook
import { useState } from 'react';
import useInput from '../../../hook/useInput';
import { useDispatch } from 'react-redux';
import { __writeComment, __putComment } from '../../../redux/module/CommentSlice';

// components
import DefaultButton from '../../defaultbutton/DefaultButton';
import Modal from '../../defaultmodal/Modal'
import ModalPortal from '../../defaultmodal/portal'
import Confirm from '../../confirm/Confirm';

// style
import { DivEdit, DivBeforeEdit, DivSmile, DivButtonWrap, DivEditSection } from './style';
import { getByDisplayValue } from '@testing-library/react';

export default function CommentForm({ isEdit = false, rootId, rootName, editValue = '', focus = false, fOnClick = () => { } }) {
  // variable
  const dispatch = useDispatch();
  const [isFocus, setIsFocus] = useState(focus);
  const [modalOpen, setModalOpen] = useState(false);
  const [value, handler, setValue] = useInput(editValue);
  const [state, setState] = useState(true);

  // function
  function onFocusInput() {
    setIsFocus(true);
  }

  function onClickCancle() {
    if (editValue !== value) {
      setModalOpen(true);
    } else {
      fOnClick();
      setIsFocus(false);
    }
  }
  console.log(rootName, rootId)
  function onClickSave() {
    // 수정
    if (isEdit) {
      dispatch(__putComment({
        commentId: rootId,
        contents: value
      }))
    } else {
      console.log('여기')
      dispatch(__writeComment({
        rootName: rootName,
        rootId: rootId,
        contents: value
      }))
    }
    window.location.reload();
  }

  const closeModal = () => {
    setModalOpen(false);
  };

  const clearInput = () => {
    setValue('');
    setIsFocus(false);
    closeModal();
  }

  // render
  if (isFocus) {
    return <DivEditSection>
      <DivEdit>
        <input type='text' defaultValue={editValue} onChange={handler} />
        <DivSmile><a href='#'>😀</a></DivSmile>
      </DivEdit>
      <DivButtonWrap>
        <DefaultButton onClick={onClickCancle}>취소</DefaultButton>
        <DefaultButton onClick={onClickSave} type='disable'>저장</DefaultButton>
      </DivButtonWrap>
      <ModalPortal>
        {modalOpen && <Modal onClose={closeModal} content={<Confirm closeModal={closeModal} clearInput={clearInput} />} />}
      </ModalPortal>
    </DivEditSection>
  }

  return <DivBeforeEdit>
    <input type='text' onFocus={onFocusInput} />
    <DivSmile><a href='#'>😀</a></DivSmile>
  </DivBeforeEdit>
}