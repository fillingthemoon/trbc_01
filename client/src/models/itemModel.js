import {
  pageSectionConvert,
  convertName,
} from '../helper-files/helperFunctions'

const pageSections = {
  // announcements
  announcements: 'announcements',

  // discipleship
  discipleship: 'discipleship',

  // events
  events: 'events',

  // ministry-job-openings
  ministryJobOpenings: 'ministry-job-openings',

  // missions
  missions: 'missions',

  // our-history
  ourHistory: 'our-history',

  // our-team
  administrative: 'administrative',
  ministry: 'ministry',
  pastoral: 'pastoral',

  // outreach
  outreach: 'outreach',

  // resource-library
  resourceLibrary: 'resource-library',

  // services
  englishService: 'english-service',
  sunsetServiceEnglishMandarin: 'sunset-service-english-mandarin',
  teoChewChineseService: 'teochew-chinese-service',

  // statement of faith
  statementOfFaith: 'statement-of-faith',

  // upcoming-sermons
  upcomingSermons: 'upcoming-sermons',
}

const {
  announcements,
  discipleship,
  events,
  ministryJobOpenings,
  missions,
  ourHistory,
  administrative,
  ministry,
  pastoral,
  outreach,
  resourceLibrary,
  englishService,
  sunsetServiceEnglishMandarin,
  teoChewChineseService,
  statementOfFaith,
  upcomingSermons,
} = pageSections

/* Keep updated with server/models/itemModel.js */

// Should be kept updated with
// - AddNewRow.js when more items are added to details
// - helperFunctions.js's flattenNestedObject and nestFlattenedObjectCreate
const details = {
  date: {
    value: 'date',
    tags: [events, upcomingSermons],
  },
  time: {
    value: 'time',
    tags: [
      events,
      outreach,
      englishService,
      sunsetServiceEnglishMandarin,
      teoChewChineseService,
      upcomingSermons,
    ],
  },
  location: {
    value: 'location',
    tags: [
      events,
      outreach,
      englishService,
      sunsetServiceEnglishMandarin,
      teoChewChineseService,
    ],
  },
  person: {
    value: 'person',
    tags: [outreach, upcomingSermons],
  },
  passage: {
    value: 'passage',
    tags: [upcomingSermons],
  },
  type: {
    value: 'type',
    tags: [ministryJobOpenings],
  },
  keyResponsibilities: {
    value: 'keyResponsibilities',
    tags: [ministryJobOpenings],
  },
  requirements: {
    value: 'requirements',
    tags: [ministryJobOpenings],
  },
  linkPath: {
    value: 'linkPath',
    tags: [resourceLibrary],
  },
  linkText: {
    value: 'linkText',
    tags: [resourceLibrary],
  },
}

const langItems = {
  service: {
    value: 'service',
    tags: [englishService, sunsetServiceEnglishMandarin, teoChewChineseService],
  },
  serviceAcronym: {
    value: 'serviceAcronym',
    tags: [englishService, sunsetServiceEnglishMandarin, teoChewChineseService],
  },
  title: {
    value: 'title',
    tags: Object.values(pageSections),
  },
  text: {
    value: 'text',
    tags: Object.values(pageSections),
  },
  summary: {
    value: 'summary',
    tags: [
      ministryJobOpenings,
      englishService,
      sunsetServiceEnglishMandarin,
      teoChewChineseService,
      outreach,
      missions,
    ],
  },
  details: {
    value: details,
    tags: [
      announcements,
      events,
      ministryJobOpenings,
      outreach,
      resourceLibrary,
      englishService,
      sunsetServiceEnglishMandarin,
      teoChewChineseService,
      upcomingSermons,
    ],
  },
  imgSrc: {
    value: 'imgSrc',
    tags: [
      announcements,
      discipleship,
      ministryJobOpenings,
      missions,
      ourHistory,
      administrative,
      ministry,
      pastoral,
      outreach,
      resourceLibrary,
      englishService,
      sunsetServiceEnglishMandarin,
      teoChewChineseService,
    ],
  },
}

const itemEn = {
  pageEn: {
    value: 'pageEn',
    tags: Object.values(pageSections),
  },
  pageSectionEn: {
    value: 'pageSectionEn',
    tags: Object.values(pageSections),
  },
  ...langItems,
}

const itemCh = {
  pageCh: {
    value: 'pageCh',
    tags: Object.values(pageSections),
  },
  pageSectionCh: {
    value: 'pageSectionCh',
    tags: Object.values(pageSections),
  },
  ...langItems,
}

const itemSchema = {
  id: {
    value: 'id',
    tags: Object.values(pageSections),
  },
  itemId: {
    value: 'itemId',
    tags: Object.values(pageSections),
  },
  page: {
    value: 'page',
    tags: Object.values(pageSections),
  },
  pageSection: {
    value: 'pageSection',
    tags: Object.values(pageSections),
  },
  itemEn: {
    value: itemEn,
    tags: Object.values(pageSections),
  },
  itemCh: {
    value: itemCh,
    tags: Object.values(pageSections),
  },
}

// Get the relevant fields/items for this specific pageSection
const getRelevantItems = (relevantItems, itemObject, pageSectionArg) => {
  // Iterate through each field in itemObject
  for (const field of Object.keys(itemObject)) {
    // If the pageSectionArg is tagged to this particular field
    if (itemObject[field].tags.includes(pageSectionArg)) {
      // If the value of the field is a string
      if (typeof itemObject[field].value === 'string') {
        relevantItems[field] = itemObject[field].value

        // If the value of the field is an object
      } else {
        // Recursively access nested objects
        relevantItems[field] = getRelevantItems(
          (relevantItems[field] = {}),
          itemObject[field].value,
          pageSectionArg
        )
      }
    }
  }
  return relevantItems
}

const getItemSchema = (pageArg, pageSectionArg, language) => {
  const relevantItems = { ...getRelevantItems({}, itemSchema, pageSectionArg) }

  relevantItems.page = pageArg
  relevantItems.pageSection = pageSectionArg

  relevantItems.itemEn.pageEn = pageArg
  relevantItems.itemEn.pageSectionEn = pageSectionArg

  relevantItems.itemCh.pageCh = pageArg
  relevantItems.itemCh.pageSectionCh = pageSectionArg

  // Only keep the relevant language fields
  if (language === 'en') {
    delete relevantItems.itemCh
  } else {
    delete relevantItems.itemEn
  }

  // Assign service and serviceAcronym values
  const itemLang = `item${convertName('dashed', 'proper', language)}`
  const serviceFields = ['service', 'serviceAcronym']
  serviceFields
    .filter((field) => Object.keys(relevantItems[itemLang]).includes(field))
    .forEach((field) => {
      relevantItems[itemLang][field] = pageSectionConvert(pageSectionArg, field)
    })

  return relevantItems
}

export default getItemSchema
