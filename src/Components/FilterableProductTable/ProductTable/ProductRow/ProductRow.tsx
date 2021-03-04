import React from "react";
import s from './ProductRow.module.css';

type ProductRowType = {
    name: string;
    price: string;
}

function ProductRow(props: ProductRowType) {
    return(
        <div className={s.productRow}>
            <div className={s.productRow__productName}>{props.name}</div>
            <div className={s.productRow__productPrice}>{props.price}</div>
        </div>
    );
}
