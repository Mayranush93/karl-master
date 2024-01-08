import React from 'react';
import PRODUCTS from '../data/product.json';

function ProductList(props) {
    return (
        <div className="shop_grid_product_area">
            <div className="row">
                {PRODUCTS.map((item) => (
                    <div className="col-12 col-sm-6 col-lg-4 single_gallery_item wow fadeInUpBig"
                         style={{visibility: "visible ", animationDelay: "0.2s", animationName: "fadeInUpBig"}}>
                        <div className="product-img">
                            <img src={item.images} alt={item.name}/>
                            <div className="product-quicview">
                                <a href="#" data-toggle="modal" data-target="#quickview"><i
                                    className="ti-plus"/></a>
                            </div>
                        </div>
                        <div className="product-description">
                            <h4 className="product-price">{item.price}</h4>
                            <p>{item.name}</p>
                            <a href="#" className="add-to-cart-btn">ADD TO CART</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductList;