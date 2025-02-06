import style from './kart.module.css'
import { useGlobalContext } from '../../hooks/globalContext'
import { useEffect, useState } from 'react'
import Buttons from '../buttons/buttons'
import { useNavigate } from 'react-router-dom'
import MapsKart from '../mapsKart/mapsKart'

export default function Kart() {
  const { cardItens } = useGlobalContext()
  const [subtotal, setSubTotal] = useState(0)
  const navigate = useNavigate()

  useEffect(() => {
    setSubTotal(cardItens.reduce((acc, produto) => acc + parseFloat(produto.price), 0))
  }, [cardItens])

  const redirect = () => {
    navigate('/ConfirmOrder')
  }

  return (
    <div className={`${style.div_KartSuspense}`}>
      <div className={style.div_contentMapsKart}>
        <MapsKart />
      </div>
      <div className={style.div_contentFinallyShop}>
        <h5>SubTotal: R$ {subtotal.toFixed(2)}</h5>
        <Buttons onClick={() => {redirect()}} label={'FINALIZAR COMPRA'}/>
      </div>
    </div>
  )
}