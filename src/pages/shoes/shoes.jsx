import Layout from '../../components/layout/layout'
import ShoesItens from '../../utils/Shoes';
import style from './shoes.module.css'
import { useState, useEffect } from 'react';

export default function Shoes(){
    const [shoesItens, getShoesItens] = useState([])
  
    useEffect(() => {
        const getShirtsItensFunction = async () => {
            const resposta = await ShoesItens()
            getShoesItens(resposta)
        }
        getShirtsItensFunction()
    }, []);

  return(
    <Layout>
      <div className={style.div_ContentShoes}>
        {shoesItens.map((shirt, index) => {
          return(
            <>
              <div key={index}>
                <h4>{shirt.name}</h4>
                <img src={shirt.link} alt={shirt.desc} />
                <p>R$ {shirt.price}</p>
              </div>
            </>
          )
        })}
      </div>
    </Layout>
  )
}