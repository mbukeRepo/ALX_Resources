import React, {useState} from 'react';


export default function Search() {
  const [text, setText] = useState("");
  return (
    <div className='search-container'>
        <div className="search-section">
            <div className="search-box">
                <input type="text"  />
            </div>
            <div className="submit-button">
                <input type="submit" value="Search"  />
            </div>
        </div>
        <div className="tags-section">

        </div>
    </div>
  )
}
