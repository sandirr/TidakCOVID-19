import React from "react";
import Pencegahan from "./Modals/Pencegahan";

function Sidebar() {
  return (
    <>
      <ul
        className="list-group sidebar mt-2"
        data-toggle="modal"
        data-target="#pencegahan"
      >
        <li className="list-group-item active bg-info">
          Pencegahan Virus Corona
          <br />
          <small>Sumber Informasi: alodokter.com</small>
        </li>
        <li className="list-group-item to-modal">
          Mencuci tangan dengan benar
        </li>
        <li className="list-group-item to-modal">Menggunakan masker</li>
        <li className="list-group-item to-modal">Menjaga daya tahan tubuh</li>
        <li className="list-group-item to-modal">
          Tidak pergi ke negara terjangkit
        </li>
        <li className="list-group-item to-modal">
          Menghindari kontak dengan hewan yang berpotensi menularkan coronavirus
        </li>
      </ul>
      <Pencegahan />
    </>
  );
}

export default Sidebar;
