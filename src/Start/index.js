import { html } from "lit-html";
import * as styles from "./styles.module.css";

function Start(store, { hideStart }) {
  return html`<div class=${styles.Start}>
    <main>
      <h1>Tic Tac Toe</h1>
      <button class="${styles.btn}" @click=${hideStart}>Start Game</button>
    </main>
  </div>`;
}

export default Start;
