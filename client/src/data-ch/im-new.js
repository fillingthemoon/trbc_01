import { general } from '../helper-files/images.js'
const {
  mountain
} = general

const imNewData = [
  {
    itemId: 1,
    page: 'im-new',
    sectionName: 'im-new',
    title: 'The best place to start? Join us for a worship service. (ch)',
    text: 'If you’re new to the area, new to church, or just looking for a new start, our Sunday morning worship services offer you the opportunity to build your faith in God and connect with newpeople.',
    imgSrc: mountain,
    link: {
      path: './services',
      text: 'View Services',
    },
  },
  {
    itemId: 2,
    page: 'im-new',
    sectionName: 'im-new',
    title: 'What makes church special is not just the event, but also the relationships we build that help us stay faithful to God. (ch)',
    text:
      `What makes church special is not just the event, but also the relationships we build that help us stay faithful to God.
      
      Whether you’re a single professional, a college student or a parent of a special needs child, we have a ministry that we’d love for you to be a part of. Check out our ministries page to find a small group that you can get connected with.`,
    imgSrc: mountain,
    link: {
      path: './services',
      text: 'View Ministries',
    },
  },
  {
    itemId: 3,
    page: 'im-new',
    sectionName: 'im-new',
    title: 'Get involved in one of our doing good projects. (ch)',
    text:
      `A theme we embrace at the Bay Area Christian Church is “God and Good.” We believe it’s important that as Christians we are constantly working to do good in the lives of the people in our community, regardless of religious affiliation.
      
      We’re proud of our members who’ve embraced this call, and are inspired by the different “doing good” efforts they’ve championed. Check out our volunteer page to learn about how you can get involved.`,
    imgSrc: mountain,
    link: {
      path: './outreach',
      text: 'Learn More',
    },
  }
]

export default imNewData