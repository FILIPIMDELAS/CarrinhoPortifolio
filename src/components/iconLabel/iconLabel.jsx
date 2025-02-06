/* eslint-disable react/prop-types */
import style from './iconLabel.module.css'
import * as LucideIcons from "lucide-react"

export default function IconLabel({ clas, name, label, onClick }){
  const LucideIcon = LucideIcons[name]

  if (!LucideIcon) {
    console.warn(`Ícone "${name}" não encontrado.`);
    return null;
  }

  return(
    <div className={`${style.div_IconLabel}`} onClick={onClick}>
      <LucideIcon className={`${style.icon_Label} ${clas ? style[clas] : ''}`} id={`iconLabel${name, label}`}/>
      <label htmlFor={`iconLabel${name, label}`}>{label}</label>
    </div>
  )
}