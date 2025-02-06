import style from './header.module.css'
import Input from '../input/input'
import IconLabel from '../iconLabel/iconLabel'
import Buttons from '../buttons/buttons'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Kart from '../kart/kart.jsx'
import { useGlobalContext } from '../../hooks/globalContext.jsx'

export default function Header(){
  const Navigate = useNavigate()
  const [ viewKart, setviewKart ] = useState(false)
  const {cardItens } = useGlobalContext()

  const ViewerKart = () => {
    setviewKart(!viewKart)
  }

  const redirect = (redirect) => {
    Navigate(`/${redirect}`)
  }

  return(
    <div className={style.div_header}>
      <Input />
      <Buttons onClick={() => {redirect('Home')}} label={'Home'}/>
      <Buttons onClick={() => {redirect('Shoes')}} label={'Sapatos'}/>
      <Buttons onClick={() => {redirect('Shirts')}} label={'Camisetas'}/>
      <div className={style.div_contentIconKart}>
        <IconLabel clas="Header" name={"ShoppingCart"} label={''} onClick={ViewerKart}/>
        <p>{cardItens.length}</p>
      </div>
      
      {viewKart ? <Kart /> : ''}
    </div>
  )
}