import style from './header.module.css'
import Input from '../input/input'
import IconLabel from '../iconLabel/iconLabel'
import Buttons from '../buttons/buttons'
import { useNavigate } from 'react-router-dom'

export default function Header(){
  const Navigate = useNavigate()

  const search = () => {
    console.log('fd')
  }

  const redirectShoes = () => {
    Navigate('/Shoes')
  }
  const redirectShits = () => {
    Navigate('/Shirts')
  }

  return(
    <div className={style.div_header}>
      <Input />
      <Buttons onClick={redirectShoes} label={'Sapatos'}/>
      <Buttons onClick={redirectShits} label={'Camisetas'}/>
      <IconLabel name={"ShoppingCart"} label={''} onClick={search}/>
    </div>
  )
}