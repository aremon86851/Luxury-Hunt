import React from 'react';
import Banner from './Banner/Banner';
import Category from './Category/Category';
import HomeCars from './HomeCars/HomeCars';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <HomeCars></HomeCars>
        </div>
    );
};

export default Home;