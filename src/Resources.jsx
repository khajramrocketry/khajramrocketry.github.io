import { Link } from 'react-router-dom';
import { GrInstagram, GrLinkedin } from "react-icons/gr";
import './App.css';
import { useEffect, useState } from "react";
import { HiMiniBars3 } from "react-icons/hi2";

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
    <div style={{ position: "relative", inset: 0, overflow: "hidden", background: "#0a0a0f", width: "100vw", height: "100vh"}}>
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

        <div style={{
            height: "70vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="/Rocket_image_svg.svg"
            alt="Rocket"
            style={{ marginTop: "25vh", width: "30vw" }}
          />
        </div>
      </div>
      
      }
      <div style={{ position: "relative", zIndex: 0 }}>{children}</div>
    </div>
  );
}

function HomeHeader() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* TOP BAR */}
      <div
        className="website_header"
        style={{
          position: "fixed",
          top: 0,
          width: "100vw",
          zIndex: 1000,
          display: "flex",
          justifyContent: "left",
          alignItems: "center",
        }}
      >
        {/* HAMBURGER BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          style={{
            fontSize: "5vh",
            background: "none",
            border: "none",
            color: "rgb(255, 243, 18)",
            cursor: "pointer",
            justifyContent: "left"
          }}
        >
          <HiMiniBars3 />
        </button>

          <img
            src="/Logo_yellow.svg"
            alt="yellow_logo"
            style={{ paddingLeft: "24vw", marginTop: "1vh", width: "5.5vw", justifyContent: "right"}}
          />

          <img
            src="/KhajraTitle.svg"
            alt="Khajra_title"
            style={{ marginTop: "1vh", width: "40vw", justifyContent: "center"}}
          />

           <div className="social_logos" style={{paddingLeft: "15vw", color:"rgb(255, 243, 18)"}}>
              <GrInstagram />
              <a
                className="linkedin_icon"
                href="https://www.linkedin.com/company/khajra-model-rocketry-uofm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GrLinkedin />
              </a>
            </div>

      </div>

      <div
        style={{
          position: "fixed",
          top: 0,
          left: open ? "0" : "-15vw",
          width: "9vw",
          height: "100vh",
          background: "rgb(26, 21, 168)",
          zIndex: 999,
          padding: "3vw",
          transition: "left 0.3s ease",
        }}
      >
        <ul style={{ listStyle: "none", padding: "2vh" }}>
          <li style={{ margin: "5vw 0" }}>
            <Link className="sidebar_links" to="/" onClick={() => setOpen(false)}>Home</Link>
          </li>
          <li style={{ margin: "5vw 0" }}>
            <Link className="sidebar_links" to="/rocket_data" onClick={() => setOpen(false)}>Rocket Data</Link>
          </li>
          <li style={{ margin: "5vw 0" }}>
            <Link className="sidebar_links" to="/resources" onClick={() => setOpen(false)}>Resources</Link>
          </li>
        </ul>
      </div>

    </>
  );
}

function Resources() {
  return (
    <div>
    <HomeHeader>
    </HomeHeader>
    <Meteors>
    </Meteors>
    </div>
  );
}

export default Resources;
