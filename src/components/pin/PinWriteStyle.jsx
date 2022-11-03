import styled from 'styled-components';

export const PinWriteBox = styled.div`
  width: 100%;
  height: 91%;
  margin-top: 42.5px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: rgba(0, 0, 0, 0.1);
`;

export const AddPinBox = styled.div`
  padding: 40px;
  width: 880px;
  height: 650px;
  margin-top: -50px;
  border-radius: 16px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;

  display: flex;

  background-color: white;
`;

export const PinIcon = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  cursor: pointer;

  background-color: rgba(239, 239, 239, 0);
  &:hover {
    background-color: rgba(239, 239, 239, 1);
  }
`;

export const LeftSection = styled.div`
  padding: 20px;
  width: 311px;
  height: 510px;
`;

export const DotsIcon = styled.div`
  width: 100%;
  height: 8%;
`;

export const ImageUploadBox = styled.div`
  padding: 0px 10px;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: #efefef;

  #upload-img-label {
    width: 100%;
    height: 100%;
    cursor: pointer;
  }

  #upload-img-label input {
    width: 100%;
    opacity: 0;
    cursor: pointer;
  }
`;

export const DottedBox = styled.div`
  width: 100%;
  height: 80%;
  margin-top: 10px;
  border-radius: 8px;
  border: 2px dashed #dadada;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const PinImage = styled.div`
  position: relative;
  top: -95%;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SaveButton = styled.button`
  width: 30%;
  height: 100%;
  border: none;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 16px;
  font-weight: 700;

  color: white;
  background-color: #e60023;
  cursor: pointer;
  &:active {
    margin-top: 5px;
  }

  transition-duration: 0.1s;
`;

export const DragAndClick = styled.div`
  font-size: 14px;
  font-weight: 700;
  margin-top: 25px;
`;

export const Recommendation = styled.div`
  font-size: 12px;
  margin-top: 27px;

  text-align: center;
`;

export const ShowPin = styled.div`
  height: 100%;
  position: relative;
  overflow: hidden;
`;

export const SaveFromSiteBtn = styled.div`
  width: 100%;
  height: 10%;

  display: flex;
  justify-content: center;
  align-items: center;

  .save-from-site {
    width: 271px;
    height: 48px;
    border-radius: 22px;
    margin-top: 20px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-weight: 700;

    background-color: #efefef;
    cursor: pointer;

    &:hover {
      filter: brightness(0.9);
    }

    &:active {
      margin-left: 5px;
      margin-right: 5px;
    }

    transition-duration: 0.1s;
  }
`;

export const RightSection = styled.div`
  padding: 20px;
  width: 100%;
  height: 100%;
`;

export const SaveContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Selectboard = styled.div`
  width: 236px;
  height: 40px;

  display: flex;

  select {
    width: 70%;
    height: 100%;
    border: none;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    outline: none;

    font-size: 16px;
    background-color: #efefef;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-top: 30px;
  input {
    margin-bottom: 20px;
    width: 100%;
    height: 50px;
    border: none;
    border-bottom: 2px solid #c6c6c6;
    outline: none;

    font-size: 16px;

    background-color: transparent;
  }
  input:focus {
    border-bottom: 1px solid blue;
  }
  .input-title::placeholder {
    font-size: 36px;
    font-weight: 700;
  }
`;

export const AddSubTextButton = styled.div`
  width: 152px;
  height: 48px;
  border-radius: 22px;

  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;

  font-weight: 600;

  background-color: #efefef;
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }

  &:active {
    margin-left: 5px;
  }

  transition-duration: 0.1s;
`;

export const RendingPageLink = styled.div`
  width: 100%;

  margin-top: 220px;
`;
