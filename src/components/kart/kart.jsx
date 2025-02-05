import style from './kart.module.css'
import { useGlobalContext } from '../../hooks/globalContext'
import { useEffect, useState } from 'react'
import IconLabel from '../iconLabel/iconLabel'

export default function Kart(){
    const { cardItens, setCardItens } = useGlobalContext()
    const [ itens, setItens ] = useState([])
    const [ contItens, setConstItens ] = useState(0)

    useEffect(() => {
        const item = [...new Set(cardItens)]
        setItens(item)
    }, [cardItens])

    useEffect(() => {
        const qtdItens = {};
        cardItens.forEach(item => {
            qtdItens[item.name] = (qtdItens[item.name] || 0) + 1
        });
        setConstItens(qtdItens)
        console.log(qtdItens)
    }, [cardItens]);

    const addMoreOneItem = (newItem) => {
        setCardItens(prevItens => [...prevItens, newItem]);
    }

    const removeMoreOneItem = (itemToRemove) => {
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
      
      

    return(
        <div className={`${style.div_KartSuspense}`}>
            <p>v</p>
            {itens.map((item, index) => {
                return(
                    <>
                        <div key={index}>
                            <img src={item.link} alt={item.desc} />
                            <div>
                                <p>{item.name}</p>
                                <div>
                                    <IconLabel name={'Plus'} label={''} onClick={() => {addMoreOneItem(item)}}/>
                                    {contItens[item.name]}
                                    <IconLabel name={'Minus'} label={''} onClick={() => {removeMoreOneItem(item)}}/>
                                </div>
                            </div>
                        </div>
                    </>
                )
            })}
        </div>
    )
}