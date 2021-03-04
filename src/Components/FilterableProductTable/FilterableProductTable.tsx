import React from "react";
import s from './FilterableProductTable.module.css';
import ProductTable from "./ProductTable/ProductTable";
import SearchBar from "./SearchBar/SearchBar";

type FilterableProductTableType = {
    products: object;
}

function FilterableProductTable(props: FilterableProductTableType) {
    return(
        <div className={s.FilterableProductTable}>
            <SearchBar/>
            <ProductTable products={props.products}/>
        </div>
    );
}

export default FilterableProductTable;
