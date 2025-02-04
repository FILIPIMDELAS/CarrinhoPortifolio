import style from './input.module.css'
import IconLabel from '../iconLabel/iconLabel'

export default function Input(){
  const search = () => {
    console.log('pppp')
  }

  return(
    <div className={style.div_input}>
      <input type="text" />
      <IconLabel name={"Search"} label={''} onClick={search} />
    </div>
  )
}