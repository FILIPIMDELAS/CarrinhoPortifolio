/* eslint-disable react/prop-types */
import style from './layout.module.css'
import Header from '../header/header'

export default function Layout({ children }){
  return(
    <div className={style.div_layout}>
      <Header />
      {children}
    </div>
  )
}