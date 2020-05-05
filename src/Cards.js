import React from 'react';
import ReactDOM from 'react-dom';
import './Card.css'; 

function Card(props){
    let cards = props.cardIds.map(function(card){
        return (
            <div className="Card" key={card}>
            <button type="button">delete</button>
            <h3>{props.cards[card].title}</h3>
            <p>{props.cards[card].content}</p>
          </div>
        )
    })

    return (
        <ul>
            {cards}
        </ul>
    )
}

export default Card