import { html } from "lit-html";
import classNames from "classnames";
import * as styles from "./styles.module.css";

export default function Game(
  { currTurn, squares, xWins, oWins, winner, turnNum },
  { clickSquare, newGame }
) {
  return html`<div class=${classNames(styles.Game, currTurn)}>
    <header class=${styles.header}>
      <h1>Tic Tac Toe</h1>
    </header>
    <div class=${styles.board}>
      <div class=${styles.top}>
        <div class=${styles.wins}>
          <div class=${styles.score}>
            <div class=${classNames(styles.player, "X")}>X</div>
            <div id="x-wins">
              ${xWins} ${xWins > 1 || xWins === 0 ? "wins" : "win"}
            </div>
          </div>
          <div class=${styles.score}>
            <div class=${classNames(styles.player, "O")}>O</div>
            <div id="o-wins">
              ${oWins} ${oWins > 1 || oWins === 0 ? "wins" : "win"}
            </div>
          </div>
        </div>
        <div id="current" class=${styles.current}>
          ${turnNum === 1
            ? html`<span>X</span> goes first!`
            : winner
            ? html`<span>${currTurn}</span> wins!`
            : html`It's <span>${currTurn}'s</span> turn!`}
        </div>
      </div>
      <div class=${styles.grid} id="board">
        ${squares.map(
          (value, i) =>
            html`<button
              @click=${() => clickSquare(i)}
              class=${classNames(value, {
                highlight: winner && winner.includes(i),
              })}
              ?disabled=${winner || squares[i]}
            >
              ${value}
            </button>`
        )}
      </div>
      <div class=${styles.bottom}>
        <button class=${styles.btn} @click=${newGame}>
          ${winner ? "New" : "Restart"} Game
        </button>
      </div>
    </div>
  </div>`;
}
