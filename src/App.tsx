import React, { useEffect, useRef, useState } from 'react';

import Gameboy from "./images/gameboy.svg";
import Apple from "./images/apple.png";

import './App.css';
import useInterval from './UseInterval';

const initialSnake = [[4,10],[4,10]]
const initialApple = [14,10]
const windowX = 400;
const windowY = 300;
const scale = 20;
const timeDelay = 100;

function App() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const [gameOver, setGameOver] = useState(false)
  const [score, setScore] = useState(0)
  const [direction, setDirection] = useState([1,0])
  const [delay, setDelay] = useState<number | null>(null)
  const [snake, setSnake] = useState<number[][]>(initialSnake)
  const [apple, setApple] = useState<number[]>(initialApple)
  let buttonText = gameOver? "Play Again" : "Play";

  // initializes variables when user plays
  const play = () => {
    setSnake(initialSnake)
		setApple(initialApple)
		setDirection([ 1, 0 ])
		setDelay(timeDelay)
		setScore(0)
		setGameOver(false)
  }

  //updates screen display whenever variables are changed
  useEffect(() => {
    let fruit = document.getElementById("apple") as HTMLCanvasElement
    if (canvasRef.current) {
      const canvas = canvasRef.current
      const ctx = canvas.getContext('2d')
      if (ctx) {
        ctx.setTransform(scale, 0, 0, scale, 0, 0)
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
        ctx.fillStyle = "#A9A6A0"
        snake.forEach(([ x, y ]) => ctx.fillRect(x, y, 1, 1))
        ctx.drawImage(fruit, apple[0], apple[1], 1, 1)
      }
    }
  },[apple, snake, gameOver])

  //updates direction based on keyboard arrow input
  const changeDirection = (e: React.KeyboardEvent<HTMLDivElement>) => {
    switch (e.key) {
      case "ArrowLeft":
        setDirection([-1,0])
        break;
      case "ArrowRight":
        setDirection([1,0])
        break;
      case "ArrowUp":
        setDirection([0,-1])
        break;
      case "ArrowDown":
        setDirection([0,1])
        break;
    }
  }

  //checks snake collision with boundary and self, returns boolean
  const checkCollision = (snakeHead: number[]) : boolean => {
    //check against board boundary
    if (snakeHead[0] <= 0 || snakeHead[0] * scale >= windowX || snakeHead[1] <= 0 || snakeHead[1] * scale >= windowY) {
      return true
    }

    //check against snake body
    for (let i=0; i<snake.length; i++) {
      const segment = snake[i]
      if (snakeHead[0] == segment[0] && snakeHead[1] == segment[1]) {
        return true
      }
    }
    return false
  }

  //checks if snake has eaten the apple and handles respective logic, returns boolean
  const checkAppleEaten = (snakeHead: number[]) => {
    if (snakeHead[0] == apple[0] && snakeHead[1] == apple[1]) {
      let randCoordX = Math.floor(Math.random() * windowX/scale)
      let randCoordY = Math.floor(Math.random() * windowY/scale)
      setScore(score + 1)
      setApple([randCoordX, randCoordY])
      return true
    }
    return false
  }
 
  //runGame method that is called every interval to update the game state
  const runGame = () => {
    // Calculate the new head position
    const newSnakeHead = [snake[0][0] + direction[0], snake[0][1] + direction[1]];
    const newSnake = [newSnakeHead, ...snake];

    // checking collission
    if (checkCollision(newSnakeHead)) {
      setDelay(null)
      setGameOver(true)
    }

    // checking if apple is eaten
    if (!checkAppleEaten(newSnakeHead)) {
      newSnake.pop()
    }
    setSnake(newSnake)
  }


  useInterval(() => runGame(), delay)

  return (
    <div className="container" tabIndex={0} onKeyDown={(e) => changeDirection(e)}>
      <div className="gameboy-container">
        <img src={Gameboy} alt="gameboy" width="4000" className="gameboy" />  
        <div className="PAbutton" onClick={play}>
          {buttonText}
        </div> 
        <canvas ref={canvasRef} className="window" width={`${windowX}px`} height={`${windowY}px`}/>
        <img id="apple" src={Apple} alt="apple" className="apple"/>
        <div className="score-container">Score: {score}</div>
        {gameOver && 
          <div className="gameover">
            Game Over
            <br/>
            Score: {score}
          </div>
        }
      </div>
    </div>
    
  );
}

export default App;
