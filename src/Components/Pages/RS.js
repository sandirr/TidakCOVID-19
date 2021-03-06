const data = {
  Aceh: ["RSU Dr. Zainoel Abidin Banda Aceh", "RSU Cut Meutia Lhokseumawe"],
  Sumatera_Utara: [
    "RSU H. Adam Malik Medan",
    "RSU Kabanjahe",
    "RSU Djasamen Saragih",
    "RSU Tarutung",
    "RSU Padang Sidempuan",
  ],
  Sumatera_Barat: ["RSUP Dr. M. Jamil Padang", "RSU Dr. Achmad Mochtar"],
  Riau: [
    "RSU Dr. Achmad Mochtar",
    "RSU Kota Dumai",
    "RSUD Puri Husada Tembilahan",
  ],

  Kepulauan_Riau: [
    "RSUD Embung Fatimah",
    "RS Badan Pengusahaan Batam",
    "RSUD Raja hmad Tabib",
    "RSUD Karimun",
  ],
  Jambi: ["RSU Raden Mattaher Jambi"],
  Sumatera_Selatan: [
    "RSUP Dr. M. Hoesin Palembang",
    "RSU Kayu Agung",
    "RSUD Kabupaten Lahat",
    "RSUD Siti Aisyah Lubuh Linggau",
    "RSUD Siti Fatimah",
    "RS Dr. Rifai Abdullah",
  ],
  Bangka_Belitung: ["RSU Tanjung Pandan", "RSU Pangkal Pinang"],
  Bengkulu: [
    "RSU Dr. M. Yunus Bengkulu",
    "RSU Arga Makmur",
    "SUD Hasanuddin Damrah Manna",
  ],
  Lampung: [
    "RSU Abdul Moeloek",
    "SU Kalianda",
    "RSU Mayjend HM Ryacudu",
    "RSU Ahmad Yani",
  ],
  DKI_JAKARTA: [
    "RSPI Dr. Sulianti Saroso",
    "RSU Persahabatan",
    "RSPAD Gatot Subroto",
    "RSUP Fatmawati",
    "RSUD Tarakan",
    "RSUD Pasar Rebo",
    "RS Bhayangkara Said Soekanto",
    "RSAL Mintoharjo",
  ],
  Jawa_Barat: [
    "RSU Dr. Hasan Sadikin Bandung",
    "STP Dr. H. A. Rotinsulu Bandung",
    "RSUD Gunung Jati Cirebon",
    "RSUD Slamet Garut",
    "RSUD Sekarwangi Sukabumi",
    "RSUD Kab. Indramayu",
    "RS Paru Goenawan Partowidgdo",
    "RS Tk. II Dustira",
  ],
  Banten: ["RSUD Kab. Tangerang", "RSUD Serang"],
  Jawa_Tengah: [
    "RSU Dr. Kariadi Semarang",
    "RSU Dr. Suraji Tirtonegoro",
    "RSU Prof. Dr. Margono Soekarjo",
    "RSUD Pekalongan",
    "RSUD Soeselo Slawi",
    "RSUD RAA. Soewondo",
    "RSUD Tidar Magelang",
    "RSUD Moewardi",
    "RSUD Banyumas",
    "RSU Kudus",
    "RS Paru Dr. Aryo Wirawan",
    "RSUD Kota Semarang",
    "RSUD Kardinah Tegal",
  ],
  DI_Yogyakarta: [
    "RSUP Dr. Sardjito",
    "RSUD Panembahan Senopati Bantul",
    "RSUD Wonosari",
    "RSUD Wates",
  ],
  Jawa_Timur: [
    "RSUD Soebandi Jember",
    "RS Pare",
    "RSU Dr. Soetomo",
    "RS Dr. Soedono Madiun",
    "RSU Dr. Saiful Anwar",
    "RS Dr. R. Koesma Tuban",
    "RSUD Blambangan",
    "RSUD Dr. S. Djatikoesoemo",
    "RSUD Iskak Tulungagung",
  ],
  Bali: [
    "RSUP Sanglah",
    "RSU Sajiwani Gianyar",
    "RSUD Tabanan",
    "RSUD Kab. Buleleng",
  ],
  NTB: ["RSUD NTB", "RSUD Kota Bima", "RSUD Dr. Sudjono", "RSUD Praya"],
  NTT: [
    "RSU Prof. Dr. WZ Johanes",
    "RSU Dr. TC Hillers Maumere",
    "RSUD Komando Labuhan Bajo",
  ],
  Kalimantan_Barat: [
    "RSU Dr. Sudarso Pontianak",
    "RSU Dr. Abdul Aziz Singkawang",
    "RSUD Ade Muhammad dJoen Sintang",
    "RSUD Agoesdjam Ketapang",
    "RSUD Sultan Imanudin Pangkalan Bui",
  ],
  Kalimantan_Tengah: [
    "RSU Dr. Doris Sylvianus Palangkaraya",
    "RSU Dr. Murjani Sampit",
  ],
  Kalimantan_Selatan: ["RSUD Ulin Banjarmasin", "RSUD Idaman Banjarbaru"],
  Kalimantan_Timur: [
    "RSU Panglima Sebaya",
    "RSU Taman Husada Bontang",
    "RSU Dr. Kanujoso Djatiwibow",
    "RSU H. A. Wahab Sjahranie",
    "RSUD Aji Muhammad Parikesit",
  ],
  Kalimantan_Utara: ["RSUD Tanjung Selor", "RSU Kota Tarakan"],
  Gorontalo: ["RSU Prof. Dr. H. Aloei Saboe"],
  Sulawesi_Utara: [
    "RSU Prof. DR. RD. Kandou",
    "RSU Dr. Sam Ratulangi",
    "RSU Ratatotok Buyat",
    "RSUD Kota Kotamabagu",
  ],
  Sulawesi_Barat: ["RSUD Provinsi Sulawesi Barat"],
  Sulawesi_Tengah: [
    "RSUD Kota Kotamabagu",
    "RSUD Kab. Banggai Luwuk",
    "RSU Mokopido Toli-Toli",
    "RSUD Kolonedale",
    "RSU Anutapura Palu",
  ],
  Sulawesi_Selatan: [
    "RSU Dr. Wahidin Sudirohusodo",
    "RSU Andi Makkasau Pare-Pare",
    "RSU Lakipadada Tana Toraja",
    "RSU Kab. Sinja",
    "RS Universitas Hasanuddin",
    "RSUD Labuang Baj",
    "RS Tk. II Pelamonia",
    "RS Tadjuddin Chalid",
  ],
  Sulawesi_Tenggara: ["RS Kendari"],
  Maluku: ["RSU Dr. M. Haulussy Ambon", "RSUP Leimena"],
  Maluku_Utara: ["RSU Chasan Basoeri Ternate", "RSUD Sofifi"],
  Papua: ["RSU Jayapura", "RSU Nabire", "RSU Merauke"],
  Papua_Barat: ["RSUD Manokwari", "RSUD Kab. Sorong"],
};

export default data;
