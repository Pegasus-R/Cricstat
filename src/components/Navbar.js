import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";
import "./navbar.css";
import 'bootstrap/dist/css/bootstrap.min.css';



const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  return ( <div>
    <nav>
            {/* <img src={logo} alt="logo"></img> */}
            <NavLink className="nav img" activeClassName="is-active" to="/">
              <img src={logo} alt="logo" ></img>
            </NavLink>
            <NavLink className="navbar-item" activeClassName="is-active" to="/">
              Home
            </NavLink>
            <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="/Listing"
            >
              Player's Listing
            </NavLink>
            <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="/about"
            >
              About Us
            </NavLink>
            <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="/contact"
            >
              Contact Us
            </NavLink>
            
          </nav>
          <footer class="bg-dark text-center text-white">
            <div class="text-center">© 2022 Copyright: 
                <a class="text-white" href="/">Escape Reality</a>
            </div>
          </footer>
          </div>


    
    // <nav
    //   className="navbar"
    //   role="navigation"
    //   aria-label="main navigation"
    // >
    //   <div className="container">
    //     <div className="navbar-brand">
    //       <a
    //         role="button"
    //         className={`navbar-burger burger ${isOpen && "is-active"}`}
    //         aria-label="menu"
    //         aria-expanded="false"
    //         onClick={() => setOpen(!isOpen)}
    //       >
    //         <span aria-hidden="true"></span>
    //         <span aria-hidden="true"></span>
    //         <span aria-hidden="true"></span>
    //       </a>
    //     </div>

    //     <div className={`navbar-menu ${isOpen && "is-active"}`}>
          // <div className="navbar-start">
          //   <NavLink className="navbar-item" activeClassName="is-active" to="/">
          //     <img src={logo} alt="logo"></img>
          //   </NavLink>

            // <NavLink className="navbar-item" activeClassName="is-active" to="/">
            //   Home
            // </NavLink>
            
          //   <NavLink
          //     className="navbar-item"
          //     activeClassName="is-active"
          //     to="/Listing"
          //   >
          //     Player's Listing
          //   </NavLink>

          //   <NavLink
          //     className="navbar-item"
          //     activeClassName="is-active"
          //     to="/about"
          //   >
          //     About
          //   </NavLink>
          //   <NavLink
          //     className="navbar-item"
          //     activeClassName="is-active"
          //     to="/contact"
          //   >
          //     Contact Us
          //   </NavLink>

            
          // </div>

    //       <div className="navbar-end">
    //         <div className="navbar-item">
              
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </nav>
  );
};

export default Navbar;