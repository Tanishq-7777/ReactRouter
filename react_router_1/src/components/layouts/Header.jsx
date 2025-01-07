import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <>
      <header className="section-navbar">
        <section className="top_txt">
          <div className="head container">
            <div className="head_txt">
              <p>
                Get TaniNavLink Membership, 30-day return or refund guarantee.
              </p>
            </div>
            <div className="sing_in_up">
              <NavLink to="#">Sign In</NavLink>
              <NavLink to="#">Sign UP</NavLink>
            </div>
          </div>
        </section>

        <div className="container">
          <div className="navbar-brand">
            <NavLink to="index">
              <p>TanishqFlix</p>
            </NavLink>
          </div>

          <nav className="navbar">
            <ul>
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/about"
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "blue" : "black",
                    };
                  }}
                >
                  about
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/movie" className="nav-link">
                  movies
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "nav-link active-link" : "nav-link"
                  }
                >
                  contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
