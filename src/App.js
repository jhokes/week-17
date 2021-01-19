import React from 'react';
import './App.css';
import Card from './Card';
import Conditional from './Conditional';

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="header">{this.props.title}</div>
        <Card />
        <Conditional />
      </div>

    )
  }
}


export default App;
