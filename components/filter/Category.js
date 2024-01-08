import React from 'react';
import CATEGORY from '../../data/category.json';
import {useLocation, useNavigate} from "react-router-dom";
import queryString from "query-string";


function Category(props) {
    const location = useLocation();
    const navigate = useNavigate();

const handleChange = (categoryId)=>{
    const queryObj = queryString.parse(location.search);
    queryObj.category = categoryId;
    const query = queryString.stringify(queryObj);
    navigate(`/shop?${query}`)
}

    const renderItems = (parenId) => {
        const queryObj = queryString.parse(location.search);
        return CATEGORY.filter(item => item.parentId === parenId).map((c) => (
            <li className="collapsed" key={c.id}>
                <label className={'item'}>
                    <input type={'checkbox'}
                           checked={+queryObj.category === c.id}
                           onChange={()=>handleChange(c.id)} />
                    {c.title}
                </label>
                {+queryObj.category === c.id || getChildren(c.id).includes(+queryObj.category) ? (
                    <ul className="sub-menu collapse show">
                        {renderItems(c.id)}
                    </ul>
                ) : null}


            </li>
        ))
    }

    const getChildren =(parentId)=>{
     let list = [];
     function getId(pId){
         CATEGORY.forEach((category)=>{
             if (category.parentId === pId){
                 list.push(category.id);
                 getId(category.id)
             }
         })
     }
     getId(parentId);
        console.log(list);
        return list

    }
    return (
        <div className="widget catagory mb-50">
            <div className="nav-side-menu">
                <h6 className="mb-0">Catagories</h6>
                <div className="menu-list">
                    <ul id="menu-content2" className="menu-content collapse out">
                        {renderItems()}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Category;
