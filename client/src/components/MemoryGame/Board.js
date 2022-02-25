
import './Board.css';
import React, { useEffect, useState } from 'react';

import SingleCard from './SingleCard';

const cardImages = [

  { "src": "/img/helmet-1.png", match: false },
  { "src": "/img/ring-1.png" ,  match: false},
  { "src": "/img/potion-1.png",  match: false },
  { "src": "/img/scroll-1.png",  match: false },
  { "src": "/img/shield-1.png",  match: false },
  { "src": "/img/sword-1.png",  match: false }

]

function BoardForm() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(false)
  const [disabled, setDisabled] =useState(null)
  // shuffle cards
  const shuffleCards = () => {
    const shuffleCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))
    setChoiceOne(null)
    setChoiceTwo(null)
    setCards(shuffleCards)
    setTurns(0)
  }
  // console.log(cards, turns)
// handle choice
  const handleChoice = (card) => {
    console.log(card)
    choiceOne? setChoiceTwo(card) : setChoiceOne(card)
  }
  // compare 2 selected cards
  useEffect(() => {
  
    if (choiceOne && choiceTwo) {
      setDisabled(true)
      if (choiceOne.src === choiceTwo.src) {
        // console.log("matched Cards!!")
        // resetTurn()
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.src === choiceOne.src) {
              return { ...card, match: true }
            }
            else {
              return card;
            }
          })
        })
        resetTurn()
      }else {
        console.log("those paths dont match")
       setTimeout(() => resetTurn(), 1000)
      }
    }

  }, [choiceOne, choiceTwo])
console.log(cards)
  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurn => prevTurn + 1)
    setDisabled(false)
  }
  useEffect(() => { 
    shuffleCards()
  },[])
  
  return (
    <div className="App">
      <h1>Memory Game</h1>
      <button onClick={shuffleCards}>New Game</button>

      <div className='card-grid'>
        {cards.map(card => (
          <SingleCard
            key=
            {card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.match}
            disabled={disabled}
          />
        ))}
      </div>
      <p>Turns: {turns} </p>
    </div>
  );
}

export default BoardForm;
