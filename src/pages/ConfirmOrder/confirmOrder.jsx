import style from './confirmOrder.module.css'
import Layout from '../../components/layout/layout'
import { useGlobalContext } from '../../hooks/globalContext'
import { useState, useEffect } from 'react'
import MapsKart from '../../components/mapsKart/mapsKart'
import IconLabel from '../../components/iconLabel/iconLabel'

export default function ConfirmOrder() {
  const { cardItens } = useGlobalContext()
  const [subtotal, setSubTotal] = useState(0)
  const [cep, setCep] = useState()
  const [valueCep, setValueCep] = useState(0)

  useEffect(() => {
    setSubTotal(cardItens.reduce((acc, produto) => acc + parseFloat(produto.price), 0))
  }, [cardItens])

  const handleCep = (e) => {
    setCep(e.target.value)
  }

  const searchCep = async (e) => {
    e.preventDefault()

      const response = await fetch(`https://api.superfrete.com/`, {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MzkyMTU2NTEsInN1YiI6IjQ0YVNFY2NNeEtaRmlFVlgyUjZnZURoTjdpODIifQ.D6GhaLOohlPuIsPSH0gwI8PBRPEmwilfPftA34XNLWc',
          'User-Agent': 'CarrinhoCompras filipe_breakmen@hotmail.com',
          'content-type': 'application/json'
        },
        body: JSON.stringify({
          from: {postal_code: '01031970'},
          to: {postal_code: {cep}},
          services: '1,2,17',
          options: {
            own_hand: false,
            receipt: false,
            insurance_value: 0,
            use_insurance_value: false
          },
          package: {height: 2, width: 11, length: 16, weight: 0.3}
        })
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao enviar dados');
        }
        return response.json();
      })
      .then(data => console.log(data))
      .catch(error => console.error('Erro:', error));

      setValueCep(0)
      console.log(response.json())
  }

  return (
    <Layout>
      <div className={style.div_contentConfirmOrder}>
        <div className={style.div_contentConfirmerOrder}>
          <div className={style.div_contentMapsConfirmerOrder}>
            <MapsKart clas={"div_ContentItemConfirmOrder"}/>
          </div>
            <div className={style.div_ConsultCEPConfirmerOrder}>
              <form className={style.div_inputSearchCep} onSubmit={searchCep}>
                <input type="number" placeholder="00000-000" onChange={handleCep} value={cep} />
                <button type='submit'><IconLabel name={'Search'}/></button>
              </form>
            </div>
        </div>
        <div className={style.div_contentResumeConfirmerOrder}>
          <p>SubTotal: R$ {subtotal.toFixed(2)}</p>
          <p>Valor do CEP: R$ {valueCep}</p>
          <p>Valor do Total: R$ {parseFloat(valueCep.toFixed(2)) + parseFloat(subtotal.toFixed(2))}</p>
        </div>
      </div>
    </Layout>
  )
}