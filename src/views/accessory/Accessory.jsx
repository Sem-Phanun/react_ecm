
import Brand from '../../components/brands/Brand'
import Color from '../../components/color/Color'
import SubHeader from '../../components/header/sub-header/SubHeader'
import Price from '../../components/price/Price'
import ShopLayout from '../../components/shop-layout/ShopLayout'
import './Accessory.scss'
const Accessory = () => {
  return (
    <>
      <main className="accessory-container">
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

export default Accessory