// // general
// import churchWide from '../imgs/general/church-wide.jpg'
// import exterior from '../imgs/general/exterior.jpg'
// import trbcLogo from '../imgs/general/logo.png'
// import serviceTiming from '../imgs/general/service-timing.jpg'
// import trbcMap from '../imgs/general/trbc-map.jpg'
// import trbcSanc from '../imgs/general/trbc-sanctuary.jpg'
// import paSystem from '../imgs/general/pa-system.jpg'
// import tc01 from '../imgs/general/tc-01.jpg'

// // about-us
// import aboutUs1 from '../imgs/about-us/1.jpg'
// import aboutUs2 from '../imgs/about-us/2.jpg'
// import aboutUs3 from '../imgs/about-us/3.jpg'
// import aboutUs4 from '../imgs/about-us/4.jpg'
// import aboutUs5 from '../imgs/about-us/5.jpg'
// import aboutUs6 from '../imgs/about-us/6.jpg'

// // our-team
// import dongFan from '../imgs/our-team/dong-fan.jpg'
// import ivanChow from '../imgs/our-team/ivan-chow.jpg'
// import jasmineLee from '../imgs/our-team/jasmine-lee.jpg'
// import jennyAng from '../imgs/our-team/jenny-ang.jpg'
// import leonardLee from '../imgs/our-team/leonard-lee.jpg'
// import psLam from '../imgs/our-team/ps-lam.jpg'
// import revAdrianLim from '../imgs/our-team/rev-adrian-lim.jpg'
// import revChang from '../imgs/our-team/rev-chang.jpg'
// import revJerryGoh from '../imgs/our-team/rev-jerry-goh.jpg'
// import vincentLai from '../imgs/our-team/vincent-lai.jpg'
// import yeoChongNim from '../imgs/our-team/yeo-chong-nim.jpg'

const baseUrl = 'https://raw.githubusercontent.com/fillingthemoon/trbc_01/main/client/src/imgs/'

// general
const churchWide = `${baseUrl}general/church-wide.jpg`
const exterior = `${baseUrl}general/exterior.jpg`
const trbcLogo = `${baseUrl}general/logo.png`
const serviceTiming = `${baseUrl}general/service-timing.jpg`
const trbcMap = `${baseUrl}general/trbc-map.jpg`
const trbcSanc = `${baseUrl}general/trbc-sanctuary.jpg`
const paSystem = `${baseUrl}general/pa-system.jpg`
const tc01 = `${baseUrl}general/tc-01.jpg`
const mountain = `${baseUrl}general/mountain.jpg`
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

const general = {
  churchWide,
  exterior,
  trbcLogo,
  serviceTiming,
  trbcMap,
  trbcSanc,
  paSystem,
  tc01,
  mountain,
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

export {
  general,
  aboutUs,
  ourTeam,
}