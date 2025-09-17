# TicTacToe Game

A simple TicTacToe game built with React and TypeScript.

## Project Structure

```
src/
├── components/          # React components
│   ├── Game.tsx        # Main game component
│   ├── Board.tsx       # Game board component
│   ├── Square.tsx      # Individual square component
│   └── *.css          # Component styles
├── hooks/              # Custom React hooks
│   └── useGame.ts      # Game state management hook
├── types/              # TypeScript type definitions
│   └── game.ts         # Game-related types
├── utils/              # Utility functions
│   └── gameLogic.ts    # Game logic functions
├── __tests__/          # Test files
│   └── App.test.tsx    # App component tests
├── App.tsx             # Main App component
├── index.tsx           # Entry point
└── index.css           # Global styles
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Features to Implement

- [ ] Game logic (win/draw detection)
- [ ] Player moves
- [ ] Game reset functionality
- [ ] Score tracking
- [ ] Game history
- [ ] AI opponent (optional)

## Technologies Used

- React 18
- TypeScript
- CSS3
- Create React App
