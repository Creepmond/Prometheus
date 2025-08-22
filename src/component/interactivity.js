export default class Interactible {
  #element;
  #input; //declared only if elem is defined as input

  constructor(interactibleType, element) {
    this.#element = element;

    switch (interactibleType) {
      case 'modal': return this.#createsModal();
      case 'input': return this.#isInput();
      case 'toggle': return this.#isToggle();
    }
  }

  #isToggle() {
    const elem = document.querySelector(this.#element)
    elem.addEventListener('click', () => {
      if (elem.classList.contains('toggled')) {
        elem.classList.remove('toggled');
      } else {
        elem.classList.add('toggled');
      }
    })
  }

  #isInput() {
    const elem = document.querySelector(this.#element);
    const editable = `<span class="editable empty-input" contenteditable="plaintext-only"></span>`;
    elem.innerHTML = editable;

    this.#input = document.querySelector(`${this.#element} .editable`);

    this.#input.addEventListener('keydown', () => this.#input_checkIfEmpty());
  }

  #input_checkIfEmpty() {
    //this is probably the most convoluted solution i had ever given to a problem,
    //but ive already been reached descend into the deep pits of sunk cost fallacy; there was a more elaborate solution, and hell am i glad i got to delete keys.js

    //this uses setTimeout because trying to peer into what elemEditable's value is (using .innerText or other variants) had the order messed up. it performed the console.log prior to modifying how it looked (or so i assume), hence the logged value of elemEditable was one key the previous one

    //...hi, so future me here, probably only after five minutes actually, you probably have no clue what im talking about. this USED to be a setTimeout() for logging the innerText of the elemEditable(input), but unfortunately ive come to realize that i actually dont need this since js probably already knows this, only that its already been logged so... yeah. again, you can see a pattern, sunk cost fallacy, im not bothering to rewrite those first two comments, this was too much commitment for one commit

    //...hi again, its future me again, maybe ten minutes now? turns out i DO need setTimeout, thank goodness the second vain i reached wasnt in vain... is that even the right word? apologies for using purple prose
    setTimeout(() => {
      if (!this.#input.innerText.length) {
        this.#input.classList.add('empty-input')
      } else
      if (this.#input.classList.contains('empty-input')) {
        this.#input.classList.remove('empty-input')
      }
    }, 50)
  }

  #createsModal() {//this would be modified later
    const modal = document.querySelector('dialog.modal');
    const openModal = document.querySelector(this.#element);
    const closeModal = document.querySelector('dialog .close')

    openModal.addEventListener('click', () => {
      modal.showModal()
    })

    closeModal.addEventListener('click', () => {
      modal.close()
    })
  }
}