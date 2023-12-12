import SubHeader from '../../components/header/sub-header/SubHeader'
import Brand from '../../components/brands/Brand'
import Price from '../../components/price/Price'
import Color from '../../components/color/Color'
import ShopLayout from '../../components/shop-layout/ShopLayout'
import './LaptopAndPcs.scss'
const LaptopAndPcs = () => {
  return (
    <>
      <main className="laptop_and_pc-container">
        <aside className='asideContainer'>
          <SubHeader/>
          <Brand/>
          <Price/>
          <Color/>
        </aside>
        <ShopLayout/>
      </main>
    </>
  )
}

export default LaptopAndPcs