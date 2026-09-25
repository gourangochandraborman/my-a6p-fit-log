import React from 'react';
// import homepage from '/page';
import Card from '../components/Card';
import Banner from '../components/Banner.jsx'

const page = () => {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-[30]">
           <Banner></Banner>
            <Card></Card>
        </div>
    );
};

export default page;