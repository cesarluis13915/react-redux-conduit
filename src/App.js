import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';

const mapStateToProps = state => ({
  appName: state.appName
});

class App extends Component {
  render() {
    return (
      <div>
        <Header appName={this.props.appName}></Header>

        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
      </div>
    );
  }
}

export default connect(mapStateToProps, () => ({}))(App);
