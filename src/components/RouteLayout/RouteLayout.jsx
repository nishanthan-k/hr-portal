import React from 'react';
import SideBar from '../SideBar/SideBar';
import RoutePages from '../RoutePages/RoutePages';


function RouteLayout(props) {
    return (
        <div>
            <p>I'm the daddy</p>
            <div>
                <SideBar/>
                <RoutePages />
            </div>
        </div>
    );
}

export default RouteLayout;