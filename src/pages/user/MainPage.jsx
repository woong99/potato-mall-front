import React from 'react';
import MainVisual from '../../components/user/MainVisual';
import TopSales from '../../components/user/TopSales';
import TopSearch from '../../components/user/TopSearch';

const MainPage = () => {
    return (
        <>
            <MainVisual />
            <section className="mt-3">
                <div className="container mx-auto px-6 flex flex-col md:flex-row">
                    <TopSales />
                    <TopSearch />
                </div>
            </section>
        </>
    );
};

export default MainPage;
