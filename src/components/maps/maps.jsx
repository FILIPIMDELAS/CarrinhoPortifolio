/* eslint-disable react/prop-types */
import style from './maps.module.css'
import { useState, useEffect } from 'react';
import IconsLabel from '../iconLabel/iconLabel.jsx'
import { useGlobalContext } from '../../hooks/globalContext.jsx';

export default function Maps({ itens }) {
  const [itensDate, getItensDate] = useState(itens || [])
  const { setCardItens } = useGlobalContext()

  useEffect(() => {
    getItensDate(itens)
  }, [itens]);

  const addKart = (newItem) => {
    setCardItens(prevItens => [...prevItens, newItem]);
  }

  return (
    <       div className={style.div_ContentMaps}>
      {itensDate.map((item, index) => {
        return (
          <>
            <div key={index} className={style.div_ContentItens}>
              <h4>{item.name}</h4>
              <img src={item.link} alt={item.desc} />
              <div className={style.div_contentPriceButton}>
                <p>R$ {item.price}</p>
                <IconsLabel name={'ShoppingCart'} label={''} onClick={() => { addKart(item) }} />
              </div>
            </div>
          </>
        )
      })}
    </div>
  )
}