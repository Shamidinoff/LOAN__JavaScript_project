export default class ShowInfo {
  constructor(trigers) {
    this.btns = document.querySelectorAll(trigers);
  }

  init() {
    this.btns.forEach((btn) => {
      btn.addEventListener("click", () => {
        btn.closest(".module__info-show").nextElementSibling.style.display =
          "block";
      });
    });
  }
}
