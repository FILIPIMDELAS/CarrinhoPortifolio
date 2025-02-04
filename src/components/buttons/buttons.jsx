/* eslint-disable react/prop-types */
import style from './buttons.module.css'

export default function Buttons({ onClick, label }){
  return(
    <button onClick={onClick} className={`${style.button}`}>{label}</button>
  )
}