import style from './confirmOrder.module.css'
import Layout from '../../components/layout/layout'
import { useGlobalContext } from '../../hooks/globalContext'
import { useState, useEffect } from 'react'
import IconLabel from '../../components/iconLabel/iconLabel'
import Buttons from '../../components/buttons/buttons'
import MapsKart from '../../components/mapsKart/mapsKart'

export default function ConfirmOrder() {
  const { cardItens } = useGlobalContext()
  const [subtotal, setSubTotal] = useState(0)
  const [cep, setCep] = useState(0)

  useEffect(() => {
    setSubTotal(cardItens.reduce((acc, produto) => acc + parseFloat(produto.price), 0))
  }, [cardItens])

  return (
    <Layout>
      <div className={style.div_contentConfirmerOrder}>
        <div className={style.div_contentMapsConfirmerOrder}>
          <MapsKart />
        </div>
        <div className={style.div_contentResumeConfirmerOrder}>
          <p>SubTotal: R$ {subtotal}</p>
          <p>Valor do CEP: R$ {cep}</p>
        </div>
      </div>
      <div className={style.div_ConsultCEPConfirmerOrder}>.
        <input type="number" placeholder='CEP'/>
      </div>
    </Layout>
  )
}