import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Article from './Article';
import ArticleText from './ArticleText';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Article
          title="The Statue of Liberty's torch heads to new museum"
          date="November 22, 2018"
          author="Kate Farley"
          children={<ArticleText />} />
        </div>
    );
  }
}

export default App;
