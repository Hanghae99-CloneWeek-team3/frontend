import React from 'react';
import Pin from './Pin';

function PinList({ pins }) {

  console.log(pins)

  return (
    <div style={styles.pin_container}>
      {pins.map(pin => {
        return <Pin key={pin.postId} pin={pin} />
      })}
    </div>
  );
}

const styles = {
  pin_container: {
    margin: 0,
    padding: 0,
    width: '100vw',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, 250px)',
    gridAutoRows: '10px',
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    justifyContent: 'center',
  },
};

export default PinList;
