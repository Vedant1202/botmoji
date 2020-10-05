import React from 'react';
import Moji from '../../components/moji/moji.component';
import axios from 'axios';

import '../../fonts/Montserrat.css';
import './moji-container.styles.scss';
import { createStructuredSelector } from 'reselect';
import { selectCurrentMessages } from '../../redux/messages/messages.selector';
import { connect } from 'react-redux';

class MojiContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expression: 'default',
    };
  }

  async componentDidUpdate() {
    const { externalId } = this.props.currentUser;
    const response = await axios.post(`http://localhost:5005/conversations/${externalId.replaceAll('/', '')}/predict`);

    console.log(response.data.scores[0].action);
    this.setState({
      expression: response.data.scores[0].action,
    })
  }

  render() {
    const { expression } = this.state;

    return (
      <div className="moji-container">
        <div className="moji-div">
          <Moji expression={expression} currentUser={this.props.currentUser}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  currentMessages: selectCurrentMessages,
});

export default connect(mapStateToProps)(MojiContainer);
