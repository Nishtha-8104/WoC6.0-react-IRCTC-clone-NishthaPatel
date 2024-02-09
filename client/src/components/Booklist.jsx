import React, { useState, useEffect } from "react";
import Header from "./Header";
import "./booklist.css";
import Footer from "./footer";

async function fetchBookList(username) {
  const response = await fetch("https://irctc-crtv.onrender.com/booklist", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username }),
  });

  const data = await response.json();
  return data.data;
}

function Booklist() {
  const [bookList, setBookList] = useState([]);
  const [isEmpty, setIsempty] = useState(true);

  async function cancelTicket(tid) {
    try {
      const username = localStorage.getItem("username");

      const response = await fetch("https://irctc-crtv.onrender.com/cancel", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, tid }),
      });

      const updatedList = await response.json();

      if (updatedList.data == null) {
        setIsempty(true);
        setBookList(updatedList.data);
      } else {
        setIsempty(false);
        setBookList(updatedList.data);
      }
      
    } catch (err) {
      console.error(err);
    }
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const username = localStorage.getItem("username");
        const data = await fetchBookList(username);

        
        if (data == null) {
          setIsempty(true);
        } else {
          setIsempty(false);
          setBookList(data);
        }

      } catch (error) {
        console.error("Error fetching book list:", error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div>
    <Header selected={'bookList'}/>
     { isEmpty==false && (
      <div className="book">
        {
          <ul className="list">
            {bookList.map((book, index) => (
              <li className="l" key={index}>
                <ul className="li">
                  <li className="list1">Username: {book.username}</li>
                  <li className="list2">Date: {book.date}</li>
                  <li className="list3">Trainnumber: {book.trainnumber}</li>
                  <li className="list4">Source: {book.source}</li>
                  <li className="list5">Destination: {book.destination}</li>
                  <li className="list6"> Departuretime: {book.departuretime}</li>
                  <li className="list7"> Arrivaltime: {book.arrivaltime}</li>
                  <li>
                    <button
                      onClick={() => {
                        cancelTicket(book.bookid);
                      }}
                    >
                      Cancel
                    </button>
                  </li>
                </ul>
                <br />
                <br />
              </li>
            ))}
          </ul>
        }
      </div>
      ) }
      {isEmpty==true && <h1>No Result</h1>}
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Booklist;
