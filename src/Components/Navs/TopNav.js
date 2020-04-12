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
  perubahan = () => {
    if (window.pageYOffset <= 60) {
      this.setState({ scroll: this.state.scroll ? false : true });
    }
  };
  render() {
    return (
      <nav
        className={
          this.state.scroll
            ? "navbar navbar-expand-lg navbar-dark fixed-top navscroll"
            : "navbar navbar-expand-lg navbar-dark fixed-top"
        }
        id="navUtama"
      >
        <div className="container">
          <button
            onClick={this.perubahan}
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ outline: "none", border: "none" }}
          >
            <i className="material-icons mobile-menu">menu</i>
          </button>
          <Link className="navbar-brand bold" to="/">
            <strong>TidakCOVID-19</strong>
          </Link>
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
                  this.props.active === "tentang"
                    ? "nav-item active"
                    : "nav-item"
                }
              >
                <Link className="nav-link" to="/tentang">
                  Tentang COVID-19
                </Link>
              </li>
              <li
                className={
                  this.props.active === "periksamandiri"
                    ? "nav-item active"
                    : "nav-item"
                }
              >
                <Link className="nav-link" to="/periksa-mandiri">
                  Periksa Mandiri
                </Link>
              </li>
              <li
                className={
                  this.props.active === "map" ? "nav-item active" : "nav-item"
                }
              >
                <Link className="nav-link" to="/peta-statistik">
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
