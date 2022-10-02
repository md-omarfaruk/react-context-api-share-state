import React, { useContext, useEffect, useState } from 'react';
import { categoryContext } from '../../App';
import CategoryDetails from './CategoryDetails';

const allProducts = [
                        {name:'Asus', category:'laptop'},{name:'Lenevo', category:'laptop'},{name:'Hp', category:'laptop'},
                        {name:'Apple', category:'mobile'},{name:'Samsung', category:'mobile'},{name:'Nokia', category:'mobile'},
                        {name:'Core', category:'cycle'},{name:'Upland', category:'cycle'},{name:'Foxter', category:'cycle'},
                    ]

const Category = () => {
    const [category] = useContext(categoryContext);

    const [products, setProducts] = useState([]);

    useEffect(()=>{
                const matchedProducts = allProducts.filter(pd => pd.category === category.toLowerCase())
                setProducts(matchedProducts);
             },[category])

    return (
        <div>
            <h2>this is the home child: {category}</h2>
            {
                products.map(pd=><CategoryDetails products = {pd}></CategoryDetails>)
            }
        </div>
    );
};

export default Category;