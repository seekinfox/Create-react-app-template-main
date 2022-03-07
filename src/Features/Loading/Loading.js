import React from 'react'
import style from "./Loading.module.scss";
import {FaPencilAlt} from "react-icons/fa"

export default function Loading() {
  return (
   <div className={style.loading__container}>
      <FaPencilAlt />
   </div>
  )
}
