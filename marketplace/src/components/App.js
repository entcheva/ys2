import React, { Component } from 'react';
import Offering from './Offering';
import '../stylesheets/index.scss';

export default class App extends Component {
  render() {
    return (
      <div>
        Hello from App
        <Offering />
      </div>
    );
  }
}
