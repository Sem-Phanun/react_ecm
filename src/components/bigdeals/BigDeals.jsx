import { Pagination } from "antd";
import { featureProduct } from "../../data/data";
import { IoBagHandle } from "react-icons/io5";
import { FaHeart } from 'react-icons/fa'
import './BigDeals.scss'

const BigDeals = () => {
  return (
    <>
        <div className="feature-container">
        <div className="feature-product">
          <article className="product-header">
            <h1 className="product-title">Big Deals</h1>
          </article>
          <div className="btn-next_prev">
            <Pagination className="icons" />
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
                    <FaHeart className="heart-icon"/>
                  </span>
                </div>
              </div>
              )
            })}
        </div>
      </div>
    </>
  )
}

export default BigDeals