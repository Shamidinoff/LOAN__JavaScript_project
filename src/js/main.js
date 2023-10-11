import MainSlider from "./modules/slider/slider-main";
import VideoPlayer from "./modules/playVideo";
import MiniSlider from "./modules/slider/slider-mini";

window.addEventListener("DOMContentLoaded", () => {
  const slider = new MainSlider({ btns: ".next", container: ".page" });
  slider.render();

  const showUpSlider = new MiniSlider({
    contaner: ".showup__content-slider",
    prev: ".showup__prev",
    next: ".showup__next",
  });
  showUpSlider.init();

  const player = new VideoPlayer(".showup .play", ".overlay");
  player.init();
});
