const modal = document.querySelector('dialog.modal');
const openModal = document.querySelector('.add-revelation');
const closeModal = document.querySelector('dialog .close');

openModal.addEventListener('click', () => {
  modal.showModal()
})

closeModal.addEventListener('click', () => {
  modal.close()
})