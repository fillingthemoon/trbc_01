/* Keep updated with server/models/itemModel.js */

const link = {
  path: 'path',
  text: 'text',
}

// Need to update AddNewRow.js when more items are added to details
const details = {
  date: 'date',
  time: 'time',
  location: 'location',
  person: 'person',
  passage: 'passage',
}

const langItems = {
  service: 'service',
  serviceAcronym: 'serviceAcronym',
  title: 'title',
  text: 'text',
  details: details,
  imgSrc: 'imgSrc',
  link: link,
}

const itemEn = {
  pageEn: 'pageEn',
  pageSectionEn: 'pageSectionEn',
  ...langItems,
}

const itemCh = {
  pageCh: 'pageCh',
  pageSectionCh: 'pageSectionCh',
  ...langItems,
}

const itemSchema = {
  id: 'id',
  itemId: 'itemId',
  page: 'page',
  pageSection: 'pageSection',
  itemEn: itemEn,
  itemCh: itemCh,
}

export default itemSchema
