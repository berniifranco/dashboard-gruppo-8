import React from 'react';
import AppDashboard from './AppDashboard';
import ContentRow1 from './ContentRow1';
import ContentRow2 from './ContentRow2';

function BeginPage () {
    return (
        <div className="container-fluid">
            <AppDashboard />
			<ContentRow1 />
			<ContentRow2 />
        </div>
    )
}

export default BeginPage;