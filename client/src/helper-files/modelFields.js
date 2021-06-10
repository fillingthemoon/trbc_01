import { flattenNestedObject } from '../helper-files/helperFunctions'

import announcementSchema from '../models/announcementModel'
import upcomingSermonSchema from '../models/upcomingSermonModel'

const getModelFields = (pageSection, language) => {
  switch (pageSection) {
    case ('announcements'): {
      const { itemId, id, page, pageSection, itemEn, itemCh } = announcementSchema
      return language === 'en'
        ? flattenNestedObject(flattenNestedObject({ itemId, id, page, pageSection, itemEn }))
        : flattenNestedObject(flattenNestedObject({ itemId, id, page, pageSection, itemCh }))
    }
    // church-wide
    case ('second-language-classes'):
    case ('interest-groups'): {
      const { itemId, id, page, pageSection, itemEn, itemCh } = upcomingSermonSchema
      return language === 'en'
        ? flattenNestedObject(flattenNestedObject({ itemId, id, page, pageSection, itemEn }))
        : flattenNestedObject(flattenNestedObject({ itemId, id, page, pageSection, itemCh }))
    }
    case ('discipleship'): {
      const { itemId, id, page, pageSection, itemEn, itemCh } = upcomingSermonSchema
      return language === 'en'
        ? flattenNestedObject(flattenNestedObject({ itemId, id, page, pageSection, itemEn }))
        : flattenNestedObject(flattenNestedObject({ itemId, id, page, pageSection, itemCh }))
    }
    case ('events'): {
      const { itemId, id, page, pageSection, itemEn, itemCh } = upcomingSermonSchema
      return language === 'en'
        ? flattenNestedObject(flattenNestedObject({ itemId, id, page, pageSection, itemEn }))
        : flattenNestedObject(flattenNestedObject({ itemId, id, page, pageSection, itemCh }))
    }
    case ('im-new'): {
      const { itemId, id, page, pageSection, itemEn, itemCh } = upcomingSermonSchema
      return language === 'en'
        ? flattenNestedObject(flattenNestedObject({ itemId, id, page, pageSection, itemEn }))
        : flattenNestedObject(flattenNestedObject({ itemId, id, page, pageSection, itemCh }))
    }
    case ('missions'): {
      const { itemId, id, page, pageSection, itemEn, itemCh } = upcomingSermonSchema
      return language === 'en'
        ? flattenNestedObject(flattenNestedObject({ itemId, id, page, pageSection, itemEn }))
        : flattenNestedObject(flattenNestedObject({ itemId, id, page, pageSection, itemCh }))
    }
    case ('our-history'): {
      const { itemId, id, page, pageSection, itemEn, itemCh } = upcomingSermonSchema
      return language === 'en'
        ? flattenNestedObject(flattenNestedObject({ itemId, id, page, pageSection, itemEn }))
        : flattenNestedObject(flattenNestedObject({ itemId, id, page, pageSection, itemCh }))
    }
    // our-team
    case ('administrative'):
    case ('ministry'):
    case ('pastory'): {
      const { itemId, id, page, pageSection, itemEn, itemCh } = upcomingSermonSchema
      return language === 'en'
        ? flattenNestedObject(flattenNestedObject({ itemId, id, page, pageSection, itemEn }))
        : flattenNestedObject(flattenNestedObject({ itemId, id, page, pageSection, itemCh }))
    }
    case ('outreach'): {
      const { itemId, id, page, pageSection, itemEn, itemCh } = upcomingSermonSchema
      return language === 'en'
        ? flattenNestedObject(flattenNestedObject({ itemId, id, page, pageSection, itemEn }))
        : flattenNestedObject(flattenNestedObject({ itemId, id, page, pageSection, itemCh }))
    }
    // services
    case ('english-service'):
    case ('sunset-service-english-mandarin'):
    case ('teo-chew-chinese-service'): {
      const { itemId, id, page, pageSection, itemEn, itemCh } = upcomingSermonSchema
      return language === 'en'
        ? flattenNestedObject(flattenNestedObject({ itemId, id, page, pageSection, itemEn }))
        : flattenNestedObject(flattenNestedObject({ itemId, id, page, pageSection, itemCh }))
    }
    case ('statement-of-faith'): {
      const { itemId, id, page, pageSection, itemEn, itemCh } = upcomingSermonSchema
      return language === 'en'
        ? flattenNestedObject(flattenNestedObject({ itemId, id, page, pageSection, itemEn }))
        : flattenNestedObject(flattenNestedObject({ itemId, id, page, pageSection, itemCh }))
    }
    case ('upcoming-sermons'): {
      const { itemId, id, page, pageSection, itemEn, itemCh } = upcomingSermonSchema
      return language === 'en'
        ? flattenNestedObject(flattenNestedObject({ itemId, id, page, pageSection, itemEn }))
        : flattenNestedObject(flattenNestedObject({ itemId, id, page, pageSection, itemCh }))
    }
  }
}

export {
  getModelFields,
}