import fs from 'fs'

import discipleshipData from '../data/discipleship.js'
import imNewData from '../data/im-new.js'
import missionsData from '../data/missions.js'
import ourHistoryData from '../data/our-history.js'
import ourTeamData from '../data/our-team.js'
import outreachData from '../data/outreach.js'
import servicesData from '../data/services.js'
import statementOfFaithData from '../data/statement-of-faith.js'

const discipleshipDataJSON = JSON.stringify(discipleshipData, null, 2)
const imNewDataJSON = JSON.stringify(imNewData, null, 2)
const missionsDataJSON = JSON.stringify(missionsData, null, 2)
const ourHistoryDataJSON = JSON.stringify(ourHistoryData, null, 2)
const ourTeamDataJSON = JSON.stringify(ourTeamData, null, 2)
const outreachDataJSON = JSON.stringify(outreachData, null, 2)
const servicesDataJSON = JSON.stringify(servicesData, null, 2)
const statementOfFaithDataJSON = JSON.stringify(statementOfFaithData, null, 2)

const callbackFunc = (err, result) => {
  if (err) {
    console.log('error', err)
  }
}

/* IMPORTANT! */
/* Can only run the following command from the client folder */
/* $ node ../server/helper-files/jsonifyData.js */

/* Alternative, as declared in package.json, use: */
/* $ npm run jsonify-data */

fs.writeFile('../server/data-json/discipleship.json', discipleshipDataJSON, callbackFunc)
fs.writeFile('../server/data-json/im-new.json', imNewDataJSON, callbackFunc)
fs.writeFile('../server/data-json/missions.json', missionsDataJSON, callbackFunc)
fs.writeFile('../server/data-json/our-history.json', ourHistoryDataJSON, callbackFunc)
fs.writeFile('../server/data-json/our-team.json', ourTeamDataJSON, callbackFunc)
fs.writeFile('../server/data-json/outreach.json', outreachDataJSON, callbackFunc)
fs.writeFile('../server/data-json/services.json', servicesDataJSON, callbackFunc)
fs.writeFile('../server/data-json/statement-of-faith.json', statementOfFaithDataJSON, callbackFunc)