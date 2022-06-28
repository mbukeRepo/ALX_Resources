import React from 'react';
import "./Search.css";


export default function Search(props) {
  const onChange = (e) => {
    props.search(e.target.value);
  } 

  return (
    <div className='search-container'>
        <div className="search-section">
                <input type="text" onChange={onChange}  />
        </div>
        <div className="tags-section">
            <div className="tag react">
              <p>React</p>
            </div>
            <div className="tag python">
              <p>Python</p>
            </div>
            <div className="tag css">
              <p>CSS</p>
            </div>
            <div className="tag mysql">
              <p>Mysql</p>
            </div>
        </div>
    </div>
  )
}
