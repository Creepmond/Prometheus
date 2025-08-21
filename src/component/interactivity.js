export default class Interactible {
  #element;

  constructor(interactibleType, element) {
    this.#element = element;

    switch (interactibleType) {
      case 'modal': this.#isModal();
      case 'toggle': this.#isToggle();
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

  #isModal() {
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