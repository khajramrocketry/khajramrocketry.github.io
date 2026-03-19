import { Link } from 'react-router-dom';
import { GrInstagram, GrLinkedin } from "react-icons/gr";
import './App.css';
import { useEffect, useState } from "react";

function Meteors({ children, count = 50, angle = 215, color = "#e9eaeb", tailColor = "#64748b" }) {
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    const generated = Array.from({ length: count }, (_, i) => ({
      id: i,
      left: i * (100 / count),
      delay: Math.random() * 5,
      duration: 5 + Math.random() * 7,
    }));

    setMeteors(generated);
  }, [count]);

  return (
    <div style={{ position: "fixed", inset: 0, overflow: "hidden", background: "#0a0a0f" }}>
      <style>{`
        @keyframes meteor-fall {
          0% {
            transform: rotate(${angle}deg) translateX(0);
            opacity: 1;
          }
          70% {
            opacity: 1;
          }
          100% {
            transform: rotate(${angle}deg) translateX(-100vmax);
            opacity: 0;
          }
        }
      `}</style>

      {meteors.map((meteor) => (
        <span
          key={meteor.id}
          style={{
            position: "absolute",
            height: "0.3vh",
            width: "0.3vw",
            borderRadius: "50%",
            top: "-0.5px",
            left: `${meteor.left}%`,
            backgroundColor: color,
            animation: `meteor-fall ${meteor.duration}s linear infinite`,
            animationDelay: `${meteor.delay}s`,
          }}
        >
          <span
            style={{
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              left: "100%",
              width: "50px",
              height: "1px",
              background: `linear-gradient(to right, ${tailColor}, transparent)`,
            }}
          />
        </span>
      ))}

      {/* Content layer */

      <div>
        
      </div>
      
      }
      <div style={{ position: "relative", zIndex: 0 }}>{children}</div>
    </div>
  );
}

function RocketData() {
  return (
    <div>
    <div style={{ position: "Absolute", zIndex: 1000 }} className="website_header">
            
            <ul className="sidebar_links">
                <li>
                  <Link to="/">Home</Link>
                  <div className="rocket_icon_link" style={{color:"rgb(255, 243, 18)"}}></div>
                </li>
                <li>
                  <Link to="/rocket_data">Rocket Data</Link>
                  <div className="rocket_icon_link" style={{color:"rgb(255, 243, 18)"}}></div>
                </li>
                <li>
                  <Link to="/resources">Resources</Link>
                  <div className="rocket_icon_link" style={{color:"rgb(255, 243, 18)"}}></div>
                </li>
            </ul>
            <div className="social_logos" style={{color:"rgb(255, 243, 18)"}}>
              <GrInstagram />
              <GrLinkedin />
            </div>

          </div>
    <Meteors>
    </Meteors>
    </div>
  );
}

export default RocketData;
