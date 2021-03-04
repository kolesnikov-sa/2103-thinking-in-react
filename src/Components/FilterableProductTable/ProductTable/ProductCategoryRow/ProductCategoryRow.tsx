import React from "react";
import s from './ProductCategoryRow.module.css';

type ProductCategoryRowType = {
    category: string;
}

function ProductCategoryRow(props: ProductCategoryRowType) {
    return(
        <div className={s.ProductCategoryRow}>{props.category}</div>
    );
}

export default ProductCategoryRow;
