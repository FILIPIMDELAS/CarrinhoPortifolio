import style from './shirts.module.css'
import Layout from '../../components/layout/layout'
import ShirtsItens from '../../utils/Shirts'
import { useState, useEffect } from 'react'

export default function Shirts(){
  const [shirtsItens, getShirtsItens] = useState([])

  useEffect(() => {
      const getShirtsItensFunction = async () => {
          const resposta = await ShirtsItens()
          getShirtsItens(resposta)
      }
      getShirtsItensFunction()
  }, []);

  return(
    <Layout>
      <div className={style.div_ContentShoes}>
        {shirtsItens.map((shirt, index) => {
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