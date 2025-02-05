/* eslint-disable react/prop-types */
import style from './layout.module.css'
import Header from '../header/header'
import Kart from '../kart/kart'

export default function Layout({ children }){
  return(
    <div className={style.div_layout}>
      <Header />
      <Kart />
      {children}
    </div>
  )
}