import React from "react";
import { Link } from "react-router-dom";

export default class TopNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scroll: false,
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 60) {
        this.setState({ scroll: true });
      } else {
        this.setState({ scroll: false });
      }
    });
  }
  render() {
    return (
      <nav
        className={
          this.state.scroll
            ? "navbar navbar-expand-lg navbar-light fixed-top navscroll"
            : "navbar navbar-expand-lg navbar-light fixed-top"
        }
        id="navUtama"
      >
        <div className="container">
          <Link className="navbar-brand bold" to="/">
            <strong>NoCorona</strong>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li
                className={
                  this.props.active === "beranda"
                    ? "nav-item active"
                    : "nav-item"
                }
              >
                <Link className="nav-link" to="/">
                  Beranda
                </Link>
              </li>
              <li
                className={
                  this.props.active === "testmandiri"
                    ? "nav-item active"
                    : "nav-item"
                }
              >
                <Link className="nav-link" to="/testmandiri">
                  Test Mandiri
                </Link>
              </li>
              <li
                className={
                  this.props.active === "map" ? "nav-item active" : "nav-item"
                }
              >
                <Link className="nav-link" to="/map-statistik">
                  Peta dan Statistik
                </Link>
              </li>
              <li
                className={
                  this.props.active === "donasi"
                    ? "nav-item active"
                    : "nav-item"
                }
              >
                <Link className="nav-link" to="/donasi">
                  Donasi
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
