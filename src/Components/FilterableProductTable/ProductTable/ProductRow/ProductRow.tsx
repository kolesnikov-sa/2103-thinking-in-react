import React from "react";
import s from './ProductRow.module.css';

type ProductRowType = {
    name: string;
    price: string;
    stocked: boolean;
}

function ProductRow(props: ProductRowType) {
    if (props.stocked === true) {
        return (
            <div className={s.ProductRow}>
                <div className={s.ProductRow__ProductData}>{props.name}</div>
                <div className={s.ProductRow__ProductData}>{props.price}</div>
            </div>
        )
    } else {
        return (
            <div className={`${s.ProductRow} ${s.ProductRow_OutOfStock}`}>
                <div className={s.ProductRow__ProductData}>{props.name}</div>
                <div className={s.ProductRow__ProductData}>{props.price}</div>
            </div>
        );
    }
}

export default ProductRow;
