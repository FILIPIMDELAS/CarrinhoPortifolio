import style from './kart.module.css'
import { useGlobalContext } from '../../hooks/globalContext'
import { useEffect, useState } from 'react'
import IconLabel from '../iconLabel/iconLabel'
import Buttons from '../buttons/buttons'

export default function Kart() {
  const { cardItens, setCardItens } = useGlobalContext()
  const [itens, setItens] = useState([])
  const [contItens, setConstItens] = useState(0)
  const [subtotal, setSubTotal] = useState(0)

  useEffect(() => {
    const item = [...new Set(cardItens)]
    setSubTotal(cardItens.reduce((acc, produto) => acc + parseFloat(produto.price), 0))
    setItens(item)
  }, [cardItens])

  useEffect(() => {
    const qtdItens = {};
    cardItens.forEach(item => {
      qtdItens[item.id] = parseInt((qtdItens[item.id] || 0) + 1)
    });
    setConstItens(qtdItens)
  }, [cardItens]);

  const addMoreOneItem = (newItem) => {
    setCardItens(prevItens => [...prevItens, newItem]);
  }

  const removeOneItem = (itemToRemove) => {
    setCardItens(prevItens => {
      const lastIndex = prevItens.lastIndexOf(itemToRemove);

      if (lastIndex !== -1) {
        const updatedItens = [
          ...prevItens.slice(0, lastIndex),
          ...prevItens.slice(lastIndex + 1),
        ];
        return updatedItens;
      }

      return prevItens;
    });
  };

  const removeAllItem = (itemToRemove) => {
    setCardItens(prevItens => {
      const updatedItens = prevItens.filter(item => item !== itemToRemove);
      return updatedItens;
    });
  }

  return (
    <div className={`${style.div_KartSuspense}`}>
      <div className={style.div_contentMapsKart}>
        {itens.map((item, index) => {
          return (
            <>
              <div key={index} className={style.div_ContentItemKart}>
                <img src={item.link} alt={item.desc} />
                <div className={style.div_ContentInfoItemKart}>
                  <h4>{item.name}</h4>
                  <h5>{item.desc}</h5>
                  <p>R$ {(contItens[item.id] * parseFloat(item.price)).toFixed(2)}</p>
                  <div className={style.div_ContentContItemKart}>
                    <IconLabel name={'Minus'} label={''} onClick={() => { removeOneItem(item) }} />
                    {contItens[item.id]}
                    <IconLabel name={'Plus'} label={''} onClick={() => { addMoreOneItem(item) }} />
                    <Buttons onClick={() => {removeAllItem(item)}} label={'REMOVE'}/> 
                  </div>
                </div>
              </div>
            </>
          )
        })}
      </div>
      <div className={style.div_contentFinallyShop}>
        <h5>SubTotal: R$ {subtotal}</h5>
        <Buttons onClick={() => {}} label={'FINALIZAR COMPRA  '}/>
      </div>
    </div>
  )
}