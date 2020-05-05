import React from 'react'; 
import ReactDOM from 'react-dom'; 
import Card from './Cards.js';


it('renders without crashing', ()=>{
    const div = document.createElement('div'); 
    ReactDOM.render(<Card cards={props.cards} cardIds={listItem.cardIds}/>, ('div')); 

    ReactDOM.unmountComponentAtNode('div'); 
})