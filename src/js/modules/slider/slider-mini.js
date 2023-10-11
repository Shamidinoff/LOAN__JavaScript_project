import Slider from "./slider";

export default class MiniSlider extends Slider {
  constructor(container, next, prev) {
    super(container, next, prev);
  }

  init() {
    this.container.style.cssText = `
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    align-items: flex-start;
    `;
  }
}
