import React, { Fragment } from "react";
import TopNav from "../Navs/TopNav";
import data from "./RS";
import Footer from "../Footer";
import Sidebar from "../Sidebar";

export default class Tentang extends React.Component {
  goMap = (e) => {
    let loc = e.replace(/ /g, "+");
    window.open(`https://www.google.com/maps/place/${loc}`, "blank");
  };
  render() {
    return (
      <Fragment>
        <TopNav active="tentang" />
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
                    Informasi Lengkap COVID-19
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div
          style={{
            marginTop: "18vh",
            paddingTop: "2vh",
            background: "#fff",
            paddingBottom: "2vh",
          }}
          className="tentang"
        >
          <div className="container">
            <div className="accordion skrining-card mb-3" id="accordionExample">
              <div className="card">
                <div className="card-header bg-transparent" id="headingOne">
                  <h2 className="mb-0">
                    <button
                      className="btn btn-sm"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Apa itu COVID-19 ?
                    </button>
                  </h2>
                </div>

                <div
                  id="collapseOne"
                  className="collapse show"
                  aria-labelledby="headingOne"
                  data-parent="#accordionExample"
                >
                  <div className="card-body">
                    COVID-19 adalah nama penyakit yang disebabkan oleh jenis
                    virus corona yang paling baru. Virus dan penyakit ini
                    pertama kali ditemukan di Wuhan, China. Diduga virus ini
                    muncul pada November 2019 dan menyerang seorang lelaki usia
                    paruh baya. Umumnya penderita akan mengalami gejala seperti
                    demam, kelelahan, dan batuk kering alias tidak menghasilkan
                    dahak. Di luar tiga gejala umum tersebut, ada pula penderita
                    yang mengeluhkan nyeri, hidung tersumbat, pilek, sakit
                    tenggorokan, maupun diare. Sekitar 80% dari penderita
                    Covid-19 hanya mengalami sakit yang ringan hingga sedang dan
                    dapat sembuh tanpa perlu perawatan khusus. Namun 1 dari 6
                    penderita mengalami sesak napas. Covid-19 bukan penyakit
                    berbahaya kecuali untuk lansia dan orang-orang yang rentan
                    karena memiliki imunitas rendah atau penyakit penyerta.
                    <div className="muted mt-3" style={{ textAlign: "right" }}>
                      <small>
                        Sumber informasi: https://cultura.id/corona-faq-covid19
                      </small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header bg-transparent" id="headingTwo">
                  <h2 className="mb-0">
                    <button
                      className="btn btn-sm collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Penularan
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseTwo"
                  className="collapse"
                  aria-labelledby="headingTwo"
                  data-parent="#accordionExample"
                >
                  <div className="card-body">
                    COVID-19 adalah penyakit baru dan para peneliti masih
                    mempelajari bagaimana cara penularannya. Dari berbagai
                    penelitian, metode penyebaran utama penyakit ini diduga
                    adalah melalui droplet saluran pernapasan dan kontak dekat
                    dengan penderita. Droplet merupakan partikel kecil dari
                    mulut penderita yang dapat mengandung virus penyakit, yang
                    dihasilkan pada saat batuk, bersin, atau berbicara. Droplet
                    dapat melewati sampai jarak tertentu (biasanya 1 meter).
                    Droplet bisa menempel di pakaian atau benda di sekitar
                    penderita pada saat batuk atau bersin. Namun, partikel
                    droplet cukup besar sehingga tidak akan bertahan atau
                    mengendap di udara dalam waktu yang lama. Namun, masyarakat
                    diwajibkan untuk menggunakan masker kain yang menutupi
                    hidung dan mulut untuk mencegah penyebaran droplet.
                    <div className="muted mt-3" style={{ textAlign: "right" }}>
                      <small>
                        Sumber informasi: https://corona.jakarta.go.id/id
                      </small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header bg-transparent" id="headingThree">
                  <h2 className="mb-0">
                    <button
                      className="btn btn-sm collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Gejala
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseThree"
                  className="collapse"
                  aria-labelledby="headingThree"
                  data-parent="#accordionExample"
                >
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-4" style={{ textAlign: "center" }}>
                        <img
                          src="https://corona.jakarta.go.id/img/logo/batuk-dan-nyeri.png"
                          alt="corona.jakarta.go.id"
                        />
                        <div>Batuk dan Nyeri Tenggorokan</div>
                      </div>
                      <div className="col-sm-4" style={{ textAlign: "center" }}>
                        <img
                          src="https://corona.jakarta.go.id/img/logo/demam.png"
                          alt="corona.jakarta.go.id"
                        />
                        <div>Demam suhu tinggi / Ada riwayat demam</div>
                      </div>
                      <div className="col-sm-4" style={{ textAlign: "center" }}>
                        <img
                          src="https://corona.jakarta.go.id/img/logo/demam.png"
                          alt="corona.jakarta.go.id"
                        />
                        <div>Demam suhu tinggi / Ada riwayat demam</div>
                      </div>
                    </div>
                    <div className="muted mt-3" style={{ textAlign: "right" }}>
                      <small>
                        Sumber informasi: https://corona.jakarta.go.id/id
                      </small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header bg-transparent" id="headingFive">
                  <h2 className="mb-0">
                    <button
                      className="btn btn-sm collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                      Pencegahan Tertular
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseFive"
                  className="collapse"
                  aria-labelledby="headingFive"
                  data-parent="#accordionExample"
                >
                  <div className="card-body">
                    <ol>
                      <li>
                        Cuci tangan dengan sabun dan air mengalir selama minimal
                        20 detik, atau dengan hand sanitizer yang mengandung
                        alkohol, terutama sebelum dan sesudah bersin, batuk,
                        atau makan, juga sehabis dari toilet.
                      </li>
                      <li>
                        Saat batuk atau bersin, tutup mulut dan hidung dengan
                        tisu atau lengan bagian dalam, lalu segera buang tisu
                        yang sudah digunakan ke tempat sampah.
                      </li>
                      <li>
                        Hindari kontak jarak dekat dengan penderita flu atau
                        batuk.
                      </li>
                      <li>Konsumsi makanan bergizi seimbang.</li>
                      <li>
                        Lakukan olahraga secara rutin dan istirahat yang cukup.
                      </li>
                      <li>Jangan merokok dan hindari asap rokok.</li>
                      <li>Jaga kebersihan lingkungan.</li>
                      <li>
                        Disarankan untuk tidak bepergian ke tempat yang sudah
                        memiliki kasus infeksi atau berpotensi menjadi lokasi
                        penyebaran virus Corona.
                      </li>
                    </ol>
                    <div className="muted mt-3" style={{ textAlign: "right" }}>
                      <small>
                        Sumber informasi:
                        https://cekcorona-dinkes.jakarta.go.id/
                      </small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header bg-transparent" id="headingSix">
                  <h2 className="mb-0">
                    <button
                      className="btn btn-sm collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseSix"
                      aria-expanded="false"
                      aria-controls="collapseSix"
                    >
                      Daftar RS Rujukan
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseSix"
                  className="collapse linkmap"
                  aria-labelledby="headingSix"
                  data-parent="#accordionExample"
                >
                  <div className="card-body">
                    <p>
                      <strong>Aceh</strong>
                    </p>
                    {data.Aceh.map((e, index) => (
                      <p key={index} onClick={() => this.goMap(e)}>
                        {index + 1}. {e}
                      </p>
                    ))}
                    <p>
                      <strong>Sumatera Utara</strong>
                    </p>
                    {data.Sumatera_Utara.map((e, index) => (
                      <p key={index} onClick={() => this.goMap(e)}>
                        {index + 1}. {e}
                      </p>
                    ))}
                    <p>
                      <strong>Sumatera Barat</strong>
                    </p>
                    {data.Sumatera_Barat.map((e, index) => (
                      <p key={index} onClick={() => this.goMap(e)}>
                        {index + 1}. {e}
                      </p>
                    ))}
                    <p>
                      <strong>Riau</strong>
                    </p>
                    {data.Riau.map((e, index) => (
                      <p key={index} onClick={() => this.goMap(e)}>
                        {index + 1}. {e}
                      </p>
                    ))}
                    <p>
                      <strong>Kepulauan Riau</strong>
                    </p>
                    {data.Kepulauan_Riau.map((e, index) => (
                      <p key={index} onClick={() => this.goMap(e)}>
                        {index + 1}. {e}
                      </p>
                    ))}
                    <p>
                      <strong>Jambi</strong>
                    </p>
                    {data.Jambi.map((e, index) => (
                      <p key={index} onClick={() => this.goMap(e)}>
                        {index + 1}. {e}
                      </p>
                    ))}
                    <p>
                      <strong>Sumatera Selatan</strong>
                    </p>
                    {data.Sumatera_Selatan.map((e, index) => (
                      <p key={index} onClick={() => this.goMap(e)}>
                        {index + 1}. {e}
                      </p>
                    ))}
                    <p>
                      <strong>Bangka Belitung</strong>
                    </p>
                    {data.Bangka_Belitung.map((e, index) => (
                      <p key={index} onClick={() => this.goMap(e)}>
                        {index + 1}. {e}
                      </p>
                    ))}
                    <p>
                      <strong>Bengkulu</strong>
                    </p>
                    {data.Bengkulu.map((e, index) => (
                      <p key={index} onClick={() => this.goMap(e)}>
                        {index + 1}. {e}
                      </p>
                    ))}
                    <p>
                      <strong>Lampung</strong>
                    </p>
                    {data.Lampung.map((e, index) => (
                      <p key={index} onClick={() => this.goMap(e)}>
                        {index + 1}. {e}
                      </p>
                    ))}
                    <p>
                      <strong>DKI JAKARTA</strong>
                    </p>
                    {data.DKI_JAKARTA.map((e, index) => (
                      <p key={index} onClick={() => this.goMap(e)}>
                        {index + 1}. {e}
                      </p>
                    ))}
                    <p>
                      <strong>Jawa Barat</strong>
                    </p>
                    {data.Jawa_Barat.map((e, index) => (
                      <p key={index} onClick={() => this.goMap(e)}>
                        {index + 1}. {e}
                      </p>
                    ))}
                    <p>
                      <strong>Banten</strong>
                    </p>
                    {data.Banten.map((e, index) => (
                      <p key={index} onClick={() => this.goMap(e)}>
                        {index + 1}. {e}
                      </p>
                    ))}
                    <p>
                      <strong>Jawa Tengah</strong>
                    </p>
                    {data.Jawa_Tengah.map((e, index) => (
                      <p key={index} onClick={() => this.goMap(e)}>
                        {index + 1}. {e}
                      </p>
                    ))}
                    <p>
                      <strong>DI Yogyakarta</strong>
                    </p>
                    {data.DI_Yogyakarta.map((e, index) => (
                      <p key={index} onClick={() => this.goMap(e)}>
                        {index + 1}. {e}
                      </p>
                    ))}
                    <p>
                      <strong>Jawa Timur</strong>
                    </p>
                    {data.Jawa_Timur.map((e, index) => (
                      <p key={index} onClick={() => this.goMap(e)}>
                        {index + 1}. {e}
                      </p>
                    ))}
                    <p>
                      <strong>Bali</strong>
                    </p>
                    {data.Bali.map((e, index) => (
                      <p key={index} onClick={() => this.goMap(e)}>
                        {index + 1}. {e}
                      </p>
                    ))}
                    <p>
                      <strong>Nusa Tenggara Barat</strong>
                    </p>
                    {data.NTB.map((e, index) => (
                      <p key={index} onClick={() => this.goMap(e)}>
                        {index + 1}. {e}
                      </p>
                    ))}
                    <p>
                      <strong>Nusa Tenggara Timur</strong>
                    </p>
                    {data.NTT.map((e, index) => (
                      <p key={index} onClick={() => this.goMap(e)}>
                        {index + 1}. {e}
                      </p>
                    ))}
                    <p>
                      <strong>Kalimantan Barat</strong>
                    </p>
                    {data.Kalimantan_Barat.map((e, index) => (
                      <p key={index} onClick={() => this.goMap(e)}>
                        {index + 1}. {e}
                      </p>
                    ))}
                    <p>
                      <strong>Kalimantan Tengah</strong>
                    </p>
                    {data.Kalimantan_Tengah.map((e, index) => (
                      <p key={index} onClick={() => this.goMap(e)}>
                        {index + 1}. {e}
                      </p>
                    ))}
                    <p>
                      <strong>Kalimantan Selatan</strong>
                    </p>
                    {data.Kalimantan_Selatan.map((e, index) => (
                      <p key={index} onClick={() => this.goMap(e)}>
                        {index + 1}. {e}
                      </p>
                    ))}
                    <p>
                      <strong>Kalimantan Timur</strong>
                    </p>
                    {data.Kalimantan_Timur.map((e, index) => (
                      <p key={index} onClick={() => this.goMap(e)}>
                        {index + 1}. {e}
                      </p>
                    ))}
                    <p>
                      <strong>Kalimantan Utara</strong>
                    </p>
                    {data.Kalimantan_Utara.map((e, index) => (
                      <p key={index} onClick={() => this.goMap(e)}>
                        {index + 1}. {e}
                      </p>
                    ))}
                    <p>
                      <strong>Gorongtalo</strong>
                    </p>
                    {data.Gorontalo.map((e, index) => (
                      <p key={index} onClick={() => this.goMap(e)}>
                        {index + 1}. {e}
                      </p>
                    ))}
                    <p>
                      <strong>Sulawesi Utara</strong>
                    </p>
                    {data.Sulawesi_Utara.map((e, index) => (
                      <p key={index} onClick={() => this.goMap(e)}>
                        {index + 1}. {e}
                      </p>
                    ))}
                    <p>
                      <strong>Sulawesi Barat</strong>
                    </p>
                    {data.Sulawesi_Barat.map((e, index) => (
                      <p key={index} onClick={() => this.goMap(e)}>
                        {index + 1}. {e}
                      </p>
                    ))}
                    <p>
                      <strong>Sulawesi Tengah</strong>
                    </p>
                    {data.Sulawesi_Tengah.map((e, index) => (
                      <p key={index} onClick={() => this.goMap(e)}>
                        {index + 1}. {e}
                      </p>
                    ))}
                    <p>
                      <strong>Sulawesi Selatan</strong>
                    </p>
                    {data.Sulawesi_Selatan.map((e, index) => (
                      <p key={index} onClick={() => this.goMap(e)}>
                        {index + 1}. {e}
                      </p>
                    ))}
                    <p>
                      <strong>Sulawesi Tenggara</strong>
                    </p>
                    {data.Sulawesi_Tenggara.map((e, index) => (
                      <p key={index} onClick={() => this.goMap(e)}>
                        {index + 1}. {e}
                      </p>
                    ))}
                    <p>
                      <strong>Maluku</strong>
                    </p>
                    {data.Maluku.map((e, index) => (
                      <p key={index} onClick={() => this.goMap(e)}>
                        {index + 1}. {e}
                      </p>
                    ))}
                    <p>
                      <strong>Maluku Utara</strong>
                    </p>
                    {data.Maluku_Utara.map((e, index) => (
                      <p key={index} onClick={() => this.goMap(e)}>
                        {index + 1}. {e}
                      </p>
                    ))}
                    <p>
                      <strong>Papua</strong>
                    </p>
                    {data.Papua.map((e, index) => (
                      <p key={index} onClick={() => this.goMap(e)}>
                        {index + 1}. {e}
                      </p>
                    ))}
                    <p>
                      <strong>Papua Barat</strong>
                    </p>
                    {data.Papua_Barat.map((e, index) => (
                      <p key={index} onClick={() => this.goMap(e)}>
                        {index + 1}. {e}
                      </p>
                    ))}
                    <div className="muted mt-3" style={{ textAlign: "right" }}>
                      <small>
                        Sumber informasi: Kementerian Kesehatan Republik
                        Indonesia
                      </small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div
                  className="card-header bg-transparent"
                  id="headingDesinfeksi"
                >
                  <h2 className="mb-0">
                    <button
                      className="btn btn-sm"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseDesinfeksi"
                      aria-expanded="true"
                      aria-controls="collapseDesinfeksi"
                    >
                      Cara Desinfeksi
                    </button>
                  </h2>
                </div>

                <div
                  id="collapseDesinfeksi"
                  className="collapse"
                  aria-labelledby="headingDesinfeksi"
                  data-parent="#accordionExample"
                >
                  <div className="card-body">
                    <p>
                      <b>Jenis desinfektan yang dapat digunakan</b>
                    </p>
                    <ol>
                      <li>
                        Bleaching (pemutih) dengan takaran 2 sendok makan per 1L
                        air.
                      </li>
                      <li>
                        Karbol dengan takaran 2 sendok makan per 1L air
                        Pembersih
                      </li>
                      <li>Lantai dengan takaran 1 tutup botol per 5L air</li>
                    </ol>
                    <p>
                      <b>Proses disinfeksi adalah sebagai berikut</b>
                    </p>
                    <ol>
                      <li>
                        Gunakan Alat Pelindung Diri (APD) seperti sarung tangan
                        dan masker sekali pakai saat melakukan disinfeksi.
                        Sarung tangan harus dibuang setelah setiap selesai
                        pembersihan.
                      </li>
                      <li>
                        Persiapkan tisu, kain mikrofiber(MOP)dan botol sprayer.
                      </li>
                      <li>
                        Persiapkan cairan disinfektan yang akan digunakan sesuai
                        dengan takaran yang telah ditetapkan Bagi penggunaankain
                        mikrofiber(MOP), rendam kain mikrofiber(MOP)kedalam air
                        yang telah berisi cairan disifektan. Lakukan pengelapan
                        pada lingkungan permukaan datardan biarkan tetap basah
                        selama 10 menit.
                      </li>
                      <li>
                        Bagi penggunaan botor sprayer, isi botol dengan cairan
                        disinfektan yang telah diencerkan. Ambil 2 lembar tisu
                        dan dilipat 2 atau 4. Semprotkan cairan disinfektan pada
                        tisu dan lakukan pengelapan secara zig-zag atau memutar
                        dari tengah keluar.
                      </li>
                      <li>
                        Untuk disinfeksi ventilasi buatan, sebelum dinyalakan
                        lakukan penyemprotan pada Evaporator, Blower dan
                        penyaringudara (filter)dengan botol sprayeryang telah
                        berisicairan disinfektan. Dilanjutkan dengan disinfeksi
                        pada permukaan chasing indoor AC. Pada AC Sentral
                        dilakukan disinfeksi permukaan pada mounteddan kisi-kisi
                        exhaustdan tidak perlu dibilas.
                      </li>
                      <li>
                        Untuk disinfeksi peralatan pribadi pekerja dapat
                        menggunakan cairan disinfektan personal pada saat
                        sebelum digunakanuntuk bekerja.h.Lepaskan APD dan
                        lanjutkan dengan cuci tangan pakai sabundan air
                        mengalir.i.Frekuensi disinfeksi ini dilaksanakanminimal
                        sebelum jam kerja, saat jam istirahat dan setelah jam
                        kerja. Dengan maksimal disinfeksi setiap 2 jam sekali.
                      </li>
                      <li>
                        Selalu melaksanakan Cuci Tangan Pakai Sabun dan Air
                        Mengalir sebagai bentuk personal hygiene dari pekerja
                      </li>
                    </ol>

                    <div className="muted mt-3" style={{ textAlign: "right" }}>
                      <small>
                        Sumber informasi:
                        https://cekcorona-dinkes.jakarta.go.id/
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-light pt-4 mt-0">
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
                            src="https://suaratani.com/wp-content/uploads/2020/03/DR.dr_.-Erlina-Burhan-MSc-Sp.PK-anggota-Tim-Medis-Covid-19-dan-Jubir-RS-Persahabatan-untuk-Covid-19.jpeg"
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
                              dr. Erlina Burhan, M. Sc, SpP (K)
                            </h5>
                            <p class="card-text">
                              <small class="text-muted">
                                Juru Bicara RS Persahabatan
                              </small>
                            </p>
                            <p class="card-text">
                              "Nah dengan mencuci tangan pakai sabun, virusnya
                              akan mati. Cuci tangan dengan sabun itu efektif,
                              mengapa? Karena virus itu dilapisi oleh lemak. Dan
                              itu akan hancur bila bertemu dengan sabun dibawah
                              air mengalir"
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <Sidebar />
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </Fragment>
    );
  }
}
