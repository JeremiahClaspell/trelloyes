import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import './App.css';
import STORE from './store.js';

function App(props){

  return (

    <main className="App">
    <header className="App-header">
      <h1>Trelloyes!</h1>
    </header>
    <div id="App-list"><List list={STORE.lists} cards={STORE.allCards} key="1"/></div>
    </main>
  )
}

export default App;

