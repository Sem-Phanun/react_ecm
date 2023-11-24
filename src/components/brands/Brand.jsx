import "./Brand.scss";
import Gama from "../../assets/brands/Gama.svg";
import TECHNOVA from "../../assets/brands/TECHNOVA.svg";
import Indiezone from "../../assets/brands/indiezone.svg";
import Tracic from "../../assets/brands/TRACIC.svg";
import Gomezbuzz from "../../assets/brands/gomezbuzz.svg";
import Shopania from "../../assets/brands/Shopania.svg";
import iMade from "../../assets/brands/iMADE.svg";
import upside from "../../assets/brands/upside.svg";
import wofact from "../../assets/brands/wofact.svg";
import gamerzone from "../../assets/brands/gamerzone.svg";

const Brand = () => {
  return (
    <>
      <main className="brand-container">
        <div className="brand-list">
          <div className="brand-box">
            <figure className="brand-img">
              <img src={Gama} />
            </figure>
          </div>

          <div className="brand-box">
            <figure className="brand-img">
              <img src={TECHNOVA} />
            </figure>
          </div>

          <div className="brand-box">
            <figure className="brand-img">
              <img src={Indiezone} />
            </figure>
          </div>

          <div className="brand-box">
            <figure className="brand-img">
              <img src={Tracic} />
            </figure>
          </div>

          <div className="brand-box">
            <figure className="brand-img">
              <img src={Gomezbuzz} />
            </figure>
          </div>

          <div className="brand-box">
            <figure className="brand-img">
              <img src={Shopania} />
            </figure>
          </div>

          <div className="brand-box">
            <figure className="brand-img">
              <img src={iMade} />
            </figure>
          </div>

          <div className="brand-box">
            <figure className="brand-img">
              <img src={upside} />
            </figure>
          </div>

          <div className="brand-box">
            <figure className="brand-img">
              <img src={wofact} />
            </figure>
          </div>

          <div className="brand-box">
            <figure className="brand-img">
              <img src={gamerzone} />
            </figure>
          </div>
        </div>
      </main>
    </>
  );
};

export default Brand;
