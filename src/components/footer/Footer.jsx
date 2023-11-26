import "./Footer.scss";
import { Link } from "react-router-dom";
import { FaTelegram, FaFacebook, FaInstagram, FaTelegramPlane } from "react-icons/fa";
import Logo from "../../assets/logo/logo.png";
const Footer = () => {
  return (
    <>
      <div className="subcription">
      <article className="subcript-title">
        <h1 className="title">Subscribe to Our Newsletter  -  get a $20 Coupon for your first order! </h1>
      </article>
      
      <div className="subcript-box">
        <input type="text" 
          placeholder="Enter your email address"
        />
        <button>
          <FaTelegramPlane className="icon-airplane" />
        </button>
      </div>
     </div>

      <footer className="footer-container">
        <div className="footer-wrapper">
          <figure className="logo-box">
            <img src={Logo} />

            <div className="footer-title">
              <p>Email:</p>
              <span>year4.webassignment@gmail.com</span>
            </div>

            <div className="social-links">
              <div className="social-icons">
                <FaFacebook />
              </div>
              <div className="social-icons">
                <FaTelegram />
              </div>
              <div className="social-icons">
                <FaInstagram />
              </div>
            </div>
          </figure>
          <div className="category-footer">
            <article>
              <p>Category</p>
            </article>
            <nav className="footer-menu">
              <ul className="footer-list">
                <li>
                  <Link to={"/tvandaudio"}>Tv&Audio</Link>
                </li>
                <li>
                  <Link to={"/smartphones"}>Smartphones</Link>
                </li>
                <li>
                  <Link to={"/laptopandpcs"}>Laptop&Pcs</Link>
                </li>
                <li>
                  <Link to={"/gadgets"}>Gadgets</Link>
                </li>
                <li>
                  <Link to={"/accessory"}>Accessory</Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="category-footer box">
            <article>
              <p>Useful Links</p>
            </article>
            <nav className="footer-menu">
              <ul className="footer-list">
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
                <li>
                  <a href="#wishlist">Wishlist</a>
                </li>
                <li>
                  <a href="#faq">FAQ</a>
                </li>
                <li>
                  <a href="#termandcondition">Term & Condition</a>
                </li>
                <li>
                  <a href="#privacypolicy">Privacy Policy</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="category-footer">
            <article>
              <p>Customer Service</p>
            </article>

            <nav className="footer-menu">
              <ul className="footer-list">
                <li>
                  <a href="#about">My Account</a>
                </li>
                <li>
                  <a href="#contact">My Cart</a>
                </li>
                <li>
                  <a href="#wishlist">Track order</a>
                </li>
                <li>
                  <a href="#faq">Return & Exchange</a>
                </li>
                <li>
                  <a href="#termandcondition">Repair service</a>
                </li>
                <li>
                  <a href="#privacypolicy">Support</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </footer>
      <footer className="copyright">
        <article>
          <p>© Bright and dev 2023 - All Rights Reserved</p>
        </article>

        <div className="payment-box">
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="70"
              height="24"
              viewBox="0 0 70 24"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M25.6667 17.4255H22.4358L20.0129 7.91041C19.8979 7.47272 19.6538 7.08577 19.2946 6.9034C18.3982 6.44509 17.4105 6.08035 16.333 5.89639V5.53006H21.5378C22.2562 5.53006 22.7949 6.08035 22.8847 6.71944L24.1418 13.583L27.3712 5.53006H30.5124L25.6667 17.4255ZM32.3077 17.4255H29.2563L31.7689 5.53006H34.8203L32.3077 17.4255ZM38.7694 8.82364C38.8592 8.18296 39.3979 7.81663 40.0265 7.81663C41.0142 7.72465 42.0901 7.90861 42.988 8.36533L43.5268 5.80419C42.6289 5.43786 41.6411 5.25391 40.7448 5.25391C37.7832 5.25391 35.6282 6.9016 35.6282 9.18839C35.6282 10.9281 37.1547 11.8415 38.2322 12.3918C39.3979 12.9405 39.8469 13.3068 39.7571 13.8555C39.7571 14.6786 38.8591 15.0449 37.9628 15.0449C36.8853 15.0449 35.8078 14.7706 34.8216 14.3123L34.2829 16.875C35.3604 17.3317 36.5261 17.5157 37.6036 17.5157C40.9244 17.6061 42.988 15.9599 42.988 13.4892C42.988 10.3778 38.7694 10.1954 38.7694 8.82364ZM53.6651 17.4255L51.2423 5.53006H48.6399C48.1012 5.53006 47.5624 5.89639 47.3828 6.44509L42.8963 17.4255H46.0375L46.6645 15.6874H50.524L50.8832 17.4255H53.6651ZM49.0893 8.73218L49.9856 13.2154H47.473L49.0893 8.73218Z"
                fill="#172B85"
              />
            </svg>
          </p>
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="20"
              viewBox="0 0 32 20"
              fill="none"
            >
              <path
                d="M20.101 2.342H11.8987V17.0813H20.101V2.342Z"
                fill="#FF5F00"
              />
              <path
                d="M12.4196 9.71164C12.4183 8.29214 12.74 6.89095 13.3603 5.61414C13.9806 4.33734 14.8832 3.21839 15.9999 2.342C14.617 1.25507 12.9563 0.579129 11.2074 0.391427C9.45853 0.203725 7.69213 0.511832 6.1101 1.28055C4.52807 2.04926 3.19423 3.24756 2.26105 4.73848C1.32787 6.2294 0.833008 7.95277 0.833008 9.71164C0.833008 11.4705 1.32787 13.1939 2.26105 14.6848C3.19423 16.1757 4.52807 17.374 6.1101 18.1427C7.69213 18.9114 9.45853 19.2195 11.2074 19.0318C12.9563 18.8441 14.617 18.1682 15.9999 17.0813C14.8832 16.2049 13.9806 15.0859 13.3603 13.8091C12.74 12.5323 12.4183 11.1311 12.4196 9.71164Z"
                fill="#EB001B"
              />
              <path
                d="M31.1663 9.71163C31.1664 11.4705 30.6716 13.1938 29.7385 14.6848C28.8053 16.1757 27.4715 17.374 25.8895 18.1427C24.3075 18.9114 22.5412 19.2195 20.7923 19.0318C19.0435 18.8441 17.3827 18.1682 15.9999 17.0813C17.1156 16.204 18.0176 15.0849 18.6378 13.8083C19.258 12.5317 19.5802 11.1309 19.5802 9.71163C19.5802 8.29236 19.258 6.89161 18.6378 5.61501C18.0176 4.3384 17.1156 3.21928 15.9999 2.342C17.3827 1.25507 19.0435 0.579124 20.7923 0.391424C22.5412 0.203724 24.3075 0.511845 25.8895 1.28057C27.4715 2.04929 28.8053 3.24759 29.7385 4.73851C30.6716 6.22943 31.1664 7.9528 31.1663 9.71163Z"
                fill="#F79E1B"
              />
            </svg>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
