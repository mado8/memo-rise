import React, { useState } from 'react';
const _ = require("lodash"); 


const MemoryGame = () => {

    const data = {
        cards: _.range(0, icons.length * 2),
        running: false
    }

    const icons = [
        'fa-kiwi-bird',
      'fa-chess',
      'fa-frog',
      'fa-camera-retro',
      'fa-plug',
      'fa-anchor',
      'fa-birthday-cake',
      'fa-cube',
      'fa-dice',
      'fa-bug',
      'fa-cut',
      'fa-gem'
    ];

    // Duplicate elements of an array
    const duplicate = (arr) => {
	    return arr.concat(arr).sort()
    };

    // Check if two cards are a match
    const checkMatch = (icons) => {
	    if (icons[0] === icons[1]) {
  	    console.log("it's a match");
  	    return true;
        }
    };

    // Create cards array based on icons, shuffle them
    const cardsShuffle = () => {
    	// prep objects
    	data.cards.forEach((card, index) => {
            data.cards[index] = {
                icon: '',
            down: true,
            matched: false
            }
        });
      // input every icon two times
    	icons.forEach((icon, index) => {
            data.cards[index].icon = icon;
            data.cards[index + icons.length].icon = icon;
          });
          data.cards = _.shuffle(data.cards);
    }

    const [victory, setVictory] = useState(false);

    const handleVictory = (statement) => {
        setVictory(statement)
    };

    const victoryMessage = () => {
        if(victory === true) {
            return (
                <p class="victoryState">Done! 
                    <button onClick={() => cardsShuffle()} class="btn btn-primary">Refresh ?</button>
                </p>
            )
        }
    }

    return (
        <div>
            <div v-for="(card, index) in cards" key="index" class="[{'down': card.down && !card.matched, 'up': !card.down, 'matched': card.matched}, ' card']" onClick={()=>handleClick(card)}>
                <i class="'fas ' + card.icon"></i>
            </div>
        </div>
    )
}

export default MemoryGame;