export default class VideoPlayer {
  constructor(triggers, overlay) {
    this.btns = document.querySelectorAll(triggers);
    this.overlay = document.querySelector(overlay);
    this.close = this.overlay.querySelector(".close");
  }

  play() {
    this.btns.forEach((btn) => {
      btn.addEventListener("click", () => {
        console.log("Hello");
      });
    });
  }
}
