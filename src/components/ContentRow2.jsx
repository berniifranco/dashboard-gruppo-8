import React from 'react';
import LastProduct from './LastProduct';
import Categories from './Categories';
import ProductList from './ProductList';
import LasUser from './LastUser';

function ContentRow2 () {
    return (
        <div className="row">
            <LastProduct />
            <LasUser />
            <ProductList />
            <Categories />
        </div>
    )
}

export default ContentRow2;