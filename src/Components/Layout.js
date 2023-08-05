import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
      <div>
        <nav>
              <Link to="/">Profile</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/projects">Projects</Link>
            
        </nav>
  
        <Outlet />
      </div>
    )
  };
  
  export default Layout;