import { revelation } from './data.js'



class RevelationBlock {
  name; version; requestedVersion; tags;

  constructor(revelationBlock) {
    this.name = revelationBlock.name;
    this.version = revelationBlock.version;
    this.tags = revelationBlock.tags;
  }

  isDualRevelation() {
    return this.name.length !== 1;
  }

  #latestVersion() {
    return this.version.toReversed();
  }
  ////#previouslyOpenedVersion() {}
  
  #oldestVersion() {
    return this.version.toSorted();
  }

  whichVersion() {
    const requestedVersion = revelation.requestedVersion;//problem for the future me

    switch (requestedVersion) {
      case 'latest': return this.#latestVersion();
      case 'memory': ////return this.#previouslyOpenedVersion();
      case 'oldest': return this.#oldestVersion();
    }
  }

  hasMultipleDescriptions() {
    const version = this.whichVersion();
    return version[0].description.length !== 1;
  }

  findTags() {
    if (this.tags.length > 0) {
      let tagArray = [];
      this.tags.forEach(tag => tagArray.push(tag));
      return tagArray;
    } else {
      return [''];
    }
  }
};

const revelationContainer = document.querySelector('.revelation-container');
revelation.content = revelation.content.map(block => {
  return new RevelationBlock(block)
});

/*
function latestVersion(content) {
  const latestDate = content.version.toReversed();
  revelationHtml.date = latestDate[0].date;
}

isDualRevelation() {
    if (this.name.length === 1) {
      return `
      <span style="color: ${this.name[0].color}; text-shadow:0 0 8px ${this.name[0].color}44">${this.name[0].text}</span>`
    } 
    else {
      return `
      <span class="pair one" style="color:${this.name[0].color};text-shadow:0 0 8px ${this.name[0].color}44">${this.name[0].text}</span> &
      <span class="pair two" style="color:${this.name[1].color};text-shadow:0 0 8px ${this.name[1].color}44">${this.name[1].text}</span>
    `;
    }
  }
    let display = '';
    Object.keys(this.tags).forEach(tag => display += `<div class="tag">${tag}</div>`)
    return display;

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
  
function searchTags(content) {
  revelationHtml.tags = '';
  Object.keys(content.tags).forEach((tag) => {
    revelationHtml.tags += `<div class="tag">${tag}</div>`;
  })
}
  */

let revelationHtml = '';

revelation.content.forEach(block => {
  revelationHtml += `
    <div class="revelation">
      <div class="identifier">
        <div class="title">${block.isDualRevelation()}</div>
        <span class="date">${2 ** 16}</span>
      </div>

      <div class="description">${block.hasMultipleDescriptions()}</div>

      <div class="tags">${block.findTags()}</div>
      <span class="association"></span>
    </div>
  `;
})

revelationContainer.innerHTML = revelationHtml;



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

const toggleOrderHtml = new Toggle('.organize-container .order .symbol', 'toggled');