import React from 'react';
import ChatItem from '../../components/chat-item/chat-item.component';

import './chat-container.styles.scss';
import { createStructuredSelector } from 'reselect';
import { selectCurrentMessages } from '../../redux/messages/messages.selector';
import { connect } from 'react-redux';

class ChatContainer extends React.Component {
  messagesEnd = React.createRef();

  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  }
  
  componentDidMount() {
    this.scrollToBottom();
  }
  
  componentDidUpdate() {
    this.scrollToBottom();
  }

  render () {
    const { currentUser } = this.props;
    let currentMessages;
    if (this.props.currentMessages.messages) {
      currentMessages = this.props.currentMessages.messages;
    } else {
      currentMessages = this.props.currentMessages;
    }

    // eslint-disable-next-line
    const messagesEndRef = React.createRef();
    
    return (
      <div className="chat-container">
      <ChatItem text="Hi, how are you"/>
      {
        currentMessages.length > 0 ? 
        // eslint-disable-next-line
        currentMessages.map((messageData, idx) => {
          if (messageData.userId === currentUser.externalId.replaceAll('/', '')) {
            if (messageData.mine) {
              return (<ChatItem key={idx} text={messageData.message} mine/>)
            } else {
              return (<ChatItem key={idx} text={messageData.message} />)
            }
          }
        })
        :
        null
      }
      <div style={{ float:"left", clear: "both" }}
        ref={(el) => { this.messagesEnd = el; }}>
      </div>
    </div>
    );
  }
}  

const mapStateToProps = createStructuredSelector({
  currentMessages: selectCurrentMessages,
});

export default connect(mapStateToProps)(ChatContainer);
