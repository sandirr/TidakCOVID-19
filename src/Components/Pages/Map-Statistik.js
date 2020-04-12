import React, { Fragment } from "react";
import TopNav from "../Navs/TopNav";

class Map_Statistik extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      peta: "Dunia",
    };
  }
  render() {
    return (
      <Fragment>
        <TopNav active="map" />
        <header
          className="masthead"
          style={{
            backgroundImage: "url('./img/covid19.jpg')",
            top: 0,
            left: 0,
            right: 0,
            height:'20vh',
            position: "fixed",
            zIndex: -1,
          }}
        >
          <div className="overlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-10 mx-auto">
                <div className="site-heading">
                  <h2 style={{ textShadow: "1px 1px 2px #ccc" }}>
                    Peta dan Statistik Kasus Virus Corona di{" "}
                    {this.state.peta === "Dunia" ? "Indonesia" : "Dunia"}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div
          style={{ marginTop: "18vh", background: "#fff", paddingTop: "2vh" }}
        >
          <div style={{ textAlign: "center" }}>
            <button
              className="btn btn-info ml-2 mb-1 px-5 btn-sm"
              type="button"
              data-toggle="collapse"
              data-target=".collapse-id"
              onClick={() =>
                this.setState({
                  peta: this.state.peta === "Dunia" ? "Indonesia" : "Dunia",
                })
              }
            >
              Lihat untuk {this.state.peta}
            </button>
          </div>
          <div style={{ textAlign: "center" }}>
            <div className="collapse-id show">
              <object
                title="Peta Penyebaran Corona Indonesia"
                data="https://experience.arcgis.com/experience/57237ebe9c5b4b1caa1b93e79c920338"
                style={{
                  width: "90%",
                  height: "110vh",
                  border: "none",
                  overflow: "auto",
                }}
              ></object>
            </div>
            <div className="collapse-id collapse">
              <object
                title="Peta Penyebaran Corona Dunia"
                data="https://who.sprinklr.com/"
                style={{
                  width: "90%",
                  height: "110vh",
                  overflow: "auto",
                  border: "none",
                }}
              ></object>
            </div>
          </div>
        </div>

        <div className="bg-light py-4">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="row">
                  <div className="col-lg-12 col-sm-12">
                    <div
                      className="card mb-3 bg-light"
                      style={{ border: "none" }}
                    >
                      <div className="row no-gutters">
                        <div
                          className="col-md-3"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            src="https://www.jambi-independent.co.id/foto_berita/2020/02/04/jambiindependent_com_65_presidenjokowi2.jpeg"
                            className="card-img mt-3"
                            alt="..."
                            style={{
                              borderRadius: "10px 25px",
                              height: 150,
                              width: 160,
                            }}
                          />
                        </div>
                        <div className="col-md-8">
                          <div class="card-body">
                            <h5 class="card-title mb-0">Ir. H. Joko Widodo</h5>
                            <p class="card-text">
                              <small class="text-muted">
                                Presiden Indonesia
                              </small>
                            </p>
                            <p class="card-text">
                              "Kebijakan belajar dari rumah, bekerja dari rumah,
                              dan ibadah di rumah perlu terus digencarkan untuk
                              mengurangi penyebaran Covid-19"
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12 col-sm-12">
                    <div
                      className="card mb-3 bg-light"
                      style={{ border: "none" }}
                    >
                      <div className="row no-gutters">
                        <div
                          className="col-md-3"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            src="https://4.bp.blogspot.com/-LBIjJJuNDdY/UHcJFcXTlpI/AAAAAAAAC-o/y18-DhTBWuA/s1600/Anies+Baswedan.JPG"
                            className="card-img mt-3"
                            alt="..."
                            style={{
                              borderRadius: "10px 25px",
                              height: 150,
                              width: 160,
                            }}
                          />
                        </div>
                        <div class="col-md-8">
                          <div class="card-body">
                            <h5 class="card-title mb-0">
                              H. Anies Rasyid Baswedan, S.E., M.P.P., Ph.D
                            </h5>
                            <p class="card-text mt-0">
                              <small class="text-muted">
                                Gubernur DKI Jakarta
                              </small>
                            </p>
                            <p class="card-text">
                              "(Data) 283 itu bukan angka statistik. Itu adalah
                              warga kita yang bulan lalu sehat. Yang bulan lalu
                              bisa berkegiatan. Mereka punya anak, mereka punya
                              istri, mereka punya saudara, dan ini semua harus
                              kita cegah pertambahannya"
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <ul class="list-group mt-3">
                  <li class="list-group-item active bg-info">
                    Pencegahan Virus Corona
                    <br />
                    <small>Sumber Informasi: alodokter.com</small>
                  </li>
                  <li class="list-group-item">Mencuci tangan dengan benar</li>
                  <li class="list-group-item">Menggunakan masker</li>
                  <li class="list-group-item">Menjaga daya tahan tubuh</li>
                  <li class="list-group-item">
                    Tidak pergi ke negara terjangkit
                  </li>
                  <li class="list-group-item">
                    Menghindari kontak dengan hewan yang berpotensi menularkan
                    coronavirus
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Map_Statistik;
