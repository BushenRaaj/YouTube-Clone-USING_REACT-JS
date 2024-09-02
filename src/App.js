// import React, { useState } from "react";
// import './App.css';

// import { IoHome } from "react-icons/io5";
// import { IoMdTrendingUp } from "react-icons/io";
// import { MdSubscriptions } from "react-icons/md";
// import { IoLibrarySharp } from "react-icons/io5";
// import { FaHistory } from "react-icons/fa";
// import { RiH6 } from "react-icons/ri";


// function App() {

//   const [active, setActive] = useState('container');
//   const [isNavOpen, setIsNavOpen] = useState(false);

//   const toggleNav = () => {
//     setIsNavOpen(!isNavOpen);
//     setActive(isNavOpen ? 'container' : 'container activeNavbar');
//   };


//   const videos = [
//     { id: 1, title: "What Is ReactJS? | ReactJS Tutorial For Beginners", url: "https://www.youtube.com/watch?v=Y6aYx_KKM7A",channel:'Simplilearn',views:'3k views' },
//     { id: 2, title: "Java Tutorial for Beginners", url: "https://www.youtube.com/watch?v=eIrMbAQSU34",channel:'Programming with Mosh',views:'10k views'  },
//     { id: 3, title: "React JS Live Coding Interview 2025 - Cracking the Interview (Mock practice)", url: "https://www.youtube.com/watch?v=EirBuUUPbio", channel:'Coder Dost' ,views:'34k views' },
//     { id: 4, title: "Create & Host Your First Website in 40 Minutes!", url: "https://www.youtube.com/watch?v=l4Y2Aa6mJvk",channel:'Learnz Development Hub' ,views:'1L views' },
//     { id: 5, title: "MS Excel Pivot Table in Tamil", url: "https://www.youtube.com/watch?v=S68AyYZeZrQ",channel:'Endless Knowledge' ,views:'23k views' },
//     { id: 6, title: "Spring Boot Tutorial For Beginners In Tamil 2025 (4 HOURS!)", url: "https://www.youtube.com/watch?v=a90mHYYwnzU",channel:'Code With Cousins' ,views:'78k views' },
//     { id: 7, title: "What is hibernate?", url: "https://www.youtube.com/watch?v=NDB9KIHIAIo",channel:'Javaninza' ,views:'56k views' },
//     { id: 8, title: "What is Spring-Boot Framework?", url: "https://www.youtube.com/watch?v=LSEYdU8Dp9Y",channel:'Visual Computer Science' ,views:'89k views' },
//     { id: 9, title: "APIs Explained", url: "https://www.youtube.com/watch?v=bxuYDT-BWaI",channel:'Exponent' ,views:'56k views' },
//     { id: 10, title: "Build app using React JS, Node Express JS and Mongo DB ", url: "https://www.youtube.com/watch?v=mDgKjb5eWPk",channel:'Art of Engineer' ,views:'90k views' },
//     { id: 11, title: "How to Set Up JavaFX in VS Code | Complete Guide with Configuration, and Running Your First App", url: "https://www.youtube.com/watch?v=v55JbkNbGl0",channel:'Pointers Show' ,views:'99k views' },
//     { id: 12, title: "Master Figma UI Design in 15 Minutes ", url: "https://www.youtube.com/watch?v=uQsyobT2Rv8",channel:'Website Learners' ,views:'45k views' },
//   ];

//   return (
//     <div className="app">
//       <nav className="navbar">
//         <div className="logo">
//           <span>YouTube</span>
//           <br />
//           <input type="search" placeholder="Search.." />
//         </div>
//         <button className="hamburger" onClick={toggleNav}>
//           {isNavOpen ? '✖' : '☰'}
//         </button>
//       </nav>

//       <div className={active}>
//         <div className="sidebar">
//           <ul>
//             <h1>YouTube</h1>
//             <li> <IoHome className="icon"/> Home</li>
//             <li> <IoMdTrendingUp className="icon"/> Trending</li>
//             <li> <MdSubscriptions className="icon"/> Subscriptions</li>
//             <li> <IoLibrarySharp className="icon"/> Library</li>
//             <li> <FaHistory className="icon"/> History</li>
//           </ul>
//         </div>

//         <div className="main-content">
//           <div className="video-grid">
//             {videos.map((video) => (
//               <a
//                 key={video.id}
//                 href={video.url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="video-item"
//               >
//                 <div className="video-thumbnail">
//                   <img
//                     src={`https://img.youtube.com/vi/${video.url.split('v=')[1]}/0.jpg`}
//                     alt={video.title}
//                   />
//                 </div>
//                 <div className="video-title">{video.title}</div>
//                 {/* <div className="video-title">{channel}</div> */}
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;



