import React, { useContext } from 'react';
import { categoryContext } from '../App';

const Header = (props) => {

    const [category, setCategory] = useContext(categoryContext);

    return (
        <div>
            <h1>This is header component: {category}</h1>
            <button onClick ={()=> setCategory('laptop')}>Laptop</button>
            <button onClick ={()=> setCategory('mobile')}>Mobile</button>
            <button onClick ={()=> setCategory('cycle')}>Cycle</button>
        </div>
    );
};

export default Header;