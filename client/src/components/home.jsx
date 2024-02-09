import React, { useState } from "react";
import "./home.css";
import imageSrc from "./trainphoto.jpg";
import imageSrc1 from "./user_friendly.jpg";
import imageSrc2 from "./Extensive Train Options.jpg";
import imageSrc3 from "./Real Time Availability.png";
import imageSrc4 from "./Personalized Account.png";
import DatePicker from "react-datepicker";
import PayDetails from "./payDetails";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./footer";
import imagea from "./arrow.jpeg";

function Home() {
  const name = localStorage.getItem("username");
  const [date, setDate] = useState(new Date());
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showPaymentDetails, setShowPaymentDetails] = useState(false);
  const [trainid, settrainid] = useState();
  const [notfound, setNotfound] = useState(false);
  const navigate = useNavigate();

  function handleShowPaymentDetails(tid) {
    setShowPaymentDetails(true);
    settrainid(tid);
  }

  async function handleSearch() {
    try {
      console.log(date);
      const response = await fetch("https://irctc-crtv.onrender.com/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ source, destination, date }),
      });

      if (response.ok) {
        const clonedResponse = response.clone(); 
        const results = await clonedResponse.json();
        console.log(results.data);
        setSearchResults(results.data || []);

        if (searchResults.length === 0) setNotfound(true);
      } else {
        console.log("Error in fetching data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <div>
      <Header selected={'home'}/>
      <div className="welcome">
        <h1>Welcome</h1>
        <p>
          Revolutionize your travel experience with our train travel
          website,offering seamless booking,real-time updates,and current
          itineraries.Explore the world by rail,where every journey is a
          story,waiting to be written.{" "}
        </p>
        <img src={imageSrc} alt="Description of the image" />
      </div>
      <div className="b1">
        <h1 style={{ marginBottom: 0 + "px" }}>Select Your Journey</h1>

        <br />
        <div className="from-to">
          <label>From:</label>
          <input
            type="text"
            placeholder="Your Location"
            value={source}
            onChange={(e) => setSource(e.target.value)}
          ></input>
          <br />
          <br />
          <img src={imagea} alt="Description of the image" className="i" />
          <br />
          <br />
          <label>To :</label>
          <br />
          <input
            type="text"
            placeholder="Destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          ></input>
        </div>

        <br />
      </div>
      <div className="b2">
        <h2 style={{ marginTop: 0 + "px" }}>Date</h2>
        <DatePicker selected={date} onChange={(date) => setDate(date)} />
      </div>
      <br />
      <div className="b3">
        <label>All Classes</label>
        <br />
        <select>
          <option value="All classes">All Classes</option>
          <option value="second siting">Second Sitting(2S)</option>
          <option value="Ac 3 tier">AC 3 Tier(3A)</option>\
          <option value="ac chair car">AC Chair Car(CC)</option>
          <option value="exec. chair car">Exec. Chair Car(Ec)</option>
        </select>
      </div>
      <br />
      <div className="b4">
        <label>Categories</label>
        <br />
        <select>
          <option value="general">GENERAL</option>
          <option value="ladies">LADIES</option>
          <option value="lower berth/sr.citizen">
            LOWER BERTH/SR. CITIZEN
          </option>
          <option value="person with disability">PERSON WITH DISABILITY</option>
          <option value="duty pass">DUTY PASS</option>
          <option value="tatkal">TATKAL</option>
        </select>
      </div>
      <br />
      <button className="search" onClick={handleSearch}>
        SEARCH
      </button>
      {searchResults.length > 0 && (
        <div className="b5">
          <h2>Search Results</h2>
          <ul>
            {searchResults.map((result) => (
              <div>
                <li key={result.tid}>
                  Train Number: {result.trainnumber}, Source: {result.source},
                  Destination: {result.destination},Departuretime: {result.departuretime},Arrivaltime: {result.arrivaltime}
                  <br />
                  <button onClick={() => handleShowPaymentDetails(result.tid)}>
                    Book
                  </button>
                </li>
              </div>
            ))}
          </ul>
        </div>
      )}

      {searchResults.length === 0 && notfound && <h3>Not found😕</h3>}
      {showPaymentDetails && <PayDetails tid={trainid} log={name} />}
      <br />
      <br />
      <div  className="h">
      <h2 className="heading1">Our expertise</h2>
      </div>
      <div className="b6 expertise-grid">
        {/* <h2>Our Expertise</h2> */}
        <div className="user">
        <img src={imageSrc1} alt="Description of the image" />
          <h2>User-friendly Interface</h2>
          <p>
            Our app boasts an incredibly intuitive and -friendly interface,
            ensuring that the process of searching,selecting and booking train
            tickets is a breeze. With a clean and organized designs,s can
            navigate effortlessly,making their booking experience enjoyable and
            efficient.
          </p>
        </div>
        <div className="b7">
        <img src={imageSrc2} alt="Description of the image" />
          <h2>Extensive Train Options</h2>
          <p>
            Gain access to an extensive database of train schedules and
            routes,providing s with a comprehensive list of options.Our app's
            advanced filtering and sorting features empower s to quickly find
            the most suitable trains based on their preference,ensuring a
            tailored and convenient experience.
          </p>
        </div>
        <div className="b8">
        <img src={imageSrc3} alt="Description of the image" />
          <h2>Real Time Availability</h2>
          <p>
            Stay informed by real-time updates on seat availability and ticket
            status. Recieve instant confirmation for booked tickets, eliminating
            any uncertainty and allowing s to plan their journey with
            confidence.
          </p>
        </div>
        <div className="b9">
        <img src={imageSrc4} alt="Description of the image" />
          <h2>Personalized Account</h2>
          <p>
            Enjoy the benefits of a Personalized account,allowing for quick and
            efficient booking. Save preference,access booking history, and
            tailor the app to individual needs,providing a seamlessm and
            Personalized experience for every .
          </p>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
    
  );
}

export default Home;
