import React from 'react';
import Wrapper from "../components/Wrapper";
import Filter from "../components/Filter";
import ProductList from "../components/ProductList";
import Pagination from "../components/Pagination";

function Shop(props) {
    return (
        <Wrapper>
            <section className="shop_grid_area section_padding_100">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-4 col-lg-3">
                           <Filter/>
                        </div>

                        <div className="col-12 col-md-8 col-lg-9">
                          <ProductList/>
                           <Pagination/>
                        </div>
                    </div>
                </div>
            </section>
        </Wrapper>
    );
}

export default Shop;