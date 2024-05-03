import "./Index.css";
import React from "react";
import { NavLink } from "react-router-dom";
import { menus, dropdownMenus } from "../staticData/data";

const Navbar = ({heading}) => {
  return (
    <>
      <header className="bg-primary position-sticky top-0 z-3">
        <div className="container">
          <div className="row">
            <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
              <NavLink
                className="navbar-brand"
                to="https://designcollection.in/codecanyon/prolist-bootstrap-4-and-materialize-framework-layout/"
              >
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                {heading}
              </NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarColor02"
                aria-controls="navbarColor02"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarColor02">
                <ul className="navbar-nav ms-auto">
                  {
                    menus.map((menu, ind)=>(
                      <li className="nav-item" key={ind}>
                        <NavLink className="nav-link" to={menu.path}>
                          {menu.menuName}
                        </NavLink>
                      </li>
                    ))
                  }
                  <li className="nav-item dropdown">
                    <button
                      className="nav-link dropdown-toggle"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Pages
                    </button>
                    <div
                      className="dropdown-menu animation slideUpIn"
                      aria-labelledby="navbarDropdown"
                    >
                      {
                        dropdownMenus.map((menus, ind)=>(
                          <NavLink className="dropdown-item" to={menus.path} key={ind}>
                            {menus.menuName}
                          </NavLink>
                        ))
                      }
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
