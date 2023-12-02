import SubHeader from '../../components/header/sub-header/SubHeader'
import Brand from '../../components/brands/Brand'
import Price from '../../components/price/Price'
import Color from '../../components/color/Color'
import Rating from '../../components/rating/Rating'
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
          <Rating/>
        </aside>
      </main>
    </>
  )
}

export default LaptopAndPcs