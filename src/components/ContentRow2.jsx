import React from 'react';
import LastProduct from './LastProduct';
import Categories from './Categories';
import ProductList from './ProductList';

function ContentRow2 () {
    return (
        <div className="row">
            <LastProduct />
            <ProductList />
            <Categories />
        </div>
    )
}

export default ContentRow2;