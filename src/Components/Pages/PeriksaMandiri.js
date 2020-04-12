import React, { Fragment } from "react";
import TopNav from "../Navs/TopNav";
import Footer from "../Footer";

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

  reset = () => {
    this.setState({ qNo: 0, total: 0, message: "", resultStatus: false });
  };

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
        }% gejala virus corona. Lakukan isolasi diri.
        Hubungi Puskemas terdekat atau call-center 119.`;
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
          style={{
            marginTop: "18vh",
            paddingTop: "2vh",
            background: "#fff",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="card mt-3 skrining-card">
                  <div
                    className="card-header"
                    style={{
                      background: "#fff",
                      color: "#17a2b8",
                      fontWeight: "bold",
                    }}
                  >
                    {this.state.resultStatus ? "Hasil" : "Periksa Gejala"}
                  </div>
                  <ul className="list-group list-group-flush mt-2">
                    <li className="list-group-item">
                      <div>
                        {this.state.resultStatus ? (
                          <>
                            <div style={{ fontSize: "1.2em" }}>
                              {this.state.message}
                            </div>
                            <br />
                            {this.state.total >= 0 ? (
                              <div className="mt-2">
                                <strong>Ingat juga,</strong> virus corona bisa
                                berdiam di tubuh seseorang tanpa disadari. Sebab
                                tak semua yang terinfeksi COVID-19 ini
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
                            style={styles.button}
                            onClick={() => this.reset()}
                          >
                            Lagi
                          </button>
                        ) : (
                          <>
                            <button
                              className="btn btn-info btn-sm mr-2"
                              style={styles.button}
                              onClick={() => this.rekapGejala(0)}
                            >
                              Tidak
                            </button>
                            <button
                              className="btn btn-info btn-sm ml-2"
                              style={styles.button}
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

        <div className="bg-light pt-4 mt-4">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div style={{ textAlign: "center" }}>
                  <h3 style={{ fontWeight: "bold" }}>Kutipan</h3>
                </div>
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
                            src="https://awsimages.detik.net.id/visual/2019/11/09/f0b27ced-3544-4073-8ac9-8399a31634e8.png"
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
                            <h5 class="card-title mb-0">
                              Arya Mahendra Sinulingga
                            </h5>
                            <p class="card-text">
                              <small class="text-muted">
                                Staf Khusus Menteri BUMN
                              </small>
                            </p>
                            <p class="card-text">
                              "Harga (alatnya) enggak mahal, lebih murah
                              daripada tes di rumah sakit. Kalau sudah ada tes
                              ini, masalah bisa terselesaikan, meski ini bukan
                              yang terakhir, masih ada tahap lainnya seperti tes
                              laboratorium. Tapi paling enggak dengan (rapid
                              test) ini, bisa tahu ada indikasi corona "
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <ul class="list-group mt-2">
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
          <Footer />
        </div>
      </Fragment>
    );
  }
}

const styles = {
  button: {
    textTransform: "none",
    width: "80px",
    outline: "none",
  },
};
