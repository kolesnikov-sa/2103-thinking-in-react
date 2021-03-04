import React from "react";
import s from './SearchBar.module.css';

function SearchBar() {
    return (
        <div className={s.SearchBar}>
            <div className={s.SearchBar__SearchField}><input type={"text"} value={"Search..."}/></div>
            <div className={s.SearchBar__SearchOption}>
                <input className={s.SearchBar__SearchOptionBox} type={"checkbox"} id={"searchOption"}/>
                <label className={s.SearchBar__SearchOptionText} htmlFor={"searchOption"}>Only show products in
                    stock</label>
            </div>
        </div>
    );
}

export default SearchBar;
