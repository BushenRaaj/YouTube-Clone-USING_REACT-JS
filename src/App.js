import React, { useState } from "react";
import './App.css';

import { IoHome } from "react-icons/io5";
import { IoMdTrendingUp } from "react-icons/io";
import { MdSubscriptions } from "react-icons/md";
import { IoLibrarySharp } from "react-icons/io5";
import { FaHistory } from "react-icons/fa";


function App() {

  const [active, setActive] = useState('container');
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    setActive(isNavOpen ? 'container' : 'container activeNavbar');
  };


  const videos = [
    { id: 1, title: "What Is ReactJS? | ReactJS Tutorial For Beginners", url: "https://www.youtube.com/watch?v=Y6aYx_KKM7A" },
    { id: 2, title: "Java Tutorial for Beginners", url: "https://www.youtube.com/watch?v=eIrMbAQSU34" },
    { id: 3, title: "React JS Live Coding Interview 2025 - Cracking the Interview (Mock practice)", url: "https://www.youtube.com/watch?v=EirBuUUPbio" },
    { id: 4, title: "Create & Host Your First Website in 40 Minutes!", url: "https://www.youtube.com/watch?v=l4Y2Aa6mJvk" },
    { id: 5, title: "MS Excel Pivot Table in Tamil", url: "https://www.youtube.com/watch?v=S68AyYZeZrQ" },
    { id: 6, title: "Spring Boot Tutorial For Beginners In Tamil 2025 (4 HOURS!)", url: "https://www.youtube.com/watch?v=a90mHYYwnzU" },
    { id: 7, title: "What is hibernate?", url: "https://www.youtube.com/watch?v=NDB9KIHIAIo" },
    { id: 8, title: "What is Spring-Boot Framework?", url: "https://www.youtube.com/watch?v=LSEYdU8Dp9Y" },
    { id: 9, title: "APIs Explained", url: "https://www.youtube.com/watch?v=bxuYDT-BWaI" },
    { id: 10, title: "Build app using React JS, Node Express JS and Mongo DB ", url: "https://www.youtube.com/watch?v=mDgKjb5eWPk" },
    { id: 11, title: "How to Set Up JavaFX in VS Code | Complete Guide with Configuration, and Running Your First App", url: "https://www.youtube.com/watch?v=v55JbkNbGl0" },
    { id: 12, title: "Master Figma UI Design in 15 Minutes ", url: "https://www.youtube.com/watch?v=uQsyobT2Rv8" },
  ];

  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">
          <span>YouTube</span>
          <br />
          <input type="search" placeholder="Search.." />
        </div>
        <button className="hamburger" onClick={toggleNav}>
          {isNavOpen ? '✖' : '☰'}
        </button>
      </nav>

      <div className={active}>
        <div className="sidebar">
          <ul>
            <h1>YouTube</h1>
            <li> <IoHome className="icon"/> Home</li>
            <li> <IoMdTrendingUp className="icon"/> Trending</li>
            <li> <MdSubscriptions className="icon"/> Subscriptions</li>
            <li> <IoLibrarySharp className="icon"/> Library</li>
            <li> <FaHistory className="icon"/> History</li>
          </ul>
        </div>

        <div className="main-content">
          <div className="video-grid">
            {videos.map((video) => (
              <a
                key={video.id}
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="video-item"
              >
                <div className="video-thumbnail">
                  <img
                    src={`https://img.youtube.com/vi/${video.url.split('v=')[1]}/0.jpg`}
                    alt={video.title}
                  />
                </div>
                <div className="video-title">{video.title}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
