import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { __uploadPin } from '../../redux/module/PinSlice';
import ProfileImage from '../profileimage/ProfileImage';
import {
  PinWriteBox,
  AddPinContainer,
  PinIconContainer,
  UploadImgContainer,
  ShowPin,
  PinImage,
  LeftSide,
  LeftSection1,
  LeftSection2,
  LeftSection3,
  RightSide,
  RightSection1,
  Selectboard,
  SavePin,
  RightSection2,
  DragAndClick,
  Recommendation,
  AddSubTextButton,
  RendingPageLink,
} from './PinWriteStyle';

const uploadImg = (event, image, setImage, setShowLabel, setShowPin) => {
  // 미리보기
  if (event.target.files && event.target.files[0]) {
    if (/image\/*/.test(event.target.files[0].type)) {
      const reader = new FileReader();
      // console.log(reader);
      reader.onload = function () {
        setImage({
          ...image,
          imageUrl: reader.result,
        });
        setShowLabel(false);
        setShowPin(true);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }
};
// 텍스트 값 데이터를 받아와야 된다.
// 이미지 데이터를 받아와야 된다.

const PinWrite = () => {
  const dispatch = useDispatch();
  const formData = new FormData();

  const [showLabel, setShowLabel] = useState(true);
  const [showPin, setShowPin] = useState(false);
  const [image, setImage] = useState({ file: '' });
  const [savePin, setSavePin] = useState({
    title: '',
    content: '',
  });

  function setFile(event) {
    setImage(event.target);
    formData.append('file', event.target.files[0]);
  }
  console.log(image);

  // function postFile(event) {
  //   setImage();
  //   // axios.defaults.headers['Authorization'] = cookie['access_token'];
  //   // axios.defaults.headers['refresh_token'] = cookie['refresh_token'];
  //   axios.defaults.headers['Content-Type'] = 'multipart/form-data';
  //   axios.post('http://43.200.170.147:8080/api/posts/image', formData);
  // }

  const postFile = () => {};

  const onChangeHandler = (event) => {
    setSavePin(event.target.value);
  };
  console.log(savePin);

  return (
    <PinWriteBox
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <AddPinContainer>
        <LeftSide>
          <LeftSection1>
            <PinIconContainer>
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
            </PinIconContainer>
          </LeftSection1>
          <LeftSection2>
            <label
              htmlFor="upload-img"
              id="upload-img-label"
              style={{
                display: showLabel ? 'block' : 'none',
              }}
            >
              <UploadImgContainer>
                <div className="dotted-border">
                  <PinIconContainer>
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
                  </PinIconContainer>
                  <DragAndClick>
                    드래그하거나 클릭하여 업<p>로드</p>
                  </DragAndClick>
                </div>

                <Recommendation>
                  Pinterest는 20MB 미만의 고화질 .jpg
                  <p>파일을 사용하는 것을 권장합니다.</p>
                </Recommendation>
              </UploadImgContainer>

              <input
                onChange={(event) =>
                  uploadImg(
                    event,
                    savePin,
                    setSavePin,
                    setShowLabel,
                    setShowPin,
                    setFile
                  )
                }
                type="file"
                name="upload-img"
                id="upload-img"
                value=""
              />
            </label>
            <ShowPin
              style={{
                display: showPin ? 'block' : 'none',
              }}
            >
              <PinImage>
                <img src={savePin.imageUrl} alt="pin_image" />
              </PinImage>
            </ShowPin>
          </LeftSection2>
          <LeftSection3>
            <div className="save-from-site">사이트에서 저장</div>
          </LeftSection3>
        </LeftSide>

        <RightSide>
          <RightSection1>
            <Selectboard>
              <select defaultValue="Select" name="pin_size" id="pin-size">
                <option>select</option>
              </select>
              <SavePin type="button" onClick={postFile} value="Upload">
                저장
              </SavePin>
            </Selectboard>
          </RightSection1>
          <RightSection2>
            <input
              className="input-title"
              placeholder="제목 추가"
              type="text"
              id="pin-title"
              onChange={onChangeHandler}
            />
            <ProfileImage />
            <input
              placeholder="사람들에게 회원님의 핀에 대해 설명해 보세요😃"
              type="text"
              id="pin-desc"
              onChange={onChangeHandler}
              maxLength={200}
            />
            <AddSubTextButton>대체 텍스트 추가</AddSubTextButton>
            <RendingPageLink>
              <input
                placeholder="랜딩 페이지 링크 추가"
                type="text"
                id="pin-destination"
              />
            </RendingPageLink>
          </RightSection2>
        </RightSide>
      </AddPinContainer>
    </PinWriteBox>
  );
};

export default PinWrite;
