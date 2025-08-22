import { revelation } from './data.js';



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

  #whichVersion() {
    const requestedVersion = revelation.requestedVersion;//problem for the future me

    switch (requestedVersion) {
      case 'latest': return this.#latestVersion();
      case 'memory': ////return this.#previouslyOpenedVersion();
      case 'oldest': return this.#oldestVersion();
    }
  }

  findDate() {
    const version = this.#whichVersion();
    return version[0].date
  }

  hasMultDescs() {
    const version = this.#whichVersion();
    return version[0].description.length === 1;
  }

  findDescriptions() {
    const version = this.#whichVersion();
    return version[0].description;
  }

  findTags() {
    if (this.tags.length > 0) {
      let tagArray = [];
      this.tags.forEach(tag => tagArray.push(tag));
      return tagArray;
    } else {
      return [];
    }
  }
};

revelation.content = revelation.content.map(block => {
  return new RevelationBlock(block)
});