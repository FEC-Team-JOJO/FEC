import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Box from './css/container';

const PickCharacteristics = function PickCharacteristics({ charKey, lable, char }) {
  const [check, setCheck] = useState(0);
  // saves value selected by user
  const setChar = function setChar(value) {
    // eslint-disable-next-line
    char[charKey] = value;
    setCheck(value);
  };
  // load values for feed back based on prodect characteristics
  let feedBack = ['loading', 'loading', 'loading'];
  if (lable === 'Size') {
    feedBack = ['A size too small', '½ a size too small', 'Perfect', '½ a size too big', 'A size too wide'];
  } else if (lable === 'Width') {
    feedBack = ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'];
  } else if (lable === 'Comfort') {
    feedBack = ['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect'];
  } else if (lable === 'Quality') {
    feedBack = ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect'];
  } else if (lable === 'Length') {
    feedBack = ['Runs Short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'];
  } else if (lable === 'Fit') {
    feedBack = ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs long'];
  }
  return (
    <div>
      <br />
      {lable}
      <div style={{ fontSize: '70%' }}>
        {check === 1
          ? <Box.StarCheck src="./assets/fullCircle.webp" alt="full circle" onClick={() => setChar(1)} loading="lazy" />
          : <Box.StarCheck src="./assets/emptyCircle.webp" alt="empty circle" onClick={() => setChar(1)} loading="lazy" />}
        {feedBack[0]}
        {check === 2
          ? <Box.StarCheck src="./assets/fullCircle.webp" alt="full circle" onClick={() => setChar(2)} loading="lazy" />
          : <Box.StarCheck src="./assets/emptyCircle.webp" alt="empty circle" onClick={() => setChar(2)} loading="lazy" />}
        {feedBack[1]}
        {check === 3
          ? <Box.StarCheck src="./assets/fullCircle.webp" alt="full circle" onClick={() => setChar(3)} loading="lazy" />
          : <Box.StarCheck src="./assets/emptyCircle.webp" alt="empty circle" onClick={() => setChar(3)} loading="lazy" />}
        {feedBack[2]}
        {check === 4
          ? <Box.StarCheck src="./assets/fullCircle.webp" alt="full circle" onClick={() => setChar(4)} loading="lazy" />
          : <Box.StarCheck src="./assets/emptyCircle.webp" alt="empty circle" onClick={() => setChar(4)} loading="lazy" />}
        {feedBack[3]}
        {check === 5
          ? <Box.StarCheck src="./assets/fullCircle.webp" alt="full circle" onClick={() => setChar(5)} loading="lazy" />
          : <Box.StarCheck src="./assets/emptyCircle.webp" alt="empty circle" onClick={() => setChar(5)} loading="lazy" />}
        {feedBack[4]}
      </div>
    </div>
  );
};
PickCharacteristics.propTypes = {
  lable: PropTypes.string.isRequired,
  charKey: PropTypes.number.isRequired,
  char: PropTypes.instanceOf(Object).isRequired,
};
export default PickCharacteristics;
