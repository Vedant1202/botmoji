import React from 'react';
import axios from 'axios';

import './text-field.styles.scss';
import { createStructuredSelector } from 'reselect';
import { selectCurrentMessages } from '../../redux/messages/messages.selector';
import { connect } from 'react-redux';
import { setCurrentMessages } from '../../redux/messages/messages.actions.js';

class TextField extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: null,
    }

    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange(e) {
    this.setState({
      message: e.target.value,
    });
  }

  async handleSubmit(event) {
    // 'keypress' event misbehaves on mobile so we track 'Enter' key via 'keydown' event
    if (event.key === 'Enter') {
      event.preventDefault();
      event.stopPropagation();

      const data = {
        sender: this.props.currentUser.externalId.replaceAll('/', ''),
        message: this.state.message,
      };

      let currMessages;
      if (this.props.currentMessages.messages) {
        currMessages = this.props.currentMessages.messages;
      } else {
        currMessages = this.props.currentMessages;
      }

      currMessages.push({
        userId: this.props.currentUser.externalId.replaceAll('/', ''),
        message: this.state.message,
        mine: true,
      });

      this.props.setCurrentMessages({
        messages: [...currMessages],
      });
      
      const response = await axios.post('http://localhost:5005/webhooks/rest/webhook', data);
      
      if (response.data.length > 0) {
        currMessages.push({
          userId: this.props.currentUser.externalId.replaceAll('/', ''),
          message: response.data[0].text,
          mine: false,
        });
      } else {
        currMessages.push({
          userId: this.props.currentUser.externalId.replaceAll('/', ''),
          message: "I'm sorry I did'nt get that",
          mine: false,
        });
      }

      this.props.setCurrentMessages({
        messages: [...currMessages],
      });

      this.setState({
        message: '',
      })
    }
  }

  render() {
    return (
      <input
        type="text"
        placeholder="Type your message and hit Enter"
        className="message-input"
        onChange={this.onChange}
        onKeyDown={this.handleSubmit}
        value={this.state.message}
      />
    )
  }
}


const mapStateToProps = createStructuredSelector({
  currentMessages: selectCurrentMessages,
});

const mapDispatchToProps = dispatch => {
  return {
      setCurrentMessages: messages => {
          dispatch(setCurrentMessages(messages));
      },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TextField);
