import { revelation } from '../data.js';
import '../revelation.js';



const formatBlock = {
  name(block) {
    if (!block.isDualRevelation()) {
      const color = block.name[0].color;
      const title = block.name[0].text;

      return `
      <span style="color:${color};text-shadow:0 0 8px ${color}44">${title}</span>`;
    }
    else {
      return `
      <span class="pair one" style="color:${block.name[0].color};text-shadow:0 0 8px ${block.name[0].color}44">${block.name[0].text}</span> &
      <span class="pair two" style="color:${block.name[1].color};text-shadow:0 0 8px ${block.name[1].color}44">${block.name[1].text}</span>`;
    }
  },

  description(block) {
    if (block.hasMultDescs()) {
      return `<span class="bullet bul0">${block.version[0].description}</span>`;
    } else {
      let display = '';

      const descArray = block.findDescriptions();
      descArray.forEach((desc, index) => {
        display += `<span class="bullet bul${index}">${desc}</span>`
      });
      return display;
    }
  },

  tags(block) {
    const tagArray = block.findTags();
    let display = '';
    
    if (tagArray.length > 0)
    tagArray.forEach(tag => display += `<div class="tag">${tag}</div>`);

    return display;
  },
};



let htmlRevelation = '';
revelation.content.forEach(block => {
  htmlRevelation += `
    <div class="revelation ${block.name[0].text}">
      <div class="identifier">
        <div class="title">${formatBlock.name(block)}</div>
        <span class="date">${block.findDate()}</span>
      </div>

      <div class="description">${formatBlock.description(block)}</div>

      <div class="tags">${formatBlock.tags(block)}</div>
      <span class="association"></span>
    </div>
  `;
})

document.querySelector('.revelation-container').innerHTML = htmlRevelation;