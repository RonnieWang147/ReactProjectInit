// eslint-disable-next-line import/no-unresolved
import React from 'react';
import style from './styles.css';

const Ring = props => (
  <>
    <style>{style}</style>
    <div className="lds-ring">
      <div />
      <div />
      <div />
      <div />
    </div>
  </>
);

export default Ring;
