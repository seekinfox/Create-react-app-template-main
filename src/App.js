import React from "react";
import style from "./App.module.scss"
import Editor from "./Features/Editor/Editor";

function App() {
  return (
    <div className={style.App}>
      <header>
        <h1>Write it down yo!</h1>
      </header>
      <Editor />
    </div>
  );
}

export default App;
