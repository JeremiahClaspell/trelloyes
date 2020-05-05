import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Cards.js';
import './List.css'; 

function List (props){

    let lists = props.list.map(function(listItem){
        return (
            <section className="List" key={props.list.id}>
                <header className="List-header">
                    <h2>{listItem.header}</h2>
                </header>
                <div className="List-cards">
                    <Card cards={props.cards} cardIds={listItem.cardIds} />
                </div>
            </section>
        )
    })

    return (
        <ul>
        {lists}
        </ul>
    )
}

export default List; 