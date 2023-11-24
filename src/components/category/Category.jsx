import { GrLinkNext } from "react-icons/gr";
import { categoryProduct } from "../../data/data";
import "./Category.scss";
const Category = () => {
  return (
    <>
      <div className="category-container">
        <article className="title-category">
          <h1 className="title">Cateories</h1>
        </article>
        <div className="category-wrapper">
          {categoryProduct.map((category, index) => {
            return (
              <div className="category-box" key={index}>
                <div className="box">
                  <article className="category-name">
                    <h3>{category.name}</h3>
                  </article>
                  <figure className="category-img">
                    <img src={category.image} />
                  </figure>
                  <div className="view-btn">
                    <GrLinkNext className="grLinkNext" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Category;
