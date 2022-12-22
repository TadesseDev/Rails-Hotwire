import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["name", "userName", "source"];
  connect() {
    console.log("Hello, Stimulus!", this.element);
  }
  greet(event) {
    this["userNameTarget"].textContent = "Hello Dear " + this.nameTarget.value;
    console.log(event.target);
  }

  copy(event) {
    event.preventDefault();
    this.sourceTarget.select();
    document.execCommand("copy");
  }
}
