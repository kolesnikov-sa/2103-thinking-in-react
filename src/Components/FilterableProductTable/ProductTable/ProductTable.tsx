import React from "react";
import s from './ProductTable.module.css';
import ProductCategoryRow from "./ProductCategoryRow/ProductCategoryRow";
import ProductRow from "./ProductRow/ProductRow";
import {ObjectType} from "../../../App";

type ProductTableType = {
    products: Array<ObjectType>;
}

function ProductTable(props: ProductTableType) {
    return (
        <div className={s.ProductTable}>
            <div className={s.ProductTable__Title}>
                <div className={s.ProductTable__TitleText}>Name</div>
                <div className={s.ProductTable__TitleText}>Price</div>
            </div>
            <ProductCategoryRow category={props.products[0].category}/>
            <ProductRow name={props.products[0].name} price={props.products[0].price} stocked={props.products[0].stocked}/>
            <ProductRow name={props.products[1].name} price={props.products[1].price} stocked={props.products[1].stocked}/>
            <ProductRow name={props.products[2].name} price={props.products[2].price} stocked={props.products[2].stocked}/>
            <ProductCategoryRow category={props.products[3].category}/>
            <ProductRow name={props.products[3].name} price={props.products[0].price} stocked={props.products[3].stocked}/>
            <ProductRow name={props.products[4].name} price={props.products[1].price} stocked={props.products[4].stocked}/>
            <ProductRow name={props.products[5].name} price={props.products[2].price} stocked={props.products[5].stocked}/>
        </div>
    );
}

export default ProductTable;
