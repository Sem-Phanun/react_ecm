import { slideList } from "../../data/data";
import { Carousel } from "antd";
import { FaTruck, FaTag } from "react-icons/fa";
import {
  MdVerifiedUser,
  MdOutlineCreditCard,
  MdOutlineSecurity,
} from "react-icons/md";
import "./Home.scss";
import FeatureProduct from "../../components/feature-product/FeatureProduct";
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
      
      <FeatureProduct/>
    </>
  );
};

export default Home;
