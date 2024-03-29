# Snake Game
URL: https://snake-game-jir2t1epn-charlene-chens-projects.vercel.app/

# Game Functionality & Features
- Implement a snake character that can move in four directions: up, down, left, and right. Handle keyboard input (arrow keys) for controlling the snake's movement.
- Randomly generate food items on the game board. When the snake eats a food item, its length should increase, and the player's score should be updated on the screen.
- Implement collision detection to handle cases when the snake collides with the game board boundaries or itself. The game should end in such cases, and the player's final score should be displayed.
- Display the player's current score and any relevant game information on the screen, such as a "Game Over" message.
- Provide a way for the player to start a new game after the current game ends. This can be done using a "Play Again" button or similar user interface element.

# Technical Choices
The game is built using react and typescript as it is a front-end focused project. For the UI components, the svg was created using Figma and general styling was accomplished through CSS. The main components of the game include the board, snake, food item (apple), button, and displays (score & game over). These were managed using React useStates. In addition, React's useInterval hook was implemented to manage the game update and constant rendering of components as the game played. 
The webapp version of the game was deployed using Vercel.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
