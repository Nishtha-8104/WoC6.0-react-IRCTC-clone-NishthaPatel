import {React,useState} from 'react';
import './Profile.css';
import Header from "./Header";
import './Profile.css';
import ProfileImage from './profile.jpeg'; 
import Footer from "./footer";


const Profile = () => {
   
  const [name, setName] = useState(localStorage.getItem("username"));
  const [email, setEmail] = useState('john@example.com'); 
  const [phone, setPhone] = useState('+1234567890');
  const [address, setAddress] = useState('123 Main St, City, Country');
  const [bio, setBio] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget velit nec sapien ultricies dignissim.');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleBioChange = (e) => {
    setBio(e.target.value);
  };

  return (
    <div>
    <Header selected={'profile'}/>
    <div className="profile-container">
      <div className="profile-header">
        <h1>Profile</h1>
      </div>
      <div className="profile-content">
        <div className="image-container">
          <img src={ProfileImage} alt="Profile" className="profile-image" />
        </div>
        <div className="content-container">
          <div className="info">
            <h2>User Information</h2>
            <ul>
              <li>
                <span className="info-label">Name:</span>
                <input type="text" value={name} onChange={handleNameChange} />
              </li>
              <li>
                <span className="info-label">Email:</span>
                <input type="email" value={email} onChange={handleEmailChange} />
              </li>
              <li>
                <span className="info-label">Phone:</span>
                <input type="text" value={phone} onChange={handlePhoneChange} />
              </li>
              <li>
                <span className="info-label">Address:</span>
                <input type="text" value={address} onChange={handleAddressChange} />
              </li>
              <li>
                <span className="info-label">Bio:</span>
                <textarea value={bio} onChange={handleBioChange} />
              </li>
            </ul>
          </div>
          <div className="actions">
            <h2>Actions</h2>
            <ul>
              <li>
              <a href="/profile">
              Edit Profile</a></li> 
              <li>Change Password</li>
              <li> <a
            onClick={() => {
              localStorage.removeItem("token");
              localStorage.removeItem("username");
            }}
            href="/home"
            
          >Logout</a></li>
            </ul>
            <div className="social-links">
              <h2>Social Media</h2>
              <ul>
                <li><a href="https://twitter.com">Twitter</a></li>
                <li><a href="https://facebook.com">Facebook</a></li>
                <li><a href="https://instagram.com">Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
        <Footer />
    </div>
    </div>
  );
};

export default Profile;
