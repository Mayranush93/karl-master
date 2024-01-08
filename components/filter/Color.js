import React from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import queryString from "query-string";

const color = [
    {"id": 1, "color": "gray", "count": 3},
    {"id": 2, "color": "red", "count": 25},
    {"id": 3, "color": "yellow", "count": 112},
    {"id": 4, "color": "green", "count": 72},
    {"id": 5, "color": "teal", "count": 9},
    {"id": 6, "color": "cyan", "count": 29}
]

function Color(props) {
    const navigate = useNavigate();
    const location = useLocation();

    const handleClick = (color) => {
      const queryObj = queryString.parse(location.search);
      queryObj.color = color;
      const query = queryString.stringify(queryObj);
      navigate(`/shop/?${query}`)
    }
    return (
        <div className="widget color mb-70">
            <h6 className="widget-title mb-30">Filter by Color</h6>
            <div className="widget-desc">
                <ul className="d-flex justify-content-between">
                    {
                        color.map((item) => (
                            <li key={item.id} className={item.color}>
                                <a onClick={()=>handleClick(item.color)}>
                                    <span>{item.count}</span></a></li>
                        ))
                    }


                </ul>
            </div>
        </div>
    );
}

export default Color;