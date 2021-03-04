import React from "react";
import { ObjectType } from "../../App";
import s from './FilterableProductTable.module.css';
import ProductTable from "./ProductTable/ProductTable";
import SearchBar from "./SearchBar/SearchBar";

type FilterableProductTableType = {
    products: Array<ObjectType>;
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
