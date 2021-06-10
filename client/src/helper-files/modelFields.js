import { flattenNestedObject } from '../helper-files/helperFunctions'

import upcomingSermonSchema from '../models/upcomingSermonModel'

const getModelFields = (pageSection, language) => {
  switch (pageSection) {
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