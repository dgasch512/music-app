import React from 'react';
import './App.css';
import Dashboard from './components/dashboard';
import LogIn from './components/login';

export default class App extends React.Component {
  state = {
    loggedIn: true
  }

  handleLogin = props => {
    props.preventDefault();
    this.setState({ loggedIn: true });
  }


  render () {
    return (
      <div>
      { this.state.loggedIn ? (
        <Dashboard />
      ) : (
        <LogIn onSubmit= {this.handleLogin} />
      )}
      </div>
    )
  }
}


