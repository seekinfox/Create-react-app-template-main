import React, {useState, useEffect} from "react";
import style from "./App.module.scss"
import Editor from "./Features/Editor/Editor";
import {motion} from "framer-motion"

function App() {
  const [load, setLoad] = useState(true)

  useEffect(() => {
    const animation = setTimeout(() => {
      setLoad(false)
    }, 500);
  
    return () => {
      clearTimeout(animation)
    }
  }, [])
  
  return (
    <>
    <motion.div
    initial={{x:"-70vw"}}
    animate={load ? {x:0}:{x:0}}
    className={style.App}>
      <header>
        <h1>Write it down!</h1>
      </header>
      <Editor />
    </motion.div>
    </>
  );
}

export default App;
