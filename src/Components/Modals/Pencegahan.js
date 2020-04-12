import React from "react";

function Pencegahan() {
  return (
    <div class="modal fade" id="pencegahan">
      <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalCenterTitle">
              Bagaimana Melakukannya ?
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <img
              src="./img/cegah.JPG"
              style={{ width: "100%" }}
              alt="https://corona.jakarta.go.id/id"
            />
            <div style={{ textAlign: "right" }}>
              <small>Sumber: https://corona.jakarta.go.id/id</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pencegahan;
