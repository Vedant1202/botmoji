import React from 'react';

import './input-container.styles.scss';
import TextField from '../../components/text-field/text-field.component';

class InputContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      status: null,
    }
  }

  render() {
    const { currentUser } = this.props;

    return (
      <div className="input-container">
        <TextField currentUser={currentUser} />
      </div>
    )
  }
}

export default InputContainer;
