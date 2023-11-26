import { featureProduct } from "../../data/data";
import { IoBagHandle } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import "./BestSelling.scss";
import { GrNext, GrPrevious } from 'react-icons/gr'
const BestSelling = () => {
  return (
    <>
      <div className="feature-container">
        <div className="feature-product">
          <article className="product-header">
            <h1 className="product-title">best selling</h1>
          </article>
          <div className="btn-next_prev">
            <GrPrevious className="icons"/>
            <GrNext className="icons"/>
            
          </div>
        </div>

        <div className="product-wrapper">
          {featureProduct.map((item, index) => {
            return (
              <div className="product-card" key={index}>
                <article className="article-header">
                  <h6>{item.name}</h6>
                  <p>{item.title}</p>
                </article>
                <figure className="product-image">
                  <img src={item.image} />
                </figure>
                <div className="pricing-box">
                  <span className="price">{item.price}</span>
                  <span className="bag-icon">
                    <IoBagHandle color="#ffffff" />
                    <FaHeart className="heart-icon" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default BestSelling;
