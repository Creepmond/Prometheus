const numberOfRevelations = 50;

const contentContainer = document.querySelector('.content-container');
let linesHtml = '';

for (let i = 1; i <= numberOfRevelations; i++) {
  linesHtml += `
    <div>
      Lorem
    </div>
  `
}

contentContainer.innerHTML += linesHtml

/*const numberOfRevelations = 50;

const contentContainer = document.querySelector('.content-container');
let linesHtml = '';

for (let i = 1; i <= numberOfRevelations; i++) {
  linesHtml += `<p>Lorem Ipsum</p>`
}

contentContainer.innerHTML += linesHtml*/