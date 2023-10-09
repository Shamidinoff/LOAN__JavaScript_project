export default class VideoPlayer {
  constructor(triggers, overlay) {
    this.btns = document.querySelectorAll(triggers);
    this.overlay = document.querySelector(overlay);
    this.close = this.overlay.querySelector(".close");
  }

  //   play() {}

  createPlayer(url) {
    this.player = new YT.Player("player", {
      height: "360",
      width: "640",
      videoId: "M7lc1UVf-VE",
    });
  }

  init() {
    const tag = document.createElement("script");

    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    this.btns.forEach((btn) => {
      btn.addEventListener("click", () => {
        console.log("Hello");
      });
    });
  }
}
