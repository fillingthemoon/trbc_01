import fs from 'fs'

const callbackFunc = (err, result) => {
  if (err) {
    console.log('error', err)
  }
}

// English Data

import announcementsDataEnglish from '../data-en/announcements.js'
import cecDataEnglish from '../data-en/cec.js'
import discipleshipDataEnglish from '../data-en/discipleship.js'
import eventsDataEnglish from '../data-en/events.js'
import imNewDataEnglish from '../data-en/im-new.js'
import missionsDataEnglish from '../data-en/missions.js'
import ourHistoryDataEnglish from '../data-en/our-history.js'
import ourTeamDataEnglish from '../data-en/our-team.js'
import outreachDataEnglish from '../data-en/outreach.js'
import servicesDataEnglish from '../data-en/services.js'
import statementOfFaithDataEnglish from '../data-en/statement-of-faith.js'
import upcomingSermonsDataEnglish from '../data-en/upcoming-sermons.js'

const announcementsDataEnglishJSON = JSON.stringify(announcementsDataEnglish, null, 2)
const cecDataEnglishJSON = JSON.stringify(cecDataEnglish, null, 2)
const discipleshipDataEnglishJSON = JSON.stringify(discipleshipDataEnglish, null, 2)
const eventsDataEnglishJSON = JSON.stringify(eventsDataEnglish, null, 2)
const imNewDataEnglishJSON = JSON.stringify(imNewDataEnglish, null, 2)
const missionsDataEnglishJSON = JSON.stringify(missionsDataEnglish, null, 2)
const ourHistoryDataEnglishJSON = JSON.stringify(ourHistoryDataEnglish, null, 2)
const ourTeamDataEnglishJSON = JSON.stringify(ourTeamDataEnglish, null, 2)
const outreachDataEnglishJSON = JSON.stringify(outreachDataEnglish, null, 2)
const servicesDataEnglishJSON = JSON.stringify(servicesDataEnglish, null, 2)
const statementOfFaithDataEnglishJSON = JSON.stringify(statementOfFaithDataEnglish, null, 2)
const upcomingSermonsDataEnglishJSON = JSON.stringify(upcomingSermonsDataEnglish, null, 2)

/* IMPORTANT! */
/* Can only run the following command from the client folder */
/* $ node ../server/helper-files/jsonifyData.js */

/* Alternative, as declared in package.json, use: */
/* $ npm run jsonify-data */

fs.writeFile('../server/data-en-json/announcements.json', announcementsDataEnglishJSON, callbackFunc)
fs.writeFile('../server/data-en-json/cec.json', cecDataEnglishJSON, callbackFunc)
fs.writeFile('../server/data-en-json/discipleship.json', discipleshipDataEnglishJSON, callbackFunc)
fs.writeFile('../server/data-en-json/events.json', eventsDataEnglishJSON, callbackFunc)
fs.writeFile('../server/data-en-json/im-new.json', imNewDataEnglishJSON, callbackFunc)
fs.writeFile('../server/data-en-json/missions.json', missionsDataEnglishJSON, callbackFunc)
fs.writeFile('../server/data-en-json/our-history.json', ourHistoryDataEnglishJSON, callbackFunc)
fs.writeFile('../server/data-en-json/our-team.json', ourTeamDataEnglishJSON, callbackFunc)
fs.writeFile('../server/data-en-json/outreach.json', outreachDataEnglishJSON, callbackFunc)
fs.writeFile('../server/data-en-json/services.json', servicesDataEnglishJSON, callbackFunc)
fs.writeFile('../server/data-en-json/statement-of-faith.json', statementOfFaithDataEnglishJSON, callbackFunc)
fs.writeFile('../server/data-en-json/upcoming-sermons.json', upcomingSermonsDataEnglishJSON, callbackFunc)


// Chinese Data

import announcementsDataChinese from '../data-ch/announcements.js'
import cecDataChinese from '../data-ch/cec.js'
import discipleshipDataChinese from '../data-ch/discipleship.js'
import eventsDataChinese from '../data-ch/events.js'
import imNewDataChinese from '../data-ch/im-new.js'
import missionsDataChinese from '../data-ch/missions.js'
import ourHistoryDataChinese from '../data-ch/our-history.js'
import ourTeamDataChinese from '../data-ch/our-team.js'
import outreachDataChinese from '../data-ch/outreach.js'
import servicesDataChinese from '../data-ch/services.js'
import statementOfFaithDataChinese from '../data-ch/statement-of-faith.js'
import upcomingSermonsDataChinese from '../data-ch/upcoming-sermons.js'

const announcementsDataChineseJSON = JSON.stringify(announcementsDataChinese, null, 2)
const cecDataChineseJSON = JSON.stringify(cecDataChinese, null, 2)
const discipleshipDataChineseJSON = JSON.stringify(discipleshipDataChinese, null, 2)
const eventsDataChineseJSON = JSON.stringify(eventsDataChinese, null, 2)
const imNewDataChineseJSON = JSON.stringify(imNewDataChinese, null, 2)
const missionsDataChineseJSON = JSON.stringify(missionsDataChinese, null, 2)
const ourHistoryDataChineseJSON = JSON.stringify(ourHistoryDataChinese, null, 2)
const ourTeamDataChineseJSON = JSON.stringify(ourTeamDataChinese, null, 2)
const outreachDataChineseJSON = JSON.stringify(outreachDataChinese, null, 2)
const servicesDataChineseJSON = JSON.stringify(servicesDataChinese, null, 2)
const statementOfFaithDataChineseJSON = JSON.stringify(statementOfFaithDataChinese, null, 2)
const upcomingSermonsDataChineseJSON = JSON.stringify(upcomingSermonsDataChinese, null, 2)

/* IMPORTANT! */
/* Can only run the following command from the client folder */
/* $ node ../server/helper-files/jsonifyData.js */

/* Alternative, as declared in package.json, use: */
/* $ npm run jsonify-data */

fs.writeFile('../server/data-ch-json/announcements.json', announcementsDataChineseJSON, callbackFunc)
fs.writeFile('../server/data-ch-json/cec.json', cecDataChineseJSON, callbackFunc)
fs.writeFile('../server/data-ch-json/discipleship.json', discipleshipDataChineseJSON, callbackFunc)
fs.writeFile('../server/data-ch-json/events.json', eventsDataChineseJSON, callbackFunc)
fs.writeFile('../server/data-ch-json/im-new.json', imNewDataChineseJSON, callbackFunc)
fs.writeFile('../server/data-ch-json/missions.json', missionsDataChineseJSON, callbackFunc)
fs.writeFile('../server/data-ch-json/our-history.json', ourHistoryDataChineseJSON, callbackFunc)
fs.writeFile('../server/data-ch-json/our-team.json', ourTeamDataChineseJSON, callbackFunc)
fs.writeFile('../server/data-ch-json/outreach.json', outreachDataChineseJSON, callbackFunc)
fs.writeFile('../server/data-ch-json/services.json', servicesDataChineseJSON, callbackFunc)
fs.writeFile('../server/data-ch-json/statement-of-faith.json', statementOfFaithDataChineseJSON, callbackFunc)
fs.writeFile('../server/data-ch-json/upcoming-sermons.json', upcomingSermonsDataChineseJSON, callbackFunc)

