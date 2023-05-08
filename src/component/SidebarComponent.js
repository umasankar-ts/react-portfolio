import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class SidebarComponent extends Component {
    render() {
        return (
            <div className="sidebar scrollbar">
                <div className="logo-section" align="center">                    
                    <h5 className="mt-2 user-name secondary-light-font">T.S. Umasankar</h5>
                    <p className="white-font designation mb-0">Android Developer / Architect</p>
                </div>
                <ul className="sidebar-nav-menu">
                    <li><NavLink activeClassName='is-active' to="/home"><i className="lni-home sidebar-nav-menu-icon secondary-light-font"></i>Home</NavLink>
                        <b className="first-sec"></b>
                        <b className="second-sec"></b>
                    </li>                    
                    <li><NavLink activeClassName='is-active' to="/experience"><i className="lni-layers sidebar-nav-menu-icon secondary-light-font"></i>Experience</NavLink>
                        <b className="first-sec"></b>
                        <b className="second-sec"></b>
                    </li>
                    <li><NavLink activeClassName='is-active' to="/education"><i className="lni-graduation sidebar-nav-menu-icon secondary-light-font"></i>Education</NavLink>
                        <b className="first-sec"></b>
                        <b className="second-sec"></b>
                    </li>
                    <li><NavLink activeClassName='is-active' to="/qualification"><i className="lni-book sidebar-nav-menu-icon secondary-light-font"></i>Skills</NavLink>
                        <b className="first-sec"></b>
                        <b className="second-sec"></b>
                    </li>
                    <li><NavLink activeClassName='is-active' to="/portfolio"><i className="lni-android sidebar-nav-menu-icon secondary-light-font"></i>Portfolio</NavLink>
                        <b className="first-sec"></b>
                        <b className="second-sec"></b>
                    </li>
                    <li><NavLink activeClassName='is-active' to="/about"><i className="lni-user sidebar-nav-menu-icon secondary-light-font"></i>Personal Info</NavLink>
                        <b className="first-sec"></b>
                        <b className="second-sec"></b>
                    </li> 
                    <li><NavLink activeClassName='is-active' to="/hobbies"><i className="lni-paint-roller sidebar-nav-menu-icon secondary-light-font"></i>Hobbies</NavLink>
                        <b className="first-sec"></b>
                        <b className="second-sec"></b>
                    </li>
                </ul>
            </div>
        )
    }
}

export default SidebarComponent
