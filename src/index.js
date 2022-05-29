import "./styles/styles.css";
import Start from "./Start/index.js";
import Game from "./Game/index.js";
import store from "./store.js";

store(
  (state, actions) =>
    state.showStart ? Start(state, actions) : Game(state, actions),
  document.body.querySelector("#app")
);
