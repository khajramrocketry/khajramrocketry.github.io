import { Link } from 'react-router-dom';
import { MdRocketLaunch } from "react-icons/md";
import './App.css';

function RocketData() {
  return (
    <>
      <main>
        <div>
          <div className="website_header">
            <img src="/Khajra_logo.jpg" alt="logo" className='logo_image'/>
            <h1 className="title">Khajra Model Rocketry at U of M</h1>
            <div className="rocket_icon_title"><MdRocketLaunch /></div>
          </div>
          
          <div className="content_box_homepage">
            <div className="sidebar_container">
              <svg xmlns="http://www.w3.org/2000/svg" 
                   className="sidebar_polygon">
                <rect x="0" y="0" width="100%" height="100%" fill="rgb(20, 8, 80)"/>
              </svg>
              
<ul className="sidebar_links">
                <li>
                  <div className="link">
                  <Link to="/">Home</Link>
                  <div className="rocket_icon_link" style={{color:"rgb(255, 243, 18)"}}><MdRocketLaunch /></div>
                  </div>
                </li>
                <li>
                  <div className="link">
                  <Link to="/rocket_data">Rocket Data</Link>
                  <div className="rocket_icon_link" style={{color:"rgb(255, 243, 18)"}}><MdRocketLaunch /></div>
                  </div>
                </li>
                <li>
                  <div className="link">
                  <Link to="/resources">Resources</Link>
                  <div className="rocket_icon_link" style={{color:"rgb(255, 243, 18)"}}><MdRocketLaunch /></div>
                  </div>
                </li>
              </ul>
            </div>
        
            <div className="main_content">
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default RocketData;