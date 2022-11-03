import { DivSection, DivContent, DivMenu, DivContentLeft, DivContentRight } from './style'
import DefaultButton from '../defaultbutton/DefaultButton'
import useInput from '../../hook/useInput'
import { useSelector } from 'react-redux'
import { useCookies } from 'react-cookie'

import { useDispatch } from 'react-redux'
import { __putPin, __deletePin } from '../../redux/module/PinSlice'
import { useNavigate } from 'react-router-dom'

export default function PinEdit({ closeModal }) {
  const [title, titleHandler] = useInput();
  const [content, contentHandler] = useInput();
  const [ cookie ] = useCookies();

  const navigator = useNavigate();
  const dispatch = useDispatch();
  const { pin }  = useSelector(state => state.PinSlice);
  // const isLoading

  const saveHandler = () => {

    dispatch(__putPin({
      postId: pin.postId,
      title: title,
      content: content
    }));

    closeModal();
    window.location.reload();
  }

  const deleteHandler = () => {
    dispatch(__deletePin({postId: pin.postId}));
    alert('삭제되었습니다.');
    closeModal();
    navigator('/totallist');
  }

  return <DivSection>
    <div className="titleBox">
      이 핀 수정하기
    </div>
    <DivContent>
      <DivContentLeft>
        <DivMenu>
          <div className="menulabel">보드</div>
          <div className="menuinput"><input type='select' /></div>
        </DivMenu>
        <DivMenu>
          <div className="menulabel">섹션</div>
          <div className="menuinput"><input type='select' /></div>
        </DivMenu>
        <hr />
        <DivMenu>
          <div className="menulabel">제목</div>
          <div className="menuinput"><input type='text' onChange={titleHandler} defaultValue={pin.title} /></div>
        </DivMenu>
        <hr />
        <DivMenu>
          <div className="menulabel">설명</div>
          <div className="menuinput"><textarea className='content' onChange={contentHandler} defaultValue={pin.content} /></div>
        </DivMenu>
        <hr />
        <DivMenu>
          <div className="menulabel">웹사이트</div>
          <div className="menuinput"><input type='text' /></div>
        </DivMenu>
        <hr />
        <DivMenu>
          <div className="menulabel">대체 텍스트</div>
          <div className="menuinput"><input type='text' /></div>
        </DivMenu>
        <hr />
        <DivMenu>
          <div className="menulabel">나에게 메모 남기기</div>
          <div className="menuinput"><textarea className='memo' placeholder='이 핀에 대한 아이디어를 기억할 수 있도록 비공개 메모를 추가하세요.' /></div>
        </DivMenu>
      </DivContentLeft>
      <DivContentRight>
        <img src='https://i.pinimg.com/474x/1a/b4/ca/1ab4ca4abf215e58f61b48007ab12b39.jpg' />
      </DivContentRight>
    </DivContent>
    <div className="buttonContainer">
      <div className='buttonwrap'>
        <DefaultButton onClick={deleteHandler}>삭제</DefaultButton>
      </div>
      <div className='buttonwrap'>
        <DefaultButton onClick={closeModal}>취소</DefaultButton>
        <DefaultButton type='important' onClick={saveHandler}>저장</DefaultButton>
      </div>
    </div>
  </DivSection>
}