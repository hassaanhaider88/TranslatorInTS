import "./RightSideBuderIcon.css";

function RightSideBuderIcon() {
  return (
    <div className="menu">
      <div className="item">
        <a href="#" className="link">
          <span>HMK CodeWeb </span>
        </a>
        <div className="submenu">
          <div className="submenu-item">
            <a
              target="_blank"
              href="https://hassaan-haider.netlify.app"
              className="submenu-link"
            >
              Portfolio
            </a>
          </div>
          <div className="submenu-item">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/hassaan-haider-dev-627272294/"
              className="submenu-link"
            >
              LinkedIn
            </a>
          </div>
          <div className="submenu-item">
            <a
              target="_blank"
              href="https://web.facebook.com/profile.php?id=61578306324137"
              className="submenu-link"
            >
              FaceBook
            </a>
          </div>
          <div className="submenu-item">
            <a
              target="_blank"
              href="https://wa.me/923437117831"
              className="submenu-link"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightSideBuderIcon;
