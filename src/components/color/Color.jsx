
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
            colorList.map((curColor,index)=> {
              return (
                <div className='color-picker' key={index}>
                  <button
                  type='button'
                  style={{backgroundColor: curColor}}
                  >{curColor.color}</button>
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