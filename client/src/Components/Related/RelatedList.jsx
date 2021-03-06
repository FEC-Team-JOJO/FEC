import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import Card from './StyledComps/CardStyle';
import { List, SmolList } from './StyledComps/ListStyle';
import currentProducts from '../../Contexts/CurProdContext';
import { PreviousIcon, NextIcon } from './StyledComps/CarouselButtonStyle';

const AxiosHelper = require('./AxiosHelper');

function RelatedList({ related, lightMode }) {
  const [relatedStyles, setRelatedStyles] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [compareData, setCompareData] = useState([]);
  const [current, setCurrent] = useState(0);
  const { length } = related;
  const uniqRelated = {};
  let i = 0;
  while (i < related.length) {
    if (!uniqRelated[related[i].id]) {
      uniqRelated[related[i].id] = related[i];
      i++;
    } else {
      related.splice(i, 1);
    }
  }

  const { currentProd } = useContext(currentProducts);

  const showCompare = (product, style) => {
    Promise.all([
      AxiosHelper.getInfo(currentProd.id).then((data) => data.data.features),
      AxiosHelper.getInfo(product.id).then((data) => data.data.features),
    ])
      .then((data) => setCompareData([...data, product, style]))
      .then(() => setShowModal((previous) => !previous))
      .catch((err) => new Error(err));
  };

  useEffect(() => {
    Promise.all(
      related.map((relProd) => {
        if (relProd.id) {
          return AxiosHelper.getStyle(relProd.id).then((data) => data.data.results[0]);
        }
        return null;
      }),
    )
      .then((data) => {
        setRelatedStyles(data);
      })
      .then(() => setCurrent(0))
      .catch((err) => new Error(err));
  }, [related]);

  const next = () => {
    setCurrent(current + 1);
  };

  const previous = () => {
    setCurrent(current - 1);
  };
  return (
    <List>
      <PreviousIcon alt="prev" className={current === 0 ? 'hidden' : ''} src="overview_imgs/DarkLArrow.webp" onClick={current === 0 ? null : previous} />
      <SmolList styles={Object.keys(related).length > 1 ? 'display: grid; grid-template-columns: repeat(2, 1fr);' : null}>
        {related.map((product, index) => {
          if (index < current + 4 && index > current - 1) {
            return (
              <Card
                lightMode={lightMode}
                key={product.id}
                action="Compare"
                compareData={compareData}
                showModal={showModal}
                setShowModal={setShowModal}
                handleClick={() => showCompare(product, relatedStyles[index])}
                product={product}
                styles={relatedStyles[index]}
                image="assets/CompareButtonWhite.webp"
              />
            );
          }
          return null;
        })}
      </SmolList>
      <NextIcon alt="next" className={current < length - 4 ? '' : 'hidden'} src="overview_imgs/DarkRArrow.webp" onClick={current < length - 4 ? next : null} />
    </List>
  );
}

RelatedList.propTypes = {
  related: PropTypes.instanceOf(Array).isRequired,
  lightMode: PropTypes.bool.isRequired,
};

export default RelatedList;
