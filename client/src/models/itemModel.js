import { pageSectionTranslate, convertName } from '../helper-files/helperFunctions'

const pageSections = {
  // announcements
  announcements: 'announcements',

  // church-wide
  interestGroups: 'interest-groups',
  secondLanguageClasses: 'second-language-classes',

  // discipleship
  discipleship: 'discipleship',

  // events
  events: 'events',

  // im-new
  imNew: 'im-new',

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

  // services
  englishService: 'english-service',
  sunsetServiceEnglishMandarin: 'sunset-service-english-mandarin',
  teoChewChineseService: 'teo-chew-chinese-service',

  // statement of faith
  statementOfFaith: 'statement-of-faith',

  // upcoming-sermons
  upcomingSermons: 'upcoming-sermons',
}

const {
  announcements,
  interestGroups,
  secondLanguageClasses,
  discipleship,
  events,
  imNew,
  missions,
  ourHistory,
  administrative,
  ministry,
  pastoral,
  outreach,
  englishService,
  sunsetServiceEnglishMandarin,
  teoChewChineseService,
  statementOfFaith,
  upcomingSermons,
} = pageSections

/* Keep updated with server/models/itemModel.js */

const link = {
  path: {
    value: 'path',
    tags: [imNew],
  },
  text: {
    value: 'text',
    tags: [imNew],
  },
}

// Need to update AddNewRow.js when more items are added to details
const details = {
  date: {
    value: 'date',
    tags: [events, upcomingSermons],
  },
  time: {
    value: 'time',
    tags: [
      secondLanguageClasses, interestGroups,
      events,
      outreach,
      englishService, sunsetServiceEnglishMandarin, teoChewChineseService,
      upcomingSermons,
    ],
  },
  location: {
    value: 'location',
    tags: [
      secondLanguageClasses, interestGroups,
      events,
      outreach,
      englishService, sunsetServiceEnglishMandarin, teoChewChineseService,
    ],
  },
  person: {
    value: 'person',
    tags: [
      announcements,
      secondLanguageClasses, interestGroups,
      outreach,
      upcomingSermons,
    ],
  },
  passage: {
    value: 'passage',
    tags: [upcomingSermons],
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
  details: {
    value: details,
    tags: [
      announcements,
      secondLanguageClasses, interestGroups,
      events,
      outreach,
      englishService, sunsetServiceEnglishMandarin, teoChewChineseService,
      upcomingSermons,
    ],
  },
  imgSrc: {
    value: 'imgSrc',
    tags: [
      announcements,
      secondLanguageClasses, interestGroups,
      discipleship,
      imNew,
      missions,
      ourHistory,
      administrative,
      ministry,
      pastoral,
      outreach,
      englishService, sunsetServiceEnglishMandarin, teoChewChineseService,
    ],
  },
  link: {
    value: link,
    tags: [imNew],
  },
}

const itemEn = {
  pageEn: {
    value: 'pageEn',
    tags: Object.values(pageSections),
  },
  pageSectionEn: {
    value: 'pageSectionEn',
    tags: Object.values(pageSections)
  },
  ...langItems,
}

const itemCh = {
  pageCh: {
    value: 'pageCh',
    tags: Object.values(pageSections)
  },
  pageSectionCh: {
    value: 'pageSectionCh',
    tags: Object.values(pageSections)
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
          relevantItems[field] = {},
          itemObject[field].value,
          pageSectionArg,
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
    .filter(field => Object.keys(relevantItems[itemLang]).includes(field))
    .forEach(field => {
      relevantItems[itemLang][field] = pageSectionTranslate(pageSectionArg, field)
    })

  return relevantItems
}

export default getItemSchema
