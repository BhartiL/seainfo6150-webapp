import React, { Component } from 'react';
<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';
import Article from './Article';
import ArticleText from './ArticleText';
=======
import List from './List';
import AddingMachine from './AddingMachine';
import ArticleTable from './ArticleTable';
import articles from './data/articles.json';
>>>>>>> 7fe78b595b740273d50e2c87b3b15ea60ef2e2c9

class App extends Component {
  render() {
    return (
      <div className="App">
<<<<<<< HEAD
        <Article
          title="The Statue of Liberty's torch heads to new museum"
          date="November 22, 2018"
          author="Kate Farley"
          children={<ArticleText />} />
        </div>
=======
        <ArticleTable articles={articles} />
      </div>
>>>>>>> 7fe78b595b740273d50e2c87b3b15ea60ef2e2c9
    );
  }
}

export default App;
