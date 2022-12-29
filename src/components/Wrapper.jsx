import React from 'react';
import Sidebar from './Sidebar';
import ContentWrapper from './ContentWrapper';

function Wrapper () {
    return (
        <div id='wrapper'>
            <Sidebar />
            <ContentWrapper />
        </div>
    )
}

export default Wrapper