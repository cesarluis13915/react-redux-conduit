import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {};
  }
  
  componentWillMount() {
    console.log('Props:', this.props);
    this.store = this.props.store;
    this.store.subscribe(() => this.setState(this.store.getState()));
  }

  render() {
    const onClick = () => this.store.dispatch({ type: 'TOGGLE' });

    return (
      <div>
        <h1>Hello, World!</h1>
        <div>
          Learn Redux
          <input
            type="checkbox"
            checked={!!this.state.checked}
            onClick={onClick}/>
        </div>
        {
          this.state.checked ? (<h2>Done!</h2>) : null
        }
      </div>
    );
  }
}

export default App;
