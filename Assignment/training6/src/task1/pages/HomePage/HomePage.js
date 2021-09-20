import React from 'react';
import TopDashboard from '../../components/Dashboard/TopDashboard/TopDashboard';
import Content from "../../components/Dashboard/content/Content";
import BottomDashboard from '../../components/Dashboard/BottomDashboard/BottomDashboard';




const HomePageTask2 = () => {

    return (
       
        <div className="container--home">
            <div>
                <TopDashboard />
                <Content />
                <BottomDashboard />
            </div>
            
        </div>

    );
};

export default HomePageTask2;