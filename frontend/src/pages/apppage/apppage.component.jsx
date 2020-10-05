import React from 'react';
import MojiContainer from '../../containers/moji-container/moji-container.component';
import ChatContainer from '../../containers/chat-container/chat-container.component';
import InputContainer from '../../containers/input-container/input-container.component';

import './apppage.styles.scss';

const AppPage = ({ currentUser }) => (
  <div className="app-page">
    <MojiContainer currentUser={currentUser}/>
    <ChatContainer currentUser={currentUser}/>
    <InputContainer currentUser={currentUser}/>
  </div>
);

export default AppPage;
