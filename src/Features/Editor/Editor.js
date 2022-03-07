import React, {useState} from 'react'
import style from "./Editor.module.scss"
import {BiCode} from "react-icons/bi"
import {AiOutlineEye} from "react-icons/ai"
import { Remarkable } from 'remarkable'
import {BsPencilSquare} from "react-icons/bs"

const md = new Remarkable();

export default function Editor() {
  const [mode, setMode] = useState(true)
  //storing the text input
  const [text, setText] = useState("")
   
  return (
   <div className={style.Editor}>
        <div className={style.editor__buttons}>
          <button className={mode ? style.active:""} onClick={()=>setMode(true)}>
            <BiCode /> edit file
          </button>
          <button className={mode ? "": style.active} onClick={() => setMode(false)}>
            <AiOutlineEye />preview file
            </button>
        </div>
        <div className={style.editor__inner_container}>
          {mode ? 
          <>
            <textarea
              name="editor"
              id="markdown"
              placeholder="write it down.. write it down..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              className={style.editor__textarea}>
            </textarea>
          </>
          : 
          <>
          {text === "" ? 
            <div className={style.editor__output_is_empty}>
              <BsPencilSquare />
              <span>editor is empty yo!</span>
            </div>
          :
            <div dangerouslySetInnerHTML={{__html:md.render(text)}}
            className={style.editor__output}>
            </div>
          }
          </>
          }
        </div>
   </div>
  )
}
