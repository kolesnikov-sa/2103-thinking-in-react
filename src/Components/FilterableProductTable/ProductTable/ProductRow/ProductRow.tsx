import React from "react";
import s from './ProductRow.module.css';

type ProductRowType = {
    name: string;
    price: string;
}

function ProductRow(props: ProductRowType) {
    return(
        <div className={s.ProductRow}>
            <div className={s.ProductRow__ProductData}>{props.name}</div>
            <div className={s.ProductRow__ProductData}>{props.price}</div>
        </div>
    );
}

export default ProductRow;
