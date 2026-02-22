import { Link } from 'react-router-dom';
import { MdRocketLaunch } from "react-icons/md";
import { GrInstagram, GrLinkedin } from "react-icons/gr";
import './App.css';

function RocketData() {
  return (
    <>
      <main>
        <div>
          <div className="website_header">
              <img src="/Khajra_logo.jpg" alt="logo" className='logo_image'/>
                    
                <ul className="sidebar_links">
                        <li>
                          <Link to="/">Home</Link>
                          <div className="rocket_icon_link" style={{color:"rgb(255, 255, 255)"}}></div>
                        </li>
                        <li>
                          <Link to="/rocket_data">Rocket Data</Link>
                          <div className="rocket_icon_link" style={{color:"rgb(255, 255, 255)"}}></div>
                        </li>
                        <li>
                          <Link to="/resources">Resources</Link>
                          <div className="rocket_icon_link" style={{color:"rgb(255, 255, 255)"}}></div>
                        </li>
                    </ul>
                    <div className="social_logos" style={{color:"rgb(255, 255, 255)"}}>
                      <GrInstagram />
                      <GrLinkedin />
                    </div>
        
                  </div>
        
        
                  <div className="background_image_wrapper">
                    <img src="/L1_rocket_image.webp" alt="background" className='background_image'/>
                    <div className="blue_tint_overlay"></div>
                  </div>
                </div>
        
        
      </main>
    </>
  );
}

export default RocketData;