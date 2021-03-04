import React from "react";
import s from './ProductTable.module.css';
import ProductCategoryRow from "./ProductCategoryRow/ProductCategoryRow";
import ProductRow from "./ProductRow/ProductRow";

type ProductTableType = {
    products: object;
}

function ProductTable(props: ProductTableType) {
    return (
        <div className={s.ProductTable}>
            <div className={s.ProductTable__Title}>
                <div className={s.ProductTable__TitleText}>Name</div>
                <div className={s.ProductTable__TitleText}>Price</div>
            </div>
            <ProductCategoryRow category={'abc'}/>
            <ProductRow name={'aaa'} price={'bbb'}/>
            <ProductRow name={'aaa'} price={'bbb'}/>
            <ProductCategoryRow category={'abc'}/>
            <ProductRow name={'aaa'} price={'bbb'}/>
            <ProductRow name={'aaa'} price={'bbb'}/>
        </div>
    );
}

export default ProductTable;
