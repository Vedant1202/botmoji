import React from 'react';

import './chat-item.styles.scss';

const ChatItem = ({ mine, text }) => (
  <div className={`chat-item ${mine ? 'right-text' : 'left-text'}`}>
    { text }
  </div>
);

export default ChatItem;
