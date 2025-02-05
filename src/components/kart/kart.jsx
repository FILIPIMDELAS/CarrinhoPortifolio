import style from './kart.module.css'
import { useGlobalContext } from '../../hooks/globalContext'
import { useEffect, useState } from 'react'

export default function Kart(){
    const { cardItens, setCardItens } = useGlobalContext()
    const [ itens, setItens ] = useState([])

    useEffect(() => {
        setItens(cardItens)
    }, [cardItens]);

    return(
        <div className={`${style.div_KartSuspense}`}>
            <p>v</p>
            {itens.map((item, index) => {
                return(
                    <>
                        <p key={index}>{item.name}</p>
                    </>
                )
            })}
        </div>
    )
}