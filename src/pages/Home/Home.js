import React from 'react';
import AdvertiseItem from './AdvertiseItem/AdvertiseItem';
import Banner from './Banner/Banner';
import Category from './Category/Category';
import HomeCars from './HomeCars/HomeCars';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AdvertiseItem></AdvertiseItem>
            <Category></Category>
            <HomeCars></HomeCars>
        </div>
    );
};

export default Home;