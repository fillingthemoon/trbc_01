const baseUrl = 'https://raw.githubusercontent.com/fillingthemoon/trbc_01/main/client/src/imgs/'

// general
const gathering = `${baseUrl}general/gathering.jpg`
const exterior = `${baseUrl}general/exterior.jpg`
const trbcLogo = `${baseUrl}general/logo.png`
const sanctuary01 = `${baseUrl}general/sanctuary-01.jpg`
const sanctuary02 = `${baseUrl}general/sanctuary-02.jpg`
const trbcMap = `${baseUrl}general/trbc-map.jpg`
const paSystem = `${baseUrl}general/pa-system.jpg`
const tc01 = `${baseUrl}general/tc-01.jpg`
const mountain = `${baseUrl}general/mountain.jpg`
const libraryStairs = `${baseUrl}general/resource-library.jpg`
const admin = `${baseUrl}general/admin.jpg`
const statementOfFaith = `${baseUrl}general/statement-of-faith.jpg`
const lock = `${baseUrl}general/lock.jpg`
const pdpaEnquiry = `${baseUrl}general/pdpa-enquiry.png`

const fallbackImg = 'data:image/png;base64,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'

// about-us
const aboutUs1 = `${baseUrl}about-us/1.jpg`
const aboutUs2 = `${baseUrl}about-us/2.jpg`
const aboutUs3 = `${baseUrl}about-us/3.jpg`
const aboutUs4 = `${baseUrl}about-us/4.jpg`
const aboutUs5 = `${baseUrl}about-us/5.jpg`
const aboutUs6 = `${baseUrl}about-us/6.jpg`

// our-team
const dongFan = `${baseUrl}our-team/dong-fan.jpg`
const ivanChow = `${baseUrl}our-team/ivan-chow.jpg`
const jasmineLee = `${baseUrl}our-team/jasmine-lee.jpg`
const jennyAng = `${baseUrl}our-team/jenny-ang.jpg`
const leonardLee = `${baseUrl}our-team/leonard-lee.jpg`
const psLam = `${baseUrl}our-team/ps-lam.jpg`
const revAdrianLim = `${baseUrl}our-team/rev-adrian-lim.jpg`
const revChang = `${baseUrl}our-team/rev-chang.jpg`
const revJerryGoh = `${baseUrl}our-team/rev-jerry-goh.jpg`
const vincentLai = `${baseUrl}our-team/vincent-lai.jpg`
const yeoChongNim = `${baseUrl}our-team/yeo-chong-nim.jpg`

// outreach
const pingPongFellowship = `${baseUrl}outreach/ping-pong-fellowship.jpg`
const gardeningFellowship = `${baseUrl}outreach/gardening-fellowship.jpg`

// ministry-job-openings
const desk = `${baseUrl}ministry-job-openings/desk.jpg`
const plantWall = `${baseUrl}ministry-job-openings/plant-wall.jpg`

// resource-library
const trbcYoutube = `${baseUrl}resource-library/trbc-youtube.jpg`
// const trbcYoutbe = `${baseUrl}ministry-job-openings/desk.jpg`

const general = {
  gathering,
  exterior,
  trbcLogo,
  sanctuary01,
  sanctuary02,
  trbcMap,
  paSystem,
  tc01,
  mountain,
  libraryStairs,
  admin,
  statementOfFaith,
  lock,
  pdpaEnquiry,

  fallbackImg,
}

const aboutUs = {
  aboutUs1,
  aboutUs2,
  aboutUs3,
  aboutUs4,
  aboutUs5,
  aboutUs6,
}

const ourTeam = {
  dongFan,
  ivanChow,
  jasmineLee,
  jennyAng,
  leonardLee,
  psLam,
  revAdrianLim,
  revChang,
  revJerryGoh,
  vincentLai,
  yeoChongNim,
}

const outreach = {
  pingPongFellowship,
  gardeningFellowship,
}

const ministryJobOpenings = {
  desk,
  plantWall,
}

const resourceLibrary = {
  trbcYoutube,
}

export {
  general,
  aboutUs,
  ourTeam,
  outreach,
  ministryJobOpenings,
  resourceLibrary,
}