import React, {ReactElement} from "react";
import s from './ProductTable.module.css';
import ProductCategoryRow from "./ProductCategoryRow/ProductCategoryRow";
import ProductRow from "./ProductRow/ProductRow";
import {ObjectType} from "../../../App";

type ProductTableType = {
    products: Array<ObjectType>;
}

function ProductTable(props: ProductTableType) {
    const rows: Array<ReactElement> = [];
    let lastCategory: string = '';
    props.products.forEach((product) => {
        if (product.category !== lastCategory) {
            rows.push(<ProductCategoryRow category={product.category}/>);
            rows.push(<ProductRow name={product.name} price={product.price} stocked={product.stocked}/>)
            lastCategory = product.category;
        } else {
            rows.push(<ProductRow name={product.name} price={product.price} stocked={product.stocked}/>)
        }
    });
    return (
        <div className={s.ProductTable}>
            <div className={s.ProductTable__Title}>
                <div className={s.ProductTable__TitleText}>Name</div>
                <div className={s.ProductTable__TitleText}>Price</div>
            </div>
            {rows}
        </div>
    );
}

export default ProductTable;
