import React, { useContext } from 'react';
import { categoryContext } from '../App';
import Category from './Categories/Category';

const Home = () => {
    const category = useContext(categoryContext);
    return (
        <div>
            <h1>This is home component: {category}</h1>
            <Category></Category>
        </div>
    );
};

export default Home;