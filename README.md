# Puzzle Game

## Preview https://dainty-sunburst-938f94.netlify.app/

## Used Technologies

- JavaScript
- Node.js
- Webpack
- Babel

## Run the App Locally

- Install all dependencies. Use npm install
- To run client at http://localhost:808/ use npm start

## Directory structure

- The script entry point is src/index.js
- The DOM tree is index.html
- The styles are in the document /src/styles/styles.css

## Styles, UI, UX

### CSS, UI:

- the game used regular CSS for styling. The game is not responsive and adapted up to desktop size

### UX/Functionality:

- To restart the game, you need to click refresh in the browser. Every time with refresh the browser you will get the random position of images (section with existing images)
- The game consists of three sections: a board for making a puzzle with clear puzzles, a counter of movements, and a panel for selecting existing pictures
- The algorithm of the game is as follows: you need to complete the picture in the first section with as few movements as possible and chose the necessary pictures from the second image section
- You can move pictures from the second section to the first by filling in empty cells
- You can also move pictures to filled cells, while they will change places
