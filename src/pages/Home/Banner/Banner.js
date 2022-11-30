import React from 'react';
import { Link } from 'react-router-dom';
import bannerBg from '../../../assests/banner/banner-bg.jpg'
import SignUp from './BannerSignUp/BannerSignUp';

const Banner = () => {
    return (
        <div className="hero" style={{ backgroundImage: `url("${bannerBg}")`, backgroundSize: 'cover', height: '600px' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className='grid md:grid-cols-2 gap-10 '>
                    <div className='flex items-center'>
                        <div className="text-left">
                            <h1 className="mb-5 text-7xl font-bold text-white">Luxury <span className='text-red-600'>Hunt</span></h1>
                            <p className="mb-5 text-white">From luxury hunt you can buy or sell your used super luxury car. We don't charge anything from your buy or sale.If you want buy a fresh super luxury <br /> car then you can  blindly trust us. </p>
                            <button className="btn btn-primary px-7 text-white">Buy Car</button>
                        </div>
                    </div>
                    <div className="max-w-xl hidden md:block">
                        <SignUp></SignUp>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;