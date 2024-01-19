import axios from 'axios';
import './App.css';
import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback';
import Thank_You from '../Thank_You/Thank_You';


function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>

      <Router>
        <div className="container">
          <Route path='/' exact>
            <Feeling />
          </Route>
          <Route path='/understanding'>
            <Understanding />
          </Route>
          <Route path='/support'>
            <Support />
          </Route>
          <Route path='/comments'>
            <Comments />
          </Route>
          <Route path='/review'>
            <ReviewFeedback />
          </Route>
          <Route path='/thank_you'>
            <Thank_You />
          </Route>
        </div>
      </Router>
      


    </div>
  );
}

export default App;
