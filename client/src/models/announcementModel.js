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
  // service: 'service',
  // serviceAcronym: 'serviceAcronym',
  title: 'title',
  text: 'text',
  // details: details,
  imgSrc: 'imgSrc',
  // link: link,
}

const itemEn = {
  pageEn: 'home',
  pageSectionEn: 'announcements',
  ...langItems,
}

const itemCh = {
  pageCh: 'home',
  pageSectionCh: 'announcements',
  ...langItems,
}

const announcementSchema = {
  id: 'id',
  itemId: 'itemId',
  page: 'home',
  pageSection: 'announcements',
  itemEn: itemEn,
  itemCh: itemCh,
}

export default announcementSchema
