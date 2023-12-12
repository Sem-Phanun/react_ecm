
import { featureProduct } from "../../data/data";
import { IoBagHandle } from "react-icons/io5";
import { FaHeart } from 'react-icons/fa'
import { GrNext, GrPrevious } from "react-icons/gr";
import "./FeatureProduct.scss";
import { Link } from "react-router-dom";
const FeatureProduct = () => {
  return (
    <>
      <div className="feature-container">
        <div className="feature-product">
          <article className="product-header">
            <h1 className="product-title">feature products</h1>
          </article>
          <div className="btn-next_prev">
            <GrPrevious className="icons"/>
            <GrNext className="icons"/>
            
          </div>
        </div>

        <div className="product-wrapper">
          {featureProduct.map((item, index) => {
            return (
              <Link to={'/productDetail'} key={index} className="product-card">
                <article className="article-header">
                  <h6>{item.name}</h6>
                  <p>{item.description}</p>
                </article>
                <figure className="product-image">
                  <img src={item.image} />
                </figure>
                <div className="pricing-box">
                  <span className="price">{item.price}</span>
                  <span className="bag-icon">
                    <IoBagHandle color="#ffffff" />
                  </span>
                </div>
              </Link>
              )
            })}
        </div>
      </div>
    </>
  );
};

export default FeatureProduct;
