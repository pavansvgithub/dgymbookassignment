# Wordle Clone

## Overview

This project is a simple Wordle clone built using React. It allows players to guess a 5-letter word within six attempts, providing feedback on each guess with color-coded hints.

## Features

- **Word Guessing Game**: Users can guess a 5-letter word within 6 attempts.
- **Feedback Mechanism**:
  - **Green**: Letter is in the correct position.
  - **Yellow**: Letter is in the word but in the wrong position.
  - **Gray**: Letter is not in the word.
- **Keyboard Support**: Users can type letters, delete using backspace, and submit using Enter.
- **Dark Mode Toggle**: Users can switch between light and dark mode.
- **Animations**: Flip animation when letters are revealed.
- **Invalid Word Prevention**: Only words from the predefined list are accepted.

## Tech Stack

- **React** for UI development.
- **CSS** for styling.
- **useState, useEffect, useCallback** for state management and event handling.

## Installation & Running the Project

1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/wordle-clone.git
   ```
2. Navigate to the project directory:
   ```sh
   cd wordle-clone
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm start
   ```
5. Open [http://localhost:3000](http://localhost:3000) to play the game.

## How to Play

1. Type a 5-letter word and press Enter.
2. Observe the color-coded feedback:
   - Green: Correct letter in the correct place.
   - Yellow: Correct letter in the wrong place.
   - Gray: Letter not in the word.
3. Keep guessing until you win or run out of attempts.
4. Click "New Game" to restart.

## Future Enhancements

- Allow users to enter custom words.
- Implement a scoring system.
- Add sound effects.

## License

This project is licensed under the MIT License.

react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
