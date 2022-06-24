import { useState } from "react";
import "./Search.css"
const Search= (props) => {
    const [search, setSearch] = useState();
    const onClick = e=> {
        props.onSearch(search);
    }
    const onChange = e => {
        setSearch(e.target.value)
    }
    return( 
    <div className="search-box">
        <input type="text" name="search" value={search} onChange={onChange} placeholder="Search a resource" />
        <button className="search-box__btn" onClick={onClick}>Search</button>
    </div>
    );
}
export default Search;