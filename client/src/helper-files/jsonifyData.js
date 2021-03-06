import fs from 'fs'

const callbackFunc = (err, result) => {
  if (err) {
    console.log('error', err)
  }
}

import announcementsData from '../data/announcements.js'
import discipleshipData from '../data/discipleship.js'
import eventsData from '../data/events.js'
import ministryJobOpeningsData from '../data/ministry-job-openings.js'
import missionsData from '../data/missions.js'
import ourHistoryData from '../data/our-history.js'
import ourTeamData from '../data/our-team.js'
import outreachData from '../data/outreach.js'
import servicesData from '../data/services.js'
import statementOfFaithData from '../data/statement-of-faith.js'
import upcomingSermonsData from '../data/upcoming-sermons.js'

const announcementsDataJSON = JSON.stringify(announcementsData, null, 2)
const discipleshipDataJSON = JSON.stringify(discipleshipData, null, 2)
const eventsDataJSON = JSON.stringify(eventsData, null, 2)
const ministryJobOpeningsJSON = JSON.stringify(ministryJobOpeningsData, null, 2)
const missionsDataJSON = JSON.stringify(missionsData, null, 2)
const ourHistoryDataJSON = JSON.stringify(ourHistoryData, null, 2)
const ourTeamDataJSON = JSON.stringify(ourTeamData, null, 2)
const outreachDataJSON = JSON.stringify(outreachData, null, 2)
const servicesDataJSON = JSON.stringify(servicesData, null, 2)
const statementOfFaithDataJSON = JSON.stringify(statementOfFaithData, null, 2)
const upcomingSermonsDataJSON = JSON.stringify(upcomingSermonsData, null, 2)

/* IMPORTANT! */
/* Can only run the following command from the client folder */
/* $ node ../server/helper-files/jsonifyData.js */

/* Alternative, as declared in package.json, use: */
/* $ npm run jsonify-data */

fs.writeFile('../server/data-json/announcements.json', announcementsDataJSON, callbackFunc)
fs.writeFile('../server/data-json/discipleship.json', discipleshipDataJSON, callbackFunc)
fs.writeFile('../server/data-json/events.json', eventsDataJSON, callbackFunc)
fs.writeFile('../server/data-json/ministry-job-openings.json', ministryJobOpeningsJSON, callbackFunc)
fs.writeFile('../server/data-json/missions.json', missionsDataJSON, callbackFunc)
fs.writeFile('../server/data-json/our-history.json', ourHistoryDataJSON, callbackFunc)
fs.writeFile('../server/data-json/our-team.json', ourTeamDataJSON, callbackFunc)
fs.writeFile('../server/data-json/outreach.json', outreachDataJSON, callbackFunc)
fs.writeFile('../server/data-json/services.json', servicesDataJSON, callbackFunc)
fs.writeFile('../server/data-json/statement-of-faith.json', statementOfFaithDataJSON, callbackFunc)
fs.writeFile('../server/data-json/upcoming-sermons.json', upcomingSermonsDataJSON, callbackFunc)