
import Brand from '../../components/brands/Brand'
import Color from '../../components/color/Color'
import SubHeader from '../../components/header/sub-header/SubHeader'
import Price from '../../components/price/Price'
import Rating from '../../components/rating/Rating'
import './TvAndAudio.scss'
const TvAndAudio = () => {
  return (
    <>
      <main className="tv_and_audio-container">
        <aside className="asideContainer">
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

export default TvAndAudio