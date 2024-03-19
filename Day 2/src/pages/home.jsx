import React from 'react';
import './home.css';
import { NavLink } from 'react-router-dom';
import NavigationBar from './navbar';
import Footer from './footer';
import collegeImage from "../assets/images/college.jpeg";
import traking from "../assets/images/exploreicon.png";
import search from "../assets/images/search.gif";
import applyonline from "../assets/images/applyonline.png";
import notificationgif from "../assets/images/notificationicon.png";
import exploreicon from "../assets/images/exploreicon1.png";
import adviceicon from "../assets/images/adviceicon.png";
import CourseList from './course';
import { Link } from 'react-router-dom';


import Navbar from './navbar';

const HomePage = () => {
  return (
    <div>
    <Navbar/>
    <div className="home-container">
    <div className="home-container">
    <h1></h1>
    <br></br>
    <br></br>
    <br></br>
    
    <header>
        <h1>Welcome to EduAdmit Connect</h1>
        <p>Explore opportunities, apply to colleges, and start your educational journey!</p>
        </header>
        <br></br>

        <section className="content">
        <div className="content-text">
        <h2>About Our Website</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut finibus tortor. Morbi vel tincidunt ipsum. Nulla sit amet massa nec velit gravida bibendum. Fusce in malesuada mauris, at consectetur sapien.</p>
        <p>Vestibulum vel odio nec nunc vestibulum sollicitudin. Vivamus ac tempor orci, nec hendrerit magna. Phasellus et elit arcu. Curabitur dignissim eros ac velit pulvinar, vel lacinia risus faucibus.</p>
        <p>Start your journey with us today and unlock endless possibilities!</p>
        <Link to="/course" className="start-button">Start Now</Link>
        </div>
        <div className="content-image">
        <img src={collegeImage} alt="College" />
        </div>
        </section>
      <br></br><br></br><br></br><br></br><br></br><br></br>
      </div>
      <header>
        <h1>Services</h1>
        
        </header>
      <section className="features">
      <div className="feature">
      <img src={search} alt="Find Colleges" />
      <h2>Find Colleges</h2>
      <p>Discover a wide range of colleges offering various courses.</p>
      <Link to="/collegelist" className="start-button">Find Colleges</Link>
      </div>
      <div className="feature">
      <img src={applyonline} alt="Apply Online" />
      <h2>Apply Online</h2>
      <p>Submit your applications to multiple colleges seamlessly.</p>
      <button>Apply Online</button>
      </div>
      <div className="feature">
      <img src={traking} alt="Track Applications" />
      <h2>Track Applications</h2>
      <p>Monitor the status of your applications and receive updates.</p>
      <button>Track Applications</button>
      </div>
      <div className="feature">
      <img src={notificationgif} alt="Receive Notifications" />
      <h2>Receive Notifications</h2>
      <p>Stay informed about deadlines, admission announcements, and more.</p>
      <button>Receive Notifications</button>
      </div>
      <div className="feature">
      <img src={exploreicon} alt="Explore Courses" />
      <h2>Explore Courses</h2>
      <p>Discover diverse courses ranging from arts to sciences.</p>
      <button>Explore Courses</button>
      </div>
        <div className="feature">
          <img src={adviceicon} alt="Connect with Advisors" />
          <h2>Connect with Advisors</h2>
          <p>Seek guidance and support from experienced advisors throughout your college journey.</p>
          <button>Connect with Advisors</button>
          </div>
          </section>
          <footer>
          <p>&copy; 2024 College Admission Portal. All rights reserved.</p>
          </footer>
          </div>
          </div>
          );
        }
        
export default HomePage;

