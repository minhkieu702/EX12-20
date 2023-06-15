import React from "react";
// import { useContext } from "react";
// import { ThemeContext } from "./ThemeContext";
import { Link } from "react-router-dom";
import { Navbar, NavItem,Icon } from "react-materialize";

export default function Navigation() {
  // const { theme, toggle, dark } = useContext(ThemeContext);
  return (
    <Navbar className="menu" 
    alignLinks="right" 
    brand={<span className="brand-logo">Player Cards</span>}
    id="mobile-nav" 
    menuIcon={<Icon>menu</Icon>}>
      <ul>
        <li><Link to = '/'><Icon left>home</Icon> Home</Link></li>
        <li to='/about'><Link to='/about'><Icon left>info_outline</Icon> About</Link></li>
        <li to='/news'>
          <Link to='/news'>
            <Icon left>dvr</Icon>News
          </Link>
        </li>
        <li href='/contact'>
          <Link to='/contact'>
            <Icon left>contacts</Icon> Contact
          </Link>
        </li>
      </ul>
    </Navbar>
    // <div className="navigation" style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
    //   <nav >
    //     <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
    //       <ul style={{ display: 'flex', listStyleType: 'none' }}>
    //         <li><a className="active" href="#home" style={{ color: theme.color }}>Home</a></li>
    //         <li><a href="#news" style={{ color: theme.color }}>News</a></li>
    //         <li><a href="#about" style={{ color: theme.color }}>About</a></li>
    //         <li><a href="#contact" style={{ color: theme.color }}>Contact</a></li>
    //       </ul>
    //       <div>
    //         <a
    //           className="switch-mode"
    //           href="#"
    //           onClick={toggle}
    //           style={{
    //             backgroundColor: theme.backgroundColor,
    //             color: theme.color,
    //             outline: "none",
    //           }}
    //           data-testid="toggle-theme-btn"
    //         >
    //           Switch Nav to {!dark ? "Dark" : "Light"} mode
    //         </a>
    //       </div>
    //     </div>
    //   </nav>
    // </div>
  );
}