import React, { useState } from "react";
import './App.css';

import { IoHome } from "react-icons/io5";
import { IoMdTrendingUp } from "react-icons/io";
import { MdSubscriptions } from "react-icons/md";
import { IoLibrarySharp } from "react-icons/io5";
import { FaHistory } from "react-icons/fa";
import { FaSquareYoutube } from "react-icons/fa6";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineWatchLater } from "react-icons/md";
import { BiSolidLike } from "react-icons/bi";
import { CgPlayListSearch } from "react-icons/cg";




function App() {
  const [active, setActive] = useState('container');
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    setActive(isNavOpen ? 'container' : 'container activeNavbar');
  };

  const videos = [
    { id: 1, title: "What Is ReactJS? | ReactJS Tutorial For Beginners", url: "https://www.youtube.com/watch?v=Y6aYx_KKM7A", channel: 'Simplilearn', views: '3k views' },
    { id: 2, title: "Java Tutorial for Beginners", url: "https://www.youtube.com/watch?v=eIrMbAQSU34", channel: 'Programming with Mosh', views: '10k views' },
    { id: 3, title: "React JS Live Coding Interview 2025 - Cracking the Interview (Mock practice)", url: "https://www.youtube.com/watch?v=EirBuUUPbio", channel: 'Coder Dost', views: '34k views' },
    { id: 4, title: "Create & Host Your First Website in 40 Minutes!", url: "https://www.youtube.com/watch?v=l4Y2Aa6mJvk", channel: 'Learnz Development Hub', views: '100k views' },
    { id: 5, title: "MS Excel Pivot Table in Tamil", url: "https://www.youtube.com/watch?v=S68AyYZeZrQ", channel: 'Endless Knowledge', views: '23k views' },
    { id: 6, title: "Spring Boot Tutorial For Beginners In Tamil 2025 (4 HOURS!)", url: "https://www.youtube.com/watch?v=a90mHYYwnzU", channel: 'Code With Cousins', views: '78k views' },
    { id: 7, title: "What is hibernate?", url: "https://www.youtube.com/watch?v=NDB9KIHIAIo", channel: 'Javaninza', views: '56k views' },
    { id: 8, title: "What is Spring-Boot Framework?", url: "https://www.youtube.com/watch?v=LSEYdU8Dp9Y", channel: 'Visual Computer Science', views: '89k views' },
    { id: 9, title: "APIs Explained", url: "https://www.youtube.com/watch?v=bxuYDT-BWaI", channel: 'Exponent', views: '56k views' },
    { id: 10, title: "Build app using React JS, Node Express JS and Mongo DB ", url: "https://www.youtube.com/watch?v=mDgKjb5eWPk", channel: 'Art of Engineer', views: '90k views' },
    { id: 11, title: "How to Set Up JavaFX in VS Code | Complete Guide with Configuration, and Running Your First App", url: "https://www.youtube.com/watch?v=v55JbkNbGl0", channel: 'Pointers Show', views: '99k views' },
    { id: 12, title: "Master Figma UI Design in 15 Minutes ", url: "https://www.youtube.com/watch?v=uQsyobT2Rv8", channel: 'Website Learners', views: '45k views' },
  ];

  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">
          <span> <FaSquareYoutube className="icon" fill="white"/> YouTube</span>
          <br />
          <input type="search" placeholder="Search.." />
        </div>
        <button className="hamburger" onClick={toggleNav}>
          {isNavOpen ? '✖' : '☰'}
        </button>
      </nav>

      <div className={active}>
        <div className="sidebar">
          <h1> <FaSquareYoutube className="icon" fill="red"/> YouTube</h1>
          <ul>
            <li> <IoHome className="icon" /> Home</li>
            <li> <SiYoutubeshorts className="icon" /> Shorts</li>
            <li> <IoMdTrendingUp className="icon" /> Trending</li>
            <li> <MdSubscriptions className="icon" /> Subscriptions</li><hr></hr>
            <li> <IoLibrarySharp className="icon" /> Library</li>
            <li> <FaHistory className="icon" /> History</li>
            <li> < MdOutlineWatchLater className="icon" /> Watch Later</li>
            <li> <BiSolidLike className="icon"/> Like videos</li>
            <li> <CgPlayListSearch className="icon" /> PlayList</li>
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
                <div className="video-channel">{video.channel}</div>
                <div className="video-views">{video.views}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
