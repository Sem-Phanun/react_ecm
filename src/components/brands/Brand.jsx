import "./Brand.scss";
import { brand } from "../../data/data";
const Brand = () => {
  return (
    <>
      <div className="brand-container">
        <article className="brand-title">
          <h1>Brands</h1>
        </article>
        <div className="checkbox-container">
          {brand.map((items, index) => {
            return (
              <div className="checkbox" key={index}>
                <input type="checkbox" />
                <label htmlFor="">{items.name}</label>
              </div>
            );
          })}
        </div>

        <div>show more</div>
      </div>
    </>
  );
};

export default Brand;
