import React, {useEffect} from 'react';
import "./Search.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faSearch } from '@fortawesome/free-solid-svg-icons'


export default function Search(props) {
  const onKeyPress = (e) => {
    if(e.key === "Enter"){
      props.onSearch(e.target.value);
    }
  };
  return (
    <div className='search-container'>
        <div className="search-section">
                <FontAwesomeIcon icon={faSearch} />
                <input type="text" onKeyPress={onKeyPress}/>
        </div>
    </div>
  )
}
