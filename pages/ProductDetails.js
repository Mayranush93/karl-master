import React, {Component} from 'react';
import Wrapper from "../components/Wrapper";
import ProductList from "../components/ProductList";

const SLIDER = [
    'img/product-img/product-9.jpg',
    'img/product-img/product-2.jpg',
    'img/product-img/product-3.jpg',
    'img/product-img/product-4.jpg'
]

class ProductDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgSlide: 0,
            activeIndex: 0
        }
    }
// interval = setInterval(()=>{}, 3000)
    handleClick = (ev, index) => {
        let img = (ev.target.alt) * 1;
        this.setState({
            imgSlide: img,
            activeIndex: index
        })
    }

    render() {
        const {activeIndex} = this.state;
        return (
            <Wrapper>
                <div className="breadcumb_area">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <ol className="breadcrumb d-flex align-items-center">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item"><a href="#">Dresses</a></li>
                                    <li className="breadcrumb-item active">Long Dress</li>
                                </ol>
                                <a href="#" className="backToHome d-block"><i
                                    className="fa fa-angle-double-left"></i> Back
                                    to Category</a>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="single_product_details_area section_padding_0_100">
                    <div className="container">
                        <div className="row">

                            <div className="col-12 col-md-6">
                                <div className="single_product_thumb">
                                    <div id="product_details_slider" className="carousel slide" data-ride="carousel">

                                        <ol className="carousel-indicators">
                                            {SLIDER.map((item, index) => (
                                                <li key={index} className={activeIndex === index ? "active": null}>
                                                    <a// href={item}
                                                        onClick={(ev) => this.handleClick(ev, index)}>
                                                        <img className="d-block w-100" src={item} alt=""/>
                                                    </a>
                                                </li>
                                            ))}

                                        </ol>

                                        <div className="carousel-inner">

                                            <div className="carousel-item active">
                                                <img className="d-block w-100" src={SLIDER[activeIndex]} alt="Fourth slide"/>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-6">
                                <div className="single_product_desc">

                                    <h4 className="title"><a href="#">Long Yellow Dress</a></h4>

                                    <h4 className="price">$ 39.99</h4>

                                    <p className="available">Available: <span className="text-muted">In Stock</span></p>

                                    <div className="single_product_ratings mb-15">
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star-o" aria-hidden="true"></i>
                                    </div>

                                    <div className="widget size mb-50">
                                        <h6 className="widget-title">Size</h6>
                                        <div className="widget-desc">
                                            <ul>
                                                <li><a href="#">32</a></li>
                                                <li><a href="#">34</a></li>
                                                <li><a href="#">36</a></li>
                                                <li><a href="#">38</a></li>
                                                <li><a href="#">40</a></li>
                                                <li><a href="#">42</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <form className="cart clearfix mb-50 d-flex" method="post">
                                        <div className="quantity">
                                        <span className="qty-minus"
                                              onClick="var effect = document.getElementById('qty'); var qty = effect.value; if( !isNaN( qty ) &amp;&amp; qty > 1 ) effect.value--;return false;"><i
                                            className="fa fa-minus" aria-hidden="true"></i></span>
                                            <input type="number" className="qty-text" id="qty" step="1" min="1" max="12"
                                                   name="quantity" value="1"/>
                                            <span className="qty-plus"
                                                  onClick="var effect = document.getElementById('qty'); var qty = effect.value; if( !isNaN( qty )) effect.value++;return false;"><i
                                                className="fa fa-plus" aria-hidden="true"></i></span>
                                        </div>
                                        <button type="submit" name="addtocart" value="5"
                                                className="btn cart-submit d-block">Add to cart
                                        </button>
                                    </form>

                                    <div id="accordion" role="tablist">
                                        <div className="card">
                                            <div className="card-header" role="tab" id="headingOne">
                                                <h6 className="mb-0">
                                                    <a data-toggle="collapse" href="#collapseOne" aria-expanded="true"
                                                       aria-controls="collapseOne">Information</a>
                                                </h6>
                                            </div>

                                            <div id="collapseOne" className="collapse show" role="tabpanel"
                                                 aria-labelledby="headingOne" data-parent="#accordion">
                                                <div className="card-body">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                                                        pharetra tempor so dales. Phasellus sagittis auctor gravida.
                                                        Integ
                                                        er bibendum sodales arcu id te mpus. Ut consectetur lacus.</p>
                                                    <p>Approx length 66cm/26" (Based on a UK size 8 sample) Mixed
                                                        fibres</p>
                                                    <p>The Model wears a UK size 8/ EU size 36/ US size 4 and her height
                                                        is
                                                        5'8"</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" role="tab" id="headingTwo">
                                                <h6 className="mb-0">
                                                    <a className="collapsed" data-toggle="collapse" href="#collapseTwo"
                                                       aria-expanded="false" aria-controls="collapseTwo">Cart
                                                        Details</a>
                                                </h6>
                                            </div>
                                            <div id="collapseTwo" className="collapse" role="tabpanel"
                                                 aria-labelledby="headingTwo" data-parent="#accordion">
                                                <div className="card-body">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                        Explicabo
                                                        quis in veritatis officia inventore, tempore provident
                                                        dignissimos
                                                        nemo, nulla quaerat. Quibusdam non, eos, voluptatem
                                                        reprehenderit
                                                        hic nam! Laboriosam, sapiente! Praesentium.</p>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
                                                        magnam laborum eaque.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" role="tab" id="headingThree">
                                                <h6 className="mb-0">
                                                    <a className="collapsed" data-toggle="collapse"
                                                       href="#collapseThree"
                                                       aria-expanded="false"
                                                       aria-controls="collapseThree">shipping &amp; Returns</a>
                                                </h6>
                                            </div>
                                            <div id="collapseThree" className="collapse" role="tabpanel"
                                                 aria-labelledby="headingThree" data-parent="#accordion">
                                                <div className="card-body">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
                                                        quo
                                                        sint repudiandae suscipit ab soluta delectus voluptate, vero
                                                        vitae,
                                                        tempore maxime rerum iste dolorem mollitia perferendis
                                                        distinctio.
                                                        Quibusdam laboriosam rerum distinctio. Repudiandae fugit odit,
                                                        sequi
                                                        id!</p>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
                                                        qui
                                                        maxime consequatur laudantium temporibus ad et. A optio
                                                        inventore
                                                        deleniti ipsa.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="you_may_like_area clearfix">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="section_heading text-center">
                                    <h2>related Products</h2>
                                </div>
                            </div>
                        </div>
                        <ProductList/>
                    </div>
                </section>
            </Wrapper>
        );
    }
}

export default ProductDetails;