import { slideList } from "../../data/data";
import JBL from '../../assets/tvandaudio/JBL.png'
import Controller from '../../assets/gadgets/controller.png'
import { Carousel } from "antd";
import { FaTruck, FaTag } from "react-icons/fa";
import {
  MdVerifiedUser,
  MdOutlineCreditCard,
  MdOutlineSecurity,
} from "react-icons/md";
import "./Home.scss";
import FeatureProduct from "../../components/feature-product/FeatureProduct";
import Category from "../../components/category/Category";
import BestSelling from "../../components/bestselling/BestSelling";
import BigDeals from "../../components/bigdeals/BigDeals";
import Brand from "../../components/brands/Brand";
import ProductList from "../../components/productList/ProductList";
const Home = () => {
  return (
    <>
      {/* slider  */}
      <div className="slide-container">
        <Carousel autoplay autoplaySpeed={3000} className="slide-wrapper">
          {slideList.map((item, index) => {
            return (
              <div className="content-wrapper" key={index}>
                <div className="content-box">
                  <article className="title-box">
                    <h1 className="title">{item.title}</h1>
                    <button className="btn">{item.button}</button>
                  </article>
                  <figure className="image-box">
                    <img src={item.image} />
                  </figure>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>

      {/* feature icons */}
      <div className="feature-container">
        <div className="feature-icons">
          <li>
            <MdVerifiedUser className="icon" />
            <li className="list">
              <span>Guanrantee</span>
              <p>24 Months</p>
            </li>
          </li>
          <li>
            <MdOutlineCreditCard className="icon credit_card" />
            <li className="list">
              <span>Rate Paying</span>
              <p>4-12 Months</p>
            </li>
          </li>
          <li>
            <MdOutlineSecurity className="icon security" />
            <li className="list">
              <span>Payment</span>
              <p>Secured</p>
            </li>
          </li>
          <li>
            <FaTruck className="icon truck" />
            <li className="list">
              <span>Free dellivery</span>
              <p>from $100</p>
            </li>
          </li>
          <li>
            <FaTag className="icon tag" />
            <li className="list">
              <span>Brand</span>
              <p>Only Top</p>
            </li>
          </li>
        </div>
      </div>
      
      {/* product feature */}
      <FeatureProduct/>

      {/* Category */}
      <Category/>
      
      {/* best selling  */}
      <BestSelling/>

      {/* advertised */}
      <div className="advertised-container">
        <div className="advertised-wrapper">
          <div className="advertised-content">
            <article className="advertised-title">
              <h1>PORTABLE SPEAKERS COLLECTION 2023</h1>
            </article>
            <figure className="ads-box">
              <img src={JBL}/>
            </figure>
          </div>

          <div className="advertised-content">
            <article>
              <h1>ALL ACCESSORIES FOR GAMERS</h1>
            </article>
            <figure className="ads-box box1">
              <img src={Controller}/>
            </figure>
          </div>
        </div>
      </div>
      {/* big deals */}
      <BigDeals/>

      {/* brands */}
      <Brand/>

      {/* product list */}
      <ProductList/>
    </>
  );
};

export default Home;
