import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="container">
        <h6 className="my-5">
          <b>TAG :&nbsp</b>
          online store, app builder,big data, custom ecommerce website, builder
          most user friendly, ecommerce sites, store cloud best .
        </h6>
      </div>
      <footer className="page-footer">
        <div className="container">
          <div className="row">
            <div className="col col-sm text-center">
              <div className="footer-section">
                <ul className="list-unstyled">
                  <li>
                    <NavLink className="text-light" to="/">
                      Facebook
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="text-light" to="/">
                      Twitter
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="text-light" to="/">
                      Email
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="text-light" to="/">
                      Websites
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright cpy-ft text-center">
          <p className="text-secondary">
            © 2019 <span className="text-light">d</span>esigncollection.in All
            rightreserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
