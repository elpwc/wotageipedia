import React from 'react';
import logo from './logo.svg';
import './App.css';

interface P { }

interface S { }

class App extends React.Component<P, S> {
  constructor(props: P) {
    super(props);
    this.state = {};
  }
  
  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
