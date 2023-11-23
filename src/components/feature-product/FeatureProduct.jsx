import React from "react";
import './FeatureProduct.scss'
import { featureProduct } from '../../data/data'
import { GrNext, GrPrevious } from 'react-icons/gr'
const FeatureProduct = () => {
  return (
    <>
      <div className="feature-product">
        <article className="product-header">
            <h1 className="product-title">feature products</h1>
            <div className="btn-next_prev">
                <GrPrevious />
                <GrNext />
                
            </div>
        </article>
      </div>
    </>
  );
};

export default FeatureProduct;
