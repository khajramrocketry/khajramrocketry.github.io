import { Link } from 'react-router-dom';
import { MdRocketLaunch } from "react-icons/md";
import { GrInstagram, GrLinkedin } from "react-icons/gr";
import './App.css';

function Home() {
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

          
          <div className="content_box_homepage">

            <div className="main_content">
              <div className="internal_header">
                <p>About Us</p>
              </div>
              <p>We are an engineering project team specializing in launching rockets and 
                having our members learn the process of building and launching their own rockets.
                Our team will build and launch L1 rockets to an altitude of over 1000 ft and provide 
                L1 certification for members upon completion of their launch. Rocket build sessions will 
                occur in the FXB and launch dates will be announced both here and on the slack.
              </p>

              <div className="internal_header">
                <p>L1 Rockets</p>
              </div>
              <img src="/L1_rocket_diagram.jpeg" alt="L1_diagram" className='L1_diagram'/>

            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;