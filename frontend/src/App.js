import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';

// import logo from './logo.svg';
import './App.css';
import ErrorPage from './pages/errorpage/errorpage.component';
import AppPage from './pages/apppage/apppage.component';
import { createStructuredSelector } from 'reselect';
import { selectCurrentMessages } from './redux/messages/messages.selector';
import { connect } from 'react-redux';
import { config } from './config/config';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  componentWillMount() {
    if (config.sampleUser) {
      this.setState({
        ...this.state,
        currentUser: {
          bitmoji: {
            avatar: "https://sdk.bitmoji.com/render/panel/387a5703-cfea-44fe-b9cd-dd6c17deee78-ATJlblZ69l5wWWa_uUr7OkWlzTn4xQ-v1.png?transparent=1&palette=1",
          },
          displayName: "Vedant N",
          externalId: "CAESIMOqWFT06I8v1ymgKE/YhCJgnmBuUP0v6kwO74e9+XJs",
        },
      });
    } else {
      if (localStorage.getItem('snap-user')) {
        this.setState({
          ...this.state,
          currentUser: JSON.parse(localStorage.getItem('snap-user')),
        });
      }
    }
    
  }

  render() {
    return (
      <div className="App">
        <HashRouter basename='/'>
        <Switch>
        <Route
          exact
          path='/'
          render={() =>
            this.state.currentUser ? (
              <AppPage currentUser={this.state.currentUser}/>
              ) : (
                <Redirect to='/login'></Redirect>
            )
          }
        >
        </Route>
          <Route
          exact
          path='/login'
          render={() =>
              this.state.currentUser ? (
                  <Redirect to='/'></Redirect>
              ) : (
                  <></>
              )
          }
          ></Route>
          <Route path='*' component={ErrorPage}></Route>
        </Switch>
        </HashRouter>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentMessages: selectCurrentMessages,
});

export default connect(mapStateToProps)(App);
