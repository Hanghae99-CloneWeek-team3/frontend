// import React from 'react';
// import { useState } from 'react';
// import {
//   PinBox,
//   PinTitle,
//   PinModal,
//   ModalHead,
//   ModalFoot,
//   SavePin,
//   Destination,
//   PinIconContainer,
//   PinImage,
// } from './PinStyle';

// const uploadImg = (event, setPinImage) => {
//   if (event.target.files && event.target.files[0]) {
//     if (/image\/*/.test(event.target.files[0].type)) {
//       const reader = new FileReader();

//       reader.onload = function () {
//         setPinImage(reader.result);
//       };

//       reader.readAsDataURL(event.target.files[0]);
//     }
//   }
// };

// const Pin = () => {
//   const [pinImage, setPinImage] = useState();

//   return (
//     <div>
//       <input
//         onChange={(event) => uploadImg(event, setPinImage)}
//         type="file"
//         name="picture"
//         id="picture"
//         value=""
//       />

//       <PinBox>
//         <PinTitle></PinTitle>
//         <PinModal>
//           <ModalHead>
//             <SavePin>저장</SavePin>
//           </ModalHead>
//           <ModalFoot>
//             <Destination>
//               <PinIconContainer>
//                 <img
//                   src="./image/arrow.png"
//                   alt="destination"
//                   className="pin-icon"
//                 />
//               </PinIconContainer>

//               <span>Link</span>
//             </Destination>

//             <PinIconContainer>
//               <img src="./image/send.png" alt="send" className="pin-icon" />
//             </PinIconContainer>

//             <PinIconContainer>
//               <img src="./image/dots.png" alt="edit" className="pin-icon" />
//             </PinIconContainer>
//           </ModalFoot>
//         </PinModal>
//         <PinImage>
//           <img src={pinImage} alt="pin_image" />
//         </PinImage>
//       </PinBox>
//     </div>
//   );
// };

// export default Pin;

import React from 'react';

const Pin = (props) => {
  return (
    <div
      style={{
        ...styles.pin,
        ...styles[props.size],
      }}
    ></div>
  );
};

const styles = {
  pin: {
    margin: '15px 10px',
    padding: 0,
    borderRadius: '16px',
    backgroundColor: 'pink',
  },
  small: {
    gridRowEnd: 'span 26',
  },
  medium: {
    gridRowEnd: 'span 33',
  },
  large: {
    gridRowEnd: 'span 45',
  },
};

export default Pin;
