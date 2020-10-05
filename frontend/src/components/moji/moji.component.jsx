import React from 'react';

import MojiData from './moji.data.js';

import './moji.styles.scss';

const Moji = ({ currentUser, expression }) => {
  let imgUrl = currentUser.bitmoji.avatar;
  if (expression && expression !== 'default' && MojiData[expression].prefix) {
    const mid = currentUser.bitmoji.avatar.split('-')[currentUser.bitmoji.avatar.split('-').length - 2];
    imgUrl = MojiData[expression].prefix + mid + MojiData[expression].postfix;
  }

  return (
    <>
      <img className="moji" src={imgUrl}
      alt="Avatar" />
      <div className="name">Hi, {currentUser.displayName.split(' ')[0]}</div>
    </>
  );
};

export default Moji;
