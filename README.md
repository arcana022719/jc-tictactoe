# TicTacToe (React + TypeScript)

A polished Tic‑Tac‑Toe built with React 18 and TypeScript. It includes move history (time travel), score tracking, and a clean yellow/white theme (X is red, O is green).

## Features

- Core gameplay with win/draw detection
- Move history with time travel (jump to any move)
- Sidebar for move history (toggleable)
- Scoreboard (X wins, O wins, draws) with reset
- Game reset without affecting scores
- Modern UI with animations and a yellow/white theme

## Quick start

1) Install dependencies
```bash
npm install
```

2) Start the dev server
```bash
npm start
```

3) Open http://localhost:3000

## Scripts

- `npm start` – Run the app in development
- `npm test` – Run tests in watch mode
- `npm run build` – Create a production build

## How to play

- Click an empty square to place the current player’s mark.
- Status text shows the next player, a winner, or a draw.
- Use “Reset Game” to start a new round (scores persist).
- Use “Reset Scores” to clear the scoreboard.
- Toggle the history panel and click a move to time‑travel to that board state.

## Project structure

```
src/
├── components/          # UI components and styles
│   ├── Game.tsx        # Layout, status, scores, history
│   ├── Board.tsx       # 3x3 board rendering
│   ├── Square.tsx      # Single square button
│   └── *.css          # Component styles (Game.css, Board.css, Square.css)
├── hooks/
│   └── useGame.ts      # Game state, history, scores, actions
├── types/
│   └── game.ts         # Game-related types
├── utils/
│   └── gameLogic.ts    # checkWinner, checkDraw, makeMove, etc.
├── __tests__/
│   └── App.test.tsx    # Basic tests
├── App.tsx             # App wrapper
├── index.tsx           # Entry point
└── index.css           # Global styles & theme
```

## Tech stack

- React 18, TypeScript, Create React App
- CSS (component styles + global theme)

## Customization

- Colors and theme: see `src/index.css`, `src/components/Game.css`, `src/components/Board.css`, and `src/components/Square.css`.
- X/O colors: controlled by `.square-X` and `.square-O` in `Square.css`.
- Square size: adjust `width/height` in `.square` (default 96px).

## Troubleshooting

If the dev server shows an error like "Can't resolve 'core-js-pure/features/global-this'":

1. Ensure `core-js-pure` is pinned to a compatible version (this project uses `^3.33.2`).
2. Reinstall and restart:
   - Remove `node_modules` and any lock file
   - `npm install`
   - `npm start`

If squares look tiny or pill‑shaped, ensure the `.square` class defines fixed width/height and `flex: 0 0 <size>` in `src/components/Square.css`.

## Testing

```bash
npm test
```

