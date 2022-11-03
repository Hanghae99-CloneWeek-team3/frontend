import { DivSection } from './style'
import DefaultModal from '../defaultmodal/DefaultModel'
import DefaultButton from '../defaultbutton/DefaultButton'

export default function Confirm({title='정말 삭제하시겠어요?', content='변경 사항이 삭제됩니다.', closeModal, clearInput}) {


  return <DivSection>
    <div className="titleBox">
      {title}
    </div>
    <div className="contentBox">
      {content}
    </div>
    <div className="buttonContainer">
      <DefaultButton onClick={closeModal}>취소</DefaultButton>
      <DefaultButton type='important' onClick={clearInput}>변경 사항 삭제</DefaultButton>
    </div>
  </DivSection>
}