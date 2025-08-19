import { revelations } from './data.js'



/// HTML

const revelationContainer = document.querySelector('.revelation-container');
let revelationHtml = {
  block: '',
  title: '',
  version: [
    {
    date: '',
    description: '',
    }
  ],
  tags: '',
};

function isDualRevelation(content) {
  if (!content.tags.Dual) {
    revelationHtml.title = `
      <span style="color:${content.name[0].color};text-shadow:0 0 8px ${content.name[0].color}44">${content.name[0].text}</span>
    `;
  }
  else {
    revelationHtml.title = `
      <span class="pair one" style="color:${content.name[0].color};text-shadow:0 0 8px ${content.name[0].color}44">${content.name[0].text}</span> &
      <span class="pair two" style="color:${content.name[1].color};text-shadow:0 0 8px ${content.name[1].color}44">${content.name[1].text}</span>
    `;
  }
}

function latestVersion(content) {
  const latestDate = content.version.toReversed();
  revelationHtml.date = latestDate[0].date;
}

function hasMultipleDescriptions(content) {//wow this is abhorrent... just take notice that yes, this writing is terrible, ill try refactoring it when i can actually understand what im doing
  if (content.version[0].description.length === 1) {
    revelationHtml.version[0].description = `
      <span class="bullet bul0">${content.version[0].description}</span>
    `;
  }
  else {
    const latestDescriptions = content.version.toReversed();

    revelationHtml.version[0].description = '';
    latestDescriptions[0].description.forEach((desc, index) => {
      revelationHtml.version[0].description += `<span class="bullet bul${index}">${desc}</span>`
    })
  }
}

function hasSearchTags(content) {
  revelationHtml.tags = '';
  Object.keys(content.tags).forEach((tag) => {
    revelationHtml.tags += `<div class="tag">${tag}</div>`;
  })
}

revelations.forEach((content) => {
  isDualRevelation(content)
  latestVersion(content)
  hasMultipleDescriptions(content)
  hasSearchTags(content)

  revelationHtml.block += `
    <div class="revelation ${content.name[0].text.toLowerCase()}"><!--be careful here, i should find a way to check (if only it has) two names-->
      <div class="identifier">
        <div class="title">${revelationHtml.title}</div>
        <span class="date">${revelationHtml.date}</span>
      </div>

      <div class="description">${revelationHtml.version[0].description}</div>

      <div class="tags">${revelationHtml.tags}</div>
      <span class="association"></span>
    </div>
  `;
})

revelationContainer.innerHTML = revelationHtml.block;



class Toggle {
  element = '';
  toggleClass = '';

  constructor(element, toggleClass) {
    this.element = element;
    this.toggleClass = toggleClass;

    this.addHtmlToggle();
  }

  addHtmlToggle() {
    const elem = document.querySelector(this.element)
    elem.addEventListener('click', () => {
      if (elem.classList.contains(this.toggleClass)) {
        elem.classList.remove(this.toggleClass);
      }
      else {
        elem.classList.add(this.toggleClass);
      }
    })
  }
}

const toggleOrderHtml = new Toggle('.organize-container .order .symbol', 'toggled');

/*
function IsTogglable() {
  const element = {
    addHtmlToggle(element, toggleClass) {
      const elem = document.querySelector(element)
      elem.addEventListener('click', () => {
        if (elem.classList.contains(toggleClass)) {
          elem.classList.remove(toggleClass);
        }
        else {
          elem.classList.add(toggleClass);
        }  
      })
    }
  };

  return element;
}

const blank = IsTogglable();
blank.addHtmlToggle('.organize-container .order .symbol', 'toggled');
*/

/*
const toggleOrderHtml = document.querySelector('.organize-container .order .symbol');
toggleOrderHtml.addEventListener('click', () => {
  if (toggleOrderHtml.classList.contains('toggled')) {
    toggleOrderHtml.classList.remove('toggled')
  }
  else {
    toggleOrderHtml.classList.add('toggled')
  }
})
  */

document.querySelectorAll('.revelation').forEach((block) => {
  block.querySelector(':scope > .identifier > .date').addEventListener('click', () => {
    block.classList
  })
})

//12 55 06 - Modules