class Revelation {
  name;
  version;
  tags;

  constructor(revelationDetails, requestedVersion) {
    this.name = revelationDetails.name;
    this.version = revelationDetails.version;
    this.tags = revelationDetails.tags;
  }

  isDualRevelation() {

  }

  #latestVersion() {

  }
  ////#previouslyOpenedVersion() {}
  //// #oldestVersion() {}

  whichVersion(requestedVersion) {
    switch (requestedVersion) {
      case 'latest': return this.#latestVersion()
      case 'memory': ////return this.#previouslyOpenedVersion()
      case 'oldest': ////return this.#oldestVersion()
    }
  }

  hasMultipleDescriptions() {

  }

  findSearchTags() {

  }
};

export const revelations = [
  {
    name: [
      {
        text: 'Immortalization',
        color: '#33faeb',  
      },/*
      {
        text: 'Octadecafluorooctane',
        color: '#33faeb',  
      },*/
    ],
    version: [
      {
        date: 'Aug 08, 0:03 PM',
        description: [
          'All mediums are stagnant, until realized. Then, the gears shift in motion.',
        ],
        association: [],
      },
    ],
    tags: {
      Meta: 'Meta',
    },
  },


  {
    name: [
      {
        text: 'Memory',
        color: '#af5ae0',  
      },
    ],
    version: [
      {
        date: 'Aug 02, 11:06 AM',
        description: [
          'The general degree of is those of the past.',
          'Prophecies are Memories of the future.',
        ],
        association: ['Time'],
      },
    ],
    tags: {

    },
  },


  {
    name: [
      {
        text: 'Forgettance',
        color: '#8848ee',  
      },
    ],
    version: [
      {
        date: 'Aug 06, 4:27 AM',
        description: [
          'Please do not forget.',
        ],
        association: [],
      },
    ],
    tags: {

    },
  },


  {
    name: [
      {
        text: 'Smile',
        color: '#ecea71',  
      },
    ],
    version: [
      {
        date: 'Aug 02, 5:51 PM',
        description: [
          'Is of many constructs; genuine, schadenfreude, conformity.',
        ],
        association: [],
      },
    ],
    tags: {

    },
  },


  {
    name: [
      {
        text: 'Cycles',
        color: '#62ef8c',  
      },
      {
        text: 'Process',
        color: '#40cfe2',  
      },
    ],
    version: [
      {
        date: 'Aug 05, 3:14 AM',
        description: [
          'Can be categorized as Fate and Duality.',
          'The treadmill one walks is either a Process, or a Cycle. Building your legs is to walk a Cycle to Process muslce growth.'
        ],
        association: [],
      },
      {
        date: 'Aug 16, 7:20 PM',
        description: [
          'We tread on a mill. A Cycle to nowhere; to Progress to vitality.',
          'All Progress becomes a Cycle if Forgotten.',
        ],
        association: [],
      }
    ],
    tags: {
      Dual: 'Dual',
    },
  },


  {
    name: [
      {
        text: 'Exposure',
        color: '#c90a0a',  
      },
    ],
    version: [
      {
        date: 'Aug 17, 2:19 PM',
        description: [
          'Is the mother of learning.',
        ],
        association: [],
      },
    ],
    tags: {
      
    },
  },
].map((revelationDetail) => {
  return new Revelation(revelationDetail, 'latest');
})