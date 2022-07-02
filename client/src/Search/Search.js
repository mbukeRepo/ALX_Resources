import React, {useEffect} from 'react';
import "./Search.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faHeart, faSearch } from '@fortawesome/free-solid-svg-icons'


export default function Search(props) {
  const onKeyPress = (e) => {
    if(e.key === "Enter"){
      console.log("enter pressed");
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
