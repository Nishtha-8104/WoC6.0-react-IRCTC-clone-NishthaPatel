import React from "react";
import Header from "./Header";
import Footer from "./footer";
import "./about.css";

function AboutUs() {
  return (
    <div>
      <Header />
      <div className="about-container">
        <h1>About Us</h1>
        <p>
          Welcome to our train travel website! We aim to revolutionize your travel experience by offering seamless booking, real-time updates, and current itineraries. Explore the world by rail, where every journey is a story waiting to be written.
        </p>
        <p>
          Our team is dedicated to providing you with the best travel experience possible. Whether you're planning a weekend getaway or a cross-country adventure, we're here to help you every step of the way.
        </p>
        <h2>Our Mission</h2>
        <p>
          Our mission is to make train travel accessible and enjoyable for everyone. We strive to provide a user-friendly platform that makes booking tickets, checking schedules, and managing your journey as easy as possible.
        </p>
        <h2>Contact Us</h2>
        <p>
          Have questions or feedback? We'd love to hear from you! Feel free to contact our customer support team at support@railway.com or give us a call at 1-800-123-4567.
        </p>
      </div>
      <div>
      <Footer />
      </div>
    </div>
  );
}

export default AboutUs;
