import React from "react";

function Navbar() {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img
            src="https://play-lh.googleusercontent.com/fvhPW8dpGXM42Y-6aQU8Yl25L1l_mVgeoM-n08FxAkM7umAHkNs8wcs4MA49E67a7WVt"
            alt="Logo"
            width="30"
            height="24"
            className="d-inline-block align-text-top"
          />
          Contact management App
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
