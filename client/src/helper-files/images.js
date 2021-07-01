// general
const admin = 'https://i.postimg.cc/15qfKrM4/admin.jpg'
const exterior = 'https://i.postimg.cc/N0pM0JGC/exterior.jpg'
const gathering = 'https://i.postimg.cc/XXSNPtxq/gathering.png'
const lock = 'https://i.postimg.cc/tJVC2938/library-stairs.jpg'
const trbcLogo = 'https://i.postimg.cc/RZxqpJbd/lock.jpg'
const mountain = 'https://i.postimg.cc/8k37W0Rq/logo.png'
const paSystem = 'https://i.postimg.cc/YCN0525H/mountain.jpg'
const pdpaEnquiry = 'https://i.postimg.cc/LXW8tJ1z/pa-system.jpg'
const libraryStairs = 'https://i.postimg.cc/Jh10MV8B/pdpa-enquiry.png'
const sanctuary01 = 'https://i.postimg.cc/L4qzrfNF/sanctuary-01.jpg'
const sanctuary02 = 'https://i.postimg.cc/B6bvPTXS/sanctuary-02.jpg'
const statementOfFaith = 'https://i.postimg.cc/cLWwgzZd/statement-of-faith.jpg'
const tc01 = 'https://i.postimg.cc/BZdxs6VL/tc-01.jpg'
const trbcMap = 'https://i.postimg.cc/CLkbKg3v/trbc-map.jpg'

const fallbackImg =
  'data:image/png;base64,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'

// about-us
const aboutUs1 = 'https://i.postimg.cc/fRyqFkt3/1.jpg'
const aboutUs2 = 'https://i.postimg.cc/DwNpKFLx/2.jpg'
const aboutUs3 = 'https://i.postimg.cc/9FWndLcY/3.jpg'
const aboutUs4 = 'https://i.postimg.cc/J4PdPjnV/4.jpg'
const aboutUs5 = 'https://i.postimg.cc/nzbdCkd7/5.jpg'
const aboutUs6 = 'https://i.postimg.cc/6QGjWSht/6.jpg'

// our-team
const dongFan = 'https://i.postimg.cc/dVJZtTm1/dong-fan.jpg'
const ivanChow = 'https://i.postimg.cc/QtKHngs6/ivan-chow.png'
const jasmineLee = 'https://i.postimg.cc/QCpVjXF1/jasmine-lee.png'
const jennyAng = 'https://i.postimg.cc/xT3q71DS/jenny-ang.png'
const leonardLee = 'https://i.postimg.cc/GpVpYBYv/leonard-lee.png'
const psLam = 'https://i.postimg.cc/K8c4yhx3/ps-lam.jpg'
const revAdrianLim = 'https://i.postimg.cc/qMTzjCFL/rev-adrian-lim.png'
const revChang = 'https://i.postimg.cc/ZnkCk95J/rev-chang.jpg'
const revJerryGoh = 'https://i.postimg.cc/jS82x3Sg/rev-jerry-goh.png'
const vincentLai = 'https://i.postimg.cc/HW5rwt6n/vincent-lai.jpg'
const yeoChongNim = 'https://i.postimg.cc/SKJsJLXy/yeo-chong-nim.jpg'

// outreach
const gardeningFellowship = 'https://i.postimg.cc/QtcjTfjr/gardening-fellowship.jpg'
const pingPongFellowship = 'https://i.postimg.cc/mkRBN7r1/ping-pong-fellowship.jpg'

// ministry-job-openings
const desk = 'https://i.postimg.cc/mrXHn29r/desk.jpg'
const plantWall = 'https://i.postimg.cc/Y9vWBKNz/plant-wall.jpg'

// resource-library
const trbcYoutube = 'https://i.postimg.cc/15vswn14/trbc-youtube.png'
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
