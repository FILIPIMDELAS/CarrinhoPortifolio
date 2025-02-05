import style from './shirts.module.css'
import Layout from '../../components/layout/layout'
import Maps from '../../components/maps/maps'
import ShirtsItens from '../../utils/Shirts'

export default function Shirts(){
  return(
    <Layout>
      <Maps itens={ShirtsItens}/>
    </Layout>
  )
}