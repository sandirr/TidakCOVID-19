import React, { Fragment } from "react";
import TopNav from "../Navs/TopNav";

class Donasi extends React.Component {
  changePage = (page) => {
    window.open(page);
  };
  render() {
    return (
      <Fragment>
        <TopNav active="donasi" />
        <header
          className="masthead"
          style={{
            backgroundImage: "url('./img/covid19.jpg')",
            top: 0,
            left: 0,
            height: "20vh",
            right: 0,
            position: "fixed",
            zIndex: -1,
          }}
        >
          <div className="overlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-10 mx-auto">
                <div className="site-heading">
                  <h2
                    style={{
                      textShadow: "1px 1px 2px #ccc",
                    }}
                  >
                    Ayo Selamatkan Nyawa Sesama
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div style={styles.container}>
          <div className="container">
            <div className="row mt-3">
              <div className="col-sm-12 mb-4">
                <h2 style={{ fontWeight: "bolder" }}>Bersama Lawan Corona</h2>
                <p className="text-muted">
                  Setiap pemberian pasti ada balasannya. Berikut rekomendasi
                  situs donasi yang transparan.
                </p>
              </div>
              <div className="col-lg-3 col-6 mb-4">
                <div
                  className="card text-center donate-card"
                  onClick={() =>
                    this.changePage(
                      "https://kitabisa.com/campaign/indonesialawancorona"
                    )
                  }
                >
                  <div className="card-body">
                    <img
                      src="https://kitabisa-userupload-01.s3-ap-southeast-1.amazonaws.com/_production/user/16084/23_16084_1541503323_775093_s.png"
                      alt="freepick_image"
                      style={{
                        height: "5.2em",
                        width: "5.2em",
                        borderRadius: "50%",
                      }}
                    />
                    <h4 className="card-title" style={styles.ct}>
                      Kita Bisa
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-6 mb-4">
                <div
                  className="card text-center donate-card"
                  onClick={() =>
                    this.changePage(
                      "https://donasi.dompetdhuafa.org/bersamalawancorona/"
                    )
                  }
                >
                  <div className="card-body">
                    <img
                      src="https://donasi.dompetdhuafa.org/wp-content/themes/donasidd/assets/img/logo-dd-with-text.png"
                      alt="freepick_image"
                      style={{ height: "5.2em" }}
                    />
                    <h4 className="card-title" style={styles.ct}>
                      Dompet Dhuafa
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-6 mb-4">
                <div
                  className="card text-center donate-card"
                  onClick={() => this.changePage("https://act.id/home/in")}
                >
                  <div className="card-body">
                    <img
                      src="https://act.id/assets/images/ACT-LOGO.svg"
                      alt="freepick_image"
                      style={{ height: "5.2em", width: "90%" }}
                    />
                    <h4 className="card-title" style={styles.ct}>
                      Aksi Cepat Tanggap
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-6 mb-4">
                <div
                  className="card text-center donate-card"
                  onClick={() => this.changePage("https://benihbaik.com/")}
                >
                  <div className="card-body">
                    <img
                      src="https://benihbaik.com/temanbaik/img/220xNxLogoWeb2.png.pagespeed.ic.jzjDf_Q-HW.webp"
                      alt="freepick_image"
                      style={{ height: "5.2em", width: "90%" }}
                    />
                    <h4 className="card-title" style={styles.ct}>
                      Benih Baik
                    </h4>
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
    background: "#fff",
    minHeight: "80vh",
    marginTop: "18vh",
    paddingTop: "2vh",
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
    fontWeight: "bold",
    fontFamily: "Hind",
    fontSize: "1.1em",
    cursor: "pointer",
    display: "inline-block",
  },
  highlight: { color: "#000", textShadow: "1px 1px 2px #fff" },
  ct: {
    fontWeight: "bold",
    marginTop: "5px",
  },
};

export default Donasi;
