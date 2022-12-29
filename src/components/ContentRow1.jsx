import React from 'react';
import ProductsInDB from './ProductsInDB';
import AmmountInProducts from './AmmountInProducts';
import Users from './Users';

function ContentRow1 () {
    return (
        <div className="row">
            <ProductsInDB />
            <AmmountInProducts />
            <Users />
        </div>
    )
}

export default ContentRow1;