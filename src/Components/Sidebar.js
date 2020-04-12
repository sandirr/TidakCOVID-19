import React from "react";

function Sidebar() {
  return (
    <ul className="list-group mt-2">
      <li className="list-group-item active bg-info">
        Pencegahan Virus Corona
        <br />
        <small>Sumber Informasi: alodokter.com</small>
      </li>
      <li className="list-group-item">Mencuci tangan dengan benar</li>
      <li className="list-group-item">Menggunakan masker</li>
      <li className="list-group-item">Menjaga daya tahan tubuh</li>
      <li className="list-group-item">Tidak pergi ke negara terjangkit</li>
      <li className="list-group-item">
        Menghindari kontak dengan hewan yang berpotensi menularkan coronavirus
      </li>
    </ul>
  );
}

export default Sidebar;
