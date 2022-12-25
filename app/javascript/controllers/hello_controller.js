import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["name", "userName", "source"];
  connect() {
    // console.log("Hello, Stimulus!", this.element);
    setInterval(() => {
      // setTimeout(() => {
      console.log("Hello, Stimulus!", this.element);
      fetch("http://localhost:3000/", {
        headers: { Accept: "text/vnd.turbo-stream.html" },
      })
        .then((response) => response.text())
        .then((html) => {
          Turbo.renderStreamMessage(html);
        })
        .catch((error) => {
          console.log(error);
        });
    }, 1000);
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
