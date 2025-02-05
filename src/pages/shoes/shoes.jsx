import Layout from '../../components/layout/layout'
import Maps from '../../components/maps/maps';
import ShoesItens from '../../utils/Shoes';
import style from './shoes.module.css'

export default function Shoes(){
  return(
    <Layout>
      <Maps itens={ShoesItens} />
    </Layout>
  )
}