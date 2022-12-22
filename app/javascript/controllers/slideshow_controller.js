import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["slide"];
  static values = { active: Number };
  initialize() {
    console.log("Hello, Stimulus!", this.element);
    this.showNextSlide();
  }
  next() {
    this.activeValue++;
    this.showNextSlide();
  }
  previous() {
    this.activeValue--;
    this.showNextSlide();
  }
  showNextSlide() {
    console.log(this.activeValue);
    this.slideTargets.forEach((element, index) => {
      element.hidden = index != this.activeValue;
    });
  }
}
