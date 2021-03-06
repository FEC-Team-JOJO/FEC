import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import currentStyle from '../../Contexts/CurStyleContext';
import {
  StylesContainer, StyleIcon, Checkmark,
} from './StyledComps/StylesStyle';

function Styles({ style, setCurStyle }) {
  const [selected, setSelect] = useState(0);
  const { curStyle } = useContext(currentStyle);

  const styled = {
    selected: 'background-image: url("overview_imgs/PCheckmark.webp");',
  };

  function handleClick(item) {
    setCurStyle(item);
    setSelect(item.style_id);
  }

  useEffect(() => {
    if (curStyle.style_id) {
      setSelect(curStyle.style_id);
    }
  }, [curStyle]);

  return (
    <StylesContainer>
      <Checkmark styled={selected === style.style_id ? styled.selected : null} />
      <StyleIcon src={style && style.photos[0].thumbnail_url ? style.photos[0].thumbnail_url : 'assets/NoImage.webp'} onClick={() => handleClick(style)} />
    </StylesContainer>
  );
}

Styles.propTypes = {
  style: PropTypes.instanceOf(Object).isRequired,
  setCurStyle: PropTypes.func.isRequired,
};

export default Styles;
