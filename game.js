"use strict";
const squares = [...Array(9)];
let currentPlayer = "X";
let winner = false;
const allSquares = document.querySelectorAll("#board button");

const currentEl = document.querySelector("#current");

function clickSquare(cell) {
  if (cell.className === "" && !winner) {
    cell.className = currentPlayer;
    const winningLine = checkForWin();
    if (winningLine) {
      currentEl.innerHTML = `<div></div> wins!`;
      winner = true;
      winningLine.forEach((cell) => {
        cell.className += " highlight";
      });
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
      currentEl.className = currentPlayer;
      const stalemate = ![...allSquares].some((cell) => cell.className === "");
      if (stalemate) {
        currentEl.innerHTML = `No one wins!`;
        winner = true;
      } else {
        currentEl.innerHTML = `<div></div> goes next!`;
      }
    }
  }
}

const winningLines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function checkForWin() {
  let winningLine;

  winningLines.some((line) => {
    const [a, b, c] = line;
    const lineCells = [allSquares[a], allSquares[b], allSquares[c]];
    const isWinningLine = lineCells.every(
      (cell) => cell.className === currentPlayer
    );

    if (isWinningLine) {
      winningLine = lineCells;
    }

    return isWinningLine ? true : false;
  });

  return winningLine || false;
}

function newGame() {
  allSquares.forEach((cell) => {
    cell.className = "";
  });
  currentPlayer = "X";
  currentEl.className = currentPlayer;
  currentEl.innerHTML = `<div></div> goes first!`;
  winner = false;
}
