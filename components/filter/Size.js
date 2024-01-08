import React from 'react';

import queryString from "query-string";
import {useLocation, useNavigate} from "react-router-dom";

const size = ["XS", "S", "M", "L", "XL", "XXL"]

function Size(props) {
    const navigate = useNavigate();
    const location = useLocation();


    const handleClick = (s) => {
        const queryObj = queryString.parse(location.search)
        // console.log(queryObj)
        queryObj.size =s;
        // console.log(queryObj)
        const query = queryString.stringify(queryObj);
        // console.log(query)//size=S
        navigate(`/shop/?${query}`)//shop?size=L
    }

    return (
        <div className="widget size mb-50">
            <h6 className="widget-title mb-30">Filter by Size</h6>
            <div className="widget-desc">
                <ul className="d-flex justify-content-between">
                    {size.map((s, index) => (
                        <li key={index}><a onClick={() => handleClick(s)}>{s}</a></li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Size;