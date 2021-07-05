const imgUrl = 'https://res.cloudinary.com/dmjyhs9s9/image/upload'

// general
const admin = `${imgUrl}/v1625113444/general/admin_tfllxz.jpg`
const exterior = `${imgUrl}/v1625113444/general/exterior_zweljq.jpg`
const gathering = `${imgUrl}/v1625113444/general/gathering_gr0t6u.jpg`
const libraryStairs = `${imgUrl}/v1625113444/general/library-stairs_lsygzl.jpg`
const lock = `${imgUrl}/v1625113444/general/lock_vpki7g.jpg`
const trbcLogo = `${imgUrl}/v1625113444/general/logo_cyztox.png`
const mountain = `${imgUrl}/v1625113444/general/mountain_xdvztu.jpg`
const paSystem = `${imgUrl}/v1625113444/general/pa-system_lmnero.jpg`
const pdpaEnquiry = `${imgUrl}/v1625113444/general/pdpa-enquiry_wisrjv.png`
const sanctuary01 = `${imgUrl}/v1625113444/general/sanctuary-01_phfn6v.jpg`
const sanctuary02 = `${imgUrl}/v1625113444/general/sanctuary-02_ejhrn0.jpg`
const statementOfFaith = `${imgUrl}/v1625113444/general/statement-of-faith_q6ifpu.jpg`
const tc01 = `${imgUrl}/v1625113444/general/tc-01_ba3lal.jpg`
const trbcMap = `${imgUrl}/v1625113444/general/trbc-map_ni18it.jpg`

const fallbackImg =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dP3PTWBSGcbGzM6GCKqlIBRV0dHRJFarQ0eUT8LH4BnRU0NHR0UEFVdIlFRV7TzRksomPY8uykTk/zewQfKw/9znv4yvJynLv4uLiV2dBoDiBf4qP3/ARuCRABEFAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghgg0Aj8i0JO4OzsrPv69Wv+hi2qPHr0qNvf39+iI97soRIh4f3z58/u7du3SXX7Xt7Z2enevHmzfQe+oSN2apSAPj09TSrb+XKI/f379+08+A0cNRE2ANkupk+ACNPvkSPcAAEibACyXUyfABGm3yNHuAECRNgAZLuYPgEirKlHu7u7XdyytGwHAd8jjNyng4OD7vnz51dbPT8/7z58+NB9+/bt6jU/TI+AGWHEnrx48eJ/EsSmHzx40L18+fLyzxF3ZVMjEyDCiEDjMYZZS5wiPXnyZFbJaxMhQIQRGzHvWR7XCyOCXsOmiDAi1HmPMMQjDpbpEiDCiL358eNHurW/5SnWdIBbXiDCiA38/Pnzrce2YyZ4//59F3ePLNMl4PbpiL2J0L979+7yDtHDhw8vtzzvdGnEXdvUigSIsCLAWavHp/+qM0BcXMd/q25n1vF57TYBp0a3mUzilePj4+7k5KSLb6gt6ydAhPUzXnoPR0dHl79WGTNCfBnn1uvSCJdegQhLI1vvCk+fPu2ePXt2tZOYEV6/fn31dz+shwAR1sP1cqvLntbEN9MxA9xcYjsxS1jWR4AIa2Ibzx0tc44fYX/16lV6NDFLXH+YL32jwiACRBiEbf5KcXoTIsQSpzXx4N28Ja4BQoK7rgXiydbHjx/P25TaQAJEGAguWy0+2Q8PD6/Ki4R8EVl+bzBOnZY95fq9rj9zAkTI2SxdidBHqG9+skdw43borCXO/ZcJdraPWdv22uIEiLA4q7nvvCug8WTqzQveOH26fodo7g6uFe/a17W3+nFBAkRYENRdb1vkkz1CH9cPsVy/jrhr27PqMYvENYNlHAIesRiBYwRy0V+8iXP8+/fvX11Mr7L7ECueb/r48eMqm7FuI2BGWDEG8cm+7G3NEOfmdcTQw4h9/55lhm7DekRYKQPZF2ArbXTAyu4kDYB2YxUzwg0gi/41ztHnfQG26HbGel/crVrm7tNY+/1btkOEAZ2M05r4FB7r9GbAIdxaZYrHdOsgJ/wCEQY0J74TmOKnbxxT9n3FgGGWWsVdowHtjt9Nnvf7yQM2aZU/TIAIAxrw6dOnAWtZZcoEnBpNuTuObWMEiLAx1HY0ZQJEmHJ3HNvGCBBhY6jtaMoEiJB0Z29vL6ls58vxPcO8/zfrdo5qvKO+d3Fx8Wu8zf1dW4p/cPzLly/dtv9Ts/EbcvGAHhHyfBIhZ6NSiIBTo0LNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiEC/wGgKKC4YMA4TAAAAABJRU5ErkJggg=='
// about-us
const aboutUs1 = `${imgUrl}/v1625113159/about-us/4_h8h57p.jpg`
const aboutUs2 = `${imgUrl}/v1625113159/about-us/2_vhlfl3.jpg`
const aboutUs3 = `${imgUrl}/v1625113159/about-us/1_smysy9.jpg`
const aboutUs4 = `${imgUrl}/v1625113159/about-us/3_eg3uqu.jpg`
const aboutUs5 = `${imgUrl}/v1625113159/about-us/5_m6g7rm.jpg`
const aboutUs6 = `${imgUrl}/v1625113159/about-us/6_utazat.jpg`

// our-team
const dongFan = `${imgUrl}/v1625113802/our-team/dong-fan_f18tsg.jpg`
const ivanChow = `${imgUrl}/v1625113802/our-team/ivan-chow_fjjyam.jpg`
const jasmineLee = `${imgUrl}/v1625113802/our-team/jasmine-lee_i0kvnf.jpg`
const jennyAng = `${imgUrl}/v1625113802/our-team/jenny-ang_mhellq.jpg`
const leonardLee = `${imgUrl}/v1625113802/our-team/leonard-lee_tmfrba.jpg`
const psLam = `${imgUrl}/v1625113802/our-team/ps-lam_rv7snb.jpg`
const revAdrianLim = `${imgUrl}/v1625113802/our-team/rev-adrian-lim_p3mb6l.jpg`
const revChang = `${imgUrl}/v1625113802/our-team/rev-chang_ebiiq9.jpg`
const revJerryGoh = `${imgUrl}/v1625113802/our-team/rev-jerry-goh_zltz1w.jpg`
const vincentLai = `${imgUrl}/v1625113802/our-team/vincent-lai_tc60wz.jpg`
const yeoChongNim = `${imgUrl}/v1625113802/our-team/yeo-chong-nim_x53wpe.jpg`

// outreach
const gardeningFellowship = `${imgUrl}/v1625113930/outreach/gardening-fellowship_d8uo7n.jpg`
const pingPongFellowship = `${imgUrl}/v1625113930/outreach/ping-pong-fellowship_sk7pdt.jpg`

// ministry-job-openings
const desk = `${imgUrl}/v1625113710/ministry-job-openings/desk_vmqykv.jpg`
const plantWall = `${imgUrl}/v1625113710/ministry-job-openings/plant-wall_jwhlsg.jpg`

// resource-library
const trbcYoutube = `${imgUrl}/v1625113986/resource-library/trbc-youtube_jxveag.png`
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
