import React from "react";
import s from './ProductCategoryRow.module.css';

type ProductCategoryRowType = {
    category: string;
}

function ProductCategoryRow(props: ProductCategoryRowType) {
    return(
        <div className={s.productCategoryRow}>{props.category}</div>
    );
}
