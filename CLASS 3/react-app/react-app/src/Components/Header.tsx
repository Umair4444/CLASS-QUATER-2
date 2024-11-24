import "../style/Header.css";

function Header() {
  return (
    <>
      <header>
        <div className="left"> my logo</div>

        <div className="center">
          <ul>
            <li>
              <a
                href="http://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="http://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="http://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                About
              </a>
            </li>
          </ul>
        </div>

        <div className="right">Hire Me</div>
      </header>
    </>
  );
}

export default Header;
