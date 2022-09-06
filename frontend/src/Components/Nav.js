import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            News Challenge
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="navbar-brand" to="/">
                    News
                </Link>
              </li>
              <li className="nav-item">
              <Link className="navbar-brand" to="/archived">
                    Archived News
                </Link>
              </li>
              <li className="nav-item">
              <Link className="navbar-brand" to="/create">
                    Create News
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
