import { revelations } from './data.js'

const contentContainer = document.querySelector('.revelation-container');
let linesHtml = '';

revelations.forEach((content) => {
  linesHtml += `
    <div class="revelation ${content.name[0].toLowerCase()}">
      <div class="identifier">
        <div class="title">
          <span class="pair one" style="color:${content.color[0]};text-shadow:0 0 8px ${content.color[0]}22">${content.name[0]}</span> &
          <span class="pair two" style="color:${content.color[1]};text-shadow:0 0 8px ${content.color[1]}22">${content.name[1]}</span>
        </div>
        <span class="date">${content.date}</span>
      </div>

      <div class="description">
        <span class="bullet1">${content.description[0]}</span>
      </div>

      <div class="tags">
        <div class="tag">Meta</div>
        <div class="tag">Dual</div>
      </div>
      <span class="association"></span>
    </div>
  `
})

contentContainer.innerHTML += linesHtml;

/*const numberOfRevelations = 50;

const contentContainer = document.querySelector('.content-container');
let linesHtml = '';

for (let i = 1; i <= numberOfRevelations; i++) {
  linesHtml += `<p>Lorem Ipsum</p>`
}

contentContainer.innerHTML += linesHtml*/