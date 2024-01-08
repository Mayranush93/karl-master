import React from 'react';
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import ProductDetails from "./pages/ProductDetails";

function App(props) {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/shop'} element={<Shop/>}/>
                <Route path={'/card'} element={<Cart/>}/>
                <Route path={'/checkout'} element={<Checkout/>}/>
                <Route path={'/product-details'} element={<ProductDetails/>}/>
                <Route path={'*'} element={<Navigate to={'/'}/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;