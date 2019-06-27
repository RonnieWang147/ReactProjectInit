// eslint-disable-next-line import/no-unresolved
import React from 'react';
import style from './styles.css';

const Ellipsis = props => (
  <>
    <style>{style}</style>
    <div className="lds-ellipsis">
      <div />
      <div />
      <div />
      <div />
    </div>
  </>
);

export default Ellipsis;
