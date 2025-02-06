import style from './input.module.css'
import { useGlobalContext } from '../../hooks/globalContext'

export default function Input(){
  const { search, setSearch } = useGlobalContext()

  const HandleSearch = (e) => {
    setSearch(e.target.value)
  }

  return(
    <div className={style.div_input}>
      <input type="text" onChange={HandleSearch} value={search}/>
    </div>
  )
}