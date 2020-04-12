import React, { Fragment } from "react";
import TopNav from "../Navs/TopNav";

export default class PeriksaMandiri extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quetions: [
        `Apakah anda sedang demam/riwayat demam suhu > 38 ℃ ?`,
        `Apakah anda sedang terserang batuk kering/sakit tenggorokan/pilek ?`,
        `Apakah anda merasa sesak napas ?`,
        `Apakah anda merasa sakit kepala ?`,
      ],
      qNo: 0,
      total: 0,
      resultStatus: false,
      message: "",
    };
  }

  rekapGejala = (result) => {
    if (this.state.qNo < this.state.quetions.length - 1) {
      if (result === 1) {
        this.setState({ total: this.state.total + 1 });
      } else if (result === 0) {
        this.setState({ total: this.state.total + 0 });
      }
      this.setState({ qNo: this.state.qNo + 1 });
    } else {
      if (this.state.total + result === 0) {
        this.setState({
          message: `Anda tidak mengalami gejala virus corona.`,
          resultStatus: true,
        });
      } else {
        let message = `Anda mengalami ${
          ((this.state.total + result) / 4) * 100
        }% gejala virus corona. Lakukan Isolasi Diri.
        Hubungi Puskemas terdekat atau call-center 112 atau 119`;
        this.setState({ message: message, resultStatus: true });
      }
    }
  };

  goBeranda = () => {
    this.props.history.push("/");
  };

  render() {
    return (
      <Fragment>
        <TopNav active="periksamandiri" />
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
                  <h2 style={{ textShadow: "1px 1px 2px #ccc" }}>
                    Periksa Gejala yang Anda Alami
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div
          className=""
          style={{ marginTop: "18vh", paddingTop: "2vh", background: "#fff" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div class="card mt-3 skrining-card">
                  <div
                    class="card-header"
                    style={{
                      background: "#fff",
                      color: "#17a2b8",
                      fontWeight: "bold",
                    }}
                  >
                    {this.state.resultStatus ? "Hasil" : "Skrining Gejala"}
                  </div>
                  <ul class="list-group list-group-flush mt-2">
                    <li class="list-group-item">
                      <div>
                        {this.state.resultStatus ? (
                          <>
                            {this.state.message} <br />
                            {this.state.total < 2 ? (
                              <div>
                                <strong>Namun,</strong> virus corona bisa
                                berdiam di tubuh seseorang tanpa disadari. Sebab
                                tak semua yang terinfeksi virus SARS-CoV-2 ini
                                menunjukkan gejala. <br />
                                Praktekan pedoman hidup bersih dan sehat dengan
                                cara :
                                <br />
                                <ol className="mt-2">
                                  <li>
                                    Cuci tangan dengan sabun dan air mengalir
                                    selama minimal 20 detik, atau dengan hand
                                    sanitizer yang mengandung alkohol, terutama
                                    sebelum dan sesudah bersin, batuk, atau
                                    makan, juga sehabis dari toilet.
                                  </li>
                                  <li>
                                    Jaga jarak aman dengan orang lain (Social
                                    Distancing Measure) minimal 1 meter dan
                                    hindari bepergian ke tempat umum/publik.
                                  </li>
                                  <li>
                                    Kurangi kontak fisik secara langsung seperti
                                    tidak berjabat tangan/bersalaman atau
                                    bercium pipi.
                                  </li>
                                  <li>
                                    Hindari kontak jarak dekat dengan penderita
                                    flu atau batuk.
                                  </li>
                                  <li>
                                    Gunakan masker saat anda sedang batuk atau
                                    pilek.
                                  </li>
                                  <li>
                                    Tutup mulut dan hidung dengan tisu atau
                                    lengan bagian dalam saat batuk atau bersin,
                                    lalu segera buang tisu yang sudah digunakan
                                    ke tempat sampah.
                                  </li>
                                  <li>Konsumsi makanan bergizi seimbang.</li>
                                  <li>
                                    Lakukan olahraga secara rutin dan istirahat
                                    yang cukup.
                                  </li>
                                  <li>
                                    Jangan merokok dan hindari asap rokok.
                                  </li>
                                  <li>Jaga kebersihan lingkungan.</li>
                                </ol>
                              </div>
                            ) : (
                              <div></div>
                            )}
                          </>
                        ) : (
                          this.state.quetions[this.state.qNo]
                        )}
                      </div>
                      <div className="mt-3" style={{ textAlign: "center" }}>
                        {this.state.resultStatus ? (
                          <button
                            className="btn btn-info btn-sm mr-2"
                            style={{
                              textTransform: "none",
                              width: "80px",
                              outline: "none",
                            }}
                            onClick={() => this.goBeranda()}
                          >
                            Beranda
                          </button>
                        ) : (
                          <>
                            <button
                              className="btn btn-info btn-sm mr-2"
                              style={{
                                textTransform: "none",
                                width: "80px",
                                outline: "none",
                              }}
                              onClick={() => this.rekapGejala(0)}
                            >
                              Tidak
                            </button>
                            <button
                              className="btn btn-info btn-sm ml-2"
                              style={{
                                textTransform: "none",
                                width: "80px",
                                outline: "none",
                              }}
                              onClick={() => this.rekapGejala(1)}
                            >
                              Ya
                            </button>
                          </>
                        )}
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
