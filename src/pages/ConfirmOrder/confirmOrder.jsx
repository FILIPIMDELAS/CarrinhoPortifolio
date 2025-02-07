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

      const response = await fetch(`https://www.melhorenvio.com.br/api/v2/me/shipment/calculate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json' ,
          'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMDNjMWY4ODg1ZDZmZWMyMTI3OTgwZTA4NDkxMTBjNzdiNThkYjdiODI5Zjg5MzNjYWMzMDJjNDBkZTcyY2RiMWI0Njc5ZDU5NmU3ZDkyNTYiLCJpYXQiOjE3Mzg5NDkxMzMuNTg0MTk5LCJuYmYiOjE3Mzg5NDkxMzMuNTg0MjAxLCJleHAiOjE3NzA0ODUxMzMuNTYzMjg0LCJzdWIiOiI5ZTI4MGVkZS0zMjk2LTQ2NGMtOTA2Zi1jYjg5MjE3ZDBlODYiLCJzY29wZXMiOlsic2hpcHBpbmctY2FsY3VsYXRlIl19.Ve7VfWyQaFYYEjHydzV0TIn5jUzHihDG4EJdBhSI_tGp5BaKi0G6e2xji-ZekJi0o3ulX1akCFuxWNO2JWrEvF55tfP5xCxeKwe0tgGFz1gySb-tRd8ZHhzEmnXkJnir6dw41ORPsRam4XWg8Jg4yz-hnEl4WPNwAtbMx4YKLzfl24LNTetaaTjYIR6MU-UUHT0rFojsXWQa8ec6_IVMvAzKYTVEW2rPoeaBbW5FgpWS8Yqls7yWmt7S07CuKwTZthqq_Z7aW8mb772LuWfJxpTe2Y7CwZpAujtM3jPvRyB1JzEPvkIzF5YxgseOYk0hxjsVP7evaFZ7-Ky8i50hfnT61oKGFx18EhOxlaFEPDbSM9ehr9ks9phLdXYgRFqgd13TqcjeaXUUO8Lgbw_LCqP2r652Sq8GkpRvCtjBQhjjUcNKMQlTCQBtmLdRf9viO67cPZ4bi0yihRImI-3heLTqxV53c7KVYjnrVepqNxCwTjxuOEe1aMgbtTOK9zrHD7lxNGyOYw3J5d7P8qQTENGr8nCuJNsqpXjEVurezEnHZ7heLzlPXaGJnoDe9nID-cAgKGw69q9vZKPe27VDHbxakX3zBdOQg7N9fFoncGRbRVgRd2QbxPUL1WMLIO6RHh-zrYIUTSa8MwJZ-pvDOldTK6Pa-m_y-tRruE6g9BA' ,
          'User-Agent': 'Aplicação filipe_breakmen@hotmail.com'
        },
        body: JSON.stringify({
          from: {postal_code: '96020360'},
          to: {postal_code: cep},
          products: [
            {
              id: 'x',
              width: 11,
              height: 17,
              length: 11,
              weight: 0.3,
              insurance_value: 10.1,
              quantity: 1
            }
          ]
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
        </div>
      </div>
    </Layout>
  )
}