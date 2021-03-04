import React from "react";
import s from './ProductTable.module.css';

type ProductTableType = {
    product: object;
}

function ProductTable(props: ProductTableType) {
    return(
        <div className={s.productTable}>Table</div>
    );
}
