class Toggle {
  #element = '';
  #toggleClass = '';

  constructor(element, toggleClass) {
    this.#element = element;
    this.#toggleClass = toggleClass;

    this.#addHtmlToggle();
  }

  #addHtmlToggle() {
    const elem = document.querySelector(this.#element)
    elem.addEventListener('click', () => {
      if (elem.classList.contains(this.#toggleClass)) {
        elem.classList.remove(this.#toggleClass);
      } else {
        elem.classList.add(this.#toggleClass);
      }
    })
  }
}

new Toggle('.organize-container .order .symbol', 'toggled');