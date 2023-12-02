
import { colorList } from '../../data/data'
import './Color.scss'
const Color = () => {
  return (
    <>
      <div className="color-container">
        <article className='color-title'>
          <h1>Color</h1>
        </article>
        <div className="color-filter">
          {
            colorList.map((colors,index)=> {
              return (
                <div className='color-picker' key={index}>
                  <button>{colors.color}</button>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default Color