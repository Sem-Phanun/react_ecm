import { Link } from "react-router-dom";
import { shopData } from "../../data/shopData";
import { IoBagHandle } from "react-icons/io5";
import "./ShopLayout.scss";
const ShopLayout = () => {
  return (
    <>
      <div className="containerWrapper">
        <div className="shop-content">
          <article className="shop-title">
            <h1>Shop</h1>
          </article>
          <div className="shop-counter">
            <p>
              showing <span> 1-10 of 30</span>
            </p>
          </div>
        </div>

        <div className="product-wrapper">
          {
            shopData.map((item,index)=> {
              return (
                <Link to={'productDetail'} key={index} className="product-card">
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
            })
          }
        </div>

        <div className="showing-container">
          <article>
            <p>
              showing <span> 1-10 of 30</span>
            </p>
          </article>
          <div className="circle-container">
            <span>prev</span>
            <div className="circle-box">
              1
            </div>
            <div className="circle-box">
              2
            </div>
            <div className="circle-box">
              3
            </div>
            <span>next</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopLayout;
