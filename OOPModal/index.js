class Modal {
  constructor(text) {
    this.text = text;
  }
  init() {
    this.renderModal();
    console.log("init");
    this.modal = document.querySelector("#myModal");
    this.closeBtn = document.querySelector(".close");
    this.addEvent();
  }
  renderModal() {
    document.body.insertAdjacentHTML(
      "beforeend",
      `<div id="myModal" class="modal">
      <!-- Modal content -->
      <div class="modal-content">
        <span class="close">&times;</span>
        <p>${this.text}</p>
      </div>
    </div>`
    );
  }
  addEvent() {
    this.closeFn = this.closeFn.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.closeBtn.addEventListener("click", this.closeFn);
    window.addEventListener("click", this.handleClick);
  }

  handleClick(e) {
    if (e.target === this.modal) {
      this.closeFn();
    }
  }

  closeFn() {
    this.modal.remove();
    this.modal = null;
  }

  detachEvents() {
    this.closeBtn.removeEventListener("click", this.closeFn);
    window.removeEventListener("click", this.handleClick);
  }
}
