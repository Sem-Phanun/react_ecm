
import { priceList } from '../../data/data'
import "./Price.scss";
const Price = () => {
  return (
    <>
      <div className="price-container">
        <article className="price-title">
          <h1>Price</h1>
        </article>
        <div className="checkbox-container">
          {
            priceList.map((prices,index)=> {
              return (
                <div className='checkbox' key={index}>
                  <input type="checkbox" />
                  <label htmlFor="">{prices.price}</label>
                </div>
              )
            })
          }
        </div>

        <div className="checkbox1">
          <input type="checkbox" />
          <label htmlFor="">Interval</label>
        </div>

        <div className="progress">
          <input type="range" min="6" max="100"/>
          <span>price: $6 - $13000 </span>
        </div>
      </div>
    </>
  );
};

export default Price;
