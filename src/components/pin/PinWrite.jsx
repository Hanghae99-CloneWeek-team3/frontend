import axios from 'axios';
import { useCookies } from 'react-cookie';
import useInput from '../../hook/useInput';
import { useState } from 'react';
import {
  PinWriteBox,
  AddPinBox,
  SaveButton,
  PinIcon,
  LeftSection,
  DotsIcon,
  ImageUploadBox,
  DottedBox,
  PinImage,
  DragAndClick,
  Recommendation,
  SaveFromSiteBtn,
  RightSection,
  SaveContainer,
  Selectboard,
  InputContainer,
  AddSubTextButton,
  RendingPageLink,
} from './PinWriteStyle';
import ProfileImage from '../profileimage/ProfileImage';
import { useNavigate } from 'react-router-dom';
import { includes } from 'lodash';
import instanceJSon from '../../shared/Request';

export default function PinWriteTest() {
  const [cookie, setCookie] = useCookies();
  const [title, titleHandler] = useInput();
  const [content, cententHandler] = useInput();
  const [writeImage, setwriteImage] = useState();
  const [fileId, setFileId] = useState();
  // 네비게이트 선언
  const navigate = useNavigate();

  const formData = new FormData();

  function setFile(event) {
    console.log(event.target.files);
    formData.append('file', event.target.files[0]);

    axios.defaults.headers['Authorization'] = cookie['access_token'];
    axios.defaults.headers['refresh_token'] = cookie['refresh_token'];
    axios.defaults.headers['Content-Type'] = 'multipart/form-data';

    axios
      .post(`https://pinteresting.site/api/posts/image`, formData)
      .then((res) => {
        setwriteImage(res.data.data.imageUrl);
        setFileId(res.data.data.fileId);
      });
  }

  function writeHandler() {
    const temp = {
      title: title,
      content: content,
      imageUrl: writeImage,
      fileId: fileId,
    };

    axios.defaults.headers['Authorization'] = cookie['access_token'];
    axios.defaults.headers['refresh_token'] = cookie['refresh_token'];
    axios.defaults.headers['Content-Type'] = 'application/json';

    instanceJSon.post('/api/posts', temp).then((res) => {
      if (res.data.success) {
        navigate('/totallist');
      }
    });
  }

  return (
    <PinWriteBox>
      <AddPinBox>
        <LeftSection>
          <DotsIcon>
            <PinIcon>
              <svg
                height="18"
                width="18"
                viewBox="0 0 24 24"
                aria-hidden="true"
                aria-label
                role="img"
              >
                <path
                  d="M12 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3M3 9c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm18 0c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z"
                  fill="#767676"
                ></path>
              </svg>
            </PinIcon>
          </DotsIcon>

          <ImageUploadBox>
            <label
              htmlFor="upload-img"
              id="upload-img-label"
              style={{ display: 'block' }}
            >
              <DottedBox>
                <PinIcon>
                  <svg
                    height="24"
                    width="24"
                    viewBox="0 0 24 24"
                    aria-label="이미지 또는 동영상 추가"
                    role="img"
                  >
                    <path
                      d="M24 12c0-6.627-5.372-12-12-12C5.373 0 0 5.373 0 12s5.373 12 12 12c6.628 0 12-5.373 12-12zm-10.767 3.75a1.25 1.25 0 0 1-2.5 0v-3.948l-1.031 1.031a1.25 1.25 0 0 1-1.768-1.768L12 7l4.066 4.065a1.25 1.25 0 0 1-1.768 1.768l-1.065-1.065v3.982z"
                      fill="#767676"
                    ></path>
                  </svg>
                </PinIcon>
                <DragAndClick>
                  드래그하거나 클릭하여 업<p>로드</p>
                </DragAndClick>
              </DottedBox>
              <Recommendation>
                Pinterest는 20MB 미만의 고화질 .jpg
                <p>파일을 사용하는 것을 권장합니다.</p>
              </Recommendation>

              <PinImage>
                <input
                  type="file"
                  id="upload-img"
                  onChange={setFile.bind(this)}
                  aria-label="파일 업로드"
                  aria-hidden="false"
                  tabIndex="0"
                />
                {writeImage ? <img src={writeImage} /> : ''}
              </PinImage>
            </label>
          </ImageUploadBox>
          <SaveFromSiteBtn>
            <div className="save-from-site">사이트에서 저장</div>
          </SaveFromSiteBtn>
        </LeftSection>

        <RightSection>
          <SaveContainer>
            <Selectboard>
              <select>
                <option>board</option>
              </select>
              <SaveButton type="button" value="글쓰기" onClick={writeHandler}>
                저장
              </SaveButton>
            </Selectboard>
          </SaveContainer>

          <InputContainer>
            <input
              className="input-title"
              type="text"
              placeholder="제목 추가"
              onChange={titleHandler}
            />
            <ProfileImage />
            <input
              type="text"
              placeholder="사람들에게 회원님의 핀에 대해 설명해 보세요😃"
              onChange={cententHandler}
            />
            <AddSubTextButton>대체 텍스트 추가</AddSubTextButton>
            <RendingPageLink>
              <input
                placeholder="랜딩 페이지 링크 추가"
                type="text"
                id="pin-destination"
              />
            </RendingPageLink>
          </InputContainer>
        </RightSection>
      </AddPinBox>
    </PinWriteBox>
  );
}
