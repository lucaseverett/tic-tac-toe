import {
  reactive,
  effect,
} from "@vue/reactivity/dist/reactivity.esm-browser.js";
import { render } from "lit-html";

const state = reactive({
  showStart: true,
  squares: [...Array(9)],
  turnNum: 1,
  currTurn: "X",
  xWins: 0,
  oWins: 0,
  winner: false,
});

const actions = {
  hideStart() {
    state.showStart = false;
  },
  newGame() {
    state.squares = [...Array(9)];
    state.turnNum = 1;
    state.currTurn = "X";
    state.winner = false;
  },
  clickSquare(i) {
    state.squares[i] = state.currTurn;
    state.turnNum += 1;
    let winner = checkWins(state.squares);
    if (winner) {
      state.winner = winner;
      if (state.currTurn === "X") {
        state.xWins += 1;
      } else {
        state.oWins += 1;
      }
    } else {
      state.currTurn = state.currTurn === "X" ? "O" : "X";
    }
  },
};

function checkWins(squares) {
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

  for (let line of winningLines) {
    const [a, b, c] = line;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return line;
    }
  }

  return false;
}

export default function (App, target) {
  effect(() => render(App(state, actions), target));
}
