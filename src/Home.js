import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Developer from './Developer';
import Student from './Student';


class Home extends Component {
  render() {
    return (
      <div>
        <h1>Shadows Log-In </h1>

        <Link to='developer'><button type='submit'>Developer</button></Link>
        <Link to='student'><button type='submit'>Student</button></Link>
        
      </div>
    )
  }
}

export default Home;
