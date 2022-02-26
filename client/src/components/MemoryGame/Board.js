import './Board.css'
import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import SingleCard from './SingleCard'
import {
  faBrain,
  faCrown,
  faBook,
  faBomb,
  faCakeCandles,
  faCat,
} from '@fortawesome/free-solid-svg-icons'

const cardImages = [
  { icon: faBrain, match: false },
  { icon: faCrown, match: false },
  { icon: faBook, match: false },
  { icon: faBomb, match: false },
  { icon: faCakeCandles, match: false },
  { icon: faCat, match: false },
]

function BoardForm() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(false)
  const [disabled, setDisabled] = useState(null)
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
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }
  // compare 2 selected cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true)
      if (choiceOne.icon === choiceTwo.icon) {
        // console.log("matched Cards!!")
        // resetTurn()
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.icon === choiceOne.icon) {
              return { ...card, match: true }
            } else {
              return card
            }
          })
        })
        resetTurn()
      } else {
        console.log('those paths dont match')
        setTimeout(() => resetTurn(), 1000)
      }
    }
  }, [choiceOne, choiceTwo])
  console.log(cards)
  
  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns((prevTurn) => prevTurn + 1)
    setDisabled(false)
  }

  useEffect(() => {
    shuffleCards()
  }, [])

  return (
    <>
    <Navbar></Navbar>
    <div id='memory-game'>
      <h1>Memory Game</h1>
      <p>Turns: {turns} </p>
      <button id='new-game' onClick={shuffleCards}>
        New Game
      </button>
      <div id="cards-section">
        <div className='card-grid'>
          {cards.map((card) => (
            <SingleCard
              key={card.id}
              card={card}
              handleChoice={handleChoice}
              flipped={card === choiceOne || card === choiceTwo || card.match}
              disabled={disabled}
            />
          ))}
        </div>
      </div>
    </div>
    </>
  )
}

export default BoardForm
