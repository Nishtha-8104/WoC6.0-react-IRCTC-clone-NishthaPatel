import "./home.css";
import React, { useState, useEffect } from "react";


function Header({ selected }) {
  const [home, setHome] = useState('');
  const [bookList, setBookList] = useState('');
  const [profile,setprofile]=useState('');
  useEffect(() => {
    if (selected === 'home') {
      setHome('home');
      setBookList('');
    } else if (selected === 'bookList') {
      setBookList('bookList');
      setHome('');
    }
    else if(selected==='profile'){
      setprofile('profile');
      setHome('');
    }
  }, [selected]);

  return (
    <div className="con">
      <ul className="nav nav-pills">
        <li className="nav-item" key={1}>
          <a href="/home" className={`nav-link active ${home}`} aria-current="page">
            Home
          </a>
        </li>
        <li className="nav-item" key={2}>
          <a href="/booklist" className={`nav-link ${bookList}`}>
            Booklist
          </a>
        </li>
        <li className="nav-item" key={3}>
          <a href="/profile" className={`nav-link ${profile}`}>
            profile
          </a>
        </li>
        <li className="nav-item" key={4}>
          <a href="/aboutus" className="nav-link">
            About Us
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
