import React from 'react';
import { useState, useEffect } from 'react';
const Pin = (props) => {
  const image = new Image();
  image.src = props.pin?.filePath;
  const [size, setSize] = useState();
  const ratio = image.width / image.height;
  useEffect(() => {
    if (ratio >= 0.77) setSize('small');
    else if (ratio <= 0.54) setSize('medium');
    else {
      setSize('large');
    }
  }, []);
  return (
    <div
      style={{
        ...styles.pin,
        ...styles[size],
      }}
    >
      <a href={`/detail/${props.pin.postId}`}>
        <img src={image.src} />
      </a>
    </div>
  );
};
// 230 1:1 300 0.77 420 0.54
const styles = {
  pin: {
    margin: '15px 10px',
    padding: 0,
    borderRadius: '16px',
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