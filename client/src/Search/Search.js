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
            <div className="tag react" onClick={() => props.search("react", "tag")}>
              <p>React</p>
            </div>
            <div className="tag python" onClick={() => props.search("python", "tag")}>
              <p>Python</p>
            </div>
            <div className="tag css" onClick={() => props.search("css", "tag")}>
              <p>CSS</p>
            </div>
            <div className="tag mysql" onClick={() => props.search("mysql", "tag")}>
              <p>Mysql</p>
            </div>
             <div className="tag flask" onClick={() => props.search("flask", "tag")}>
              <p>Flask</p>
            </div>
            <div className="tag c" onClick={() => props.search("c", "tag")}>
              <p>Flask</p>
            </div>
        </div>
    </div>
  )
}
