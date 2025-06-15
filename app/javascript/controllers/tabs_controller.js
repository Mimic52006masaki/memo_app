import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["tab", "content"];

  connect() {
    this.showTab(this.tabTargets[0]);
  }

  showTab(tab) {
    this.tabTargets.forEach(t => {
      t.classList.toggle("border-blue-500", t === tab);
      t.classList.toggle("text-blue-600", t === tab);
      t.classList.toggle("text-gray-600", t !== tab);
    });

    this.contentTargets.forEach(c => {
      c.classList.toggle("hidden", c.id !== tab.dataset.tab);
      c.classList.toggle("block", c.id === tab.dataset.tab);
    });
  }

  selectTab(event) {
    this.showTab(event.currentTarget);
  }
}
