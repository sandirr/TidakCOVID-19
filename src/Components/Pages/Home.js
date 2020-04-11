import React, { Fragment } from "react";
import TopNav from '../Navs/TopNav'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      peta: "Dunia",
    };
  }
  toMap = () => {
    this.props.history.push("map-statistik");
  };
  render() {
    return (
      <Fragment>
        <TopNav active='beranda'/>
        <div style={styles.container}>
          <div className="container">
            <div className="row">
              <div className="col-md-12 pt-3" style={{ textAlign: "center" }}>
                <h1 className="home-title" style={styles.title}>
                  SAY NO TO CORONA
                </h1>
                <p style={styles.homeDesc} className="home-description">
                  Klik untuk mengenali apa itu
                  <span style={styles.highlight}>
                    {" "}
                    corona, gejalanya, dan cara pencegahannya
                  </span>
                </p>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-lg-3 col-md-6 mb-2">
                <div class="card text-center" >
                  <div class="card-body">
                    <h5 class="card-title">Test Mandiri</h5>
                    <p class="card-text">
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-2">
                <div
                  class="card text-center"
                  
                  onClick={this.toMap}
                >
                  <div class="card-body">
                    <h5 class="card-title">Peta dan Statistik</h5>
                    <p class="card-text">
                      Tampilan informasi peta penyebaran virus corona
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-2">
                <div class="card text-center" >
                  <div class="card-body">
                    <h5 class="card-title">Donasi</h5>
                    <p class="card-text">
                      Selamatkan nyawa sesama. Penyebaran virus corona di
                      Indonesia terus meluas. Dampak virus ini sangat
                      mengkhawatirkan: Ribuan orang positif dan dalam
                      pengawasan, sementara ratusan lainnya meninggal dunia.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-2">
                <div class="card text-center" >
                  <div class="card-body">
                    <h5 class="card-title">Special title treatment</h5>
                    <p class="card-text">
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

const styles = {
  container: {
    background: "linear-gradient( #17a2b8, #000 )",
    minHeight: "100vh",
  },
  title: {
    color: "#fff",
    fontWeight: "bold",
    fontStyle: "italic",
    fontFamily: "Hind",
    fontSize: "4em",
    textShadow: "4px 4px 3px #696969",
    display: "block",
    marginBottom: "-10px",
  },
  homeDesc: {
    color: "#fff",
    fontWeight: "bold",
    fontFamily: "Hind",
    fontSize: "1.1em",
    cursor: "pointer",
    display: "inline-block",
  },
  highlight: { color: "#000", textShadow: "1px 1px 2px #fff" },
};

export default Home;
