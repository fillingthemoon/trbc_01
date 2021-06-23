import { getWord } from '../helper-files/translate.js'

const servicesData = {
  tc: {
    en: {
      service: 'Teo Chew/Chinese Chinese Service',
      main: [
        {
          name: 'Main Service',
          location: 'Main Sanctuary (level 2)',
          time: 'Sundays, 10:30 am',
        },
        {
          name: 'Main Service',
          location: 'Music Hall (level 2)',
          time: 'Sundays, 10:30 am',
        },
      ],
    },
    ch: {
      service: getWord('Teo Chew/Chinese Chinese Service'),
      main: [
        {
          name: 'Main Service (ch)',
          location: 'Main Sanctuary (level 2) (ch)',
          time: 'Sundays, 10:30 am (ch)',
        },
        {
          name: 'Main Service (ch)',
          location: 'Music Hall (level 2) (ch)',
          time: 'Sundays, 10:30 am (ch)',
        },
      ],
    },
  },
  en: {
    en: {
      service: 'English Service',
      main: [
        {
          name: 'Main Service',
          location: 'Main Sanctuary (level 2)',
          time: 'Sundays, 8:30 am',
        },
      ],
    },
    ch: {
      service: getWord('English Service'),
      main: [
        {
          name: 'Main Service (ch)',
          location: 'Main Sanctuary (level 2) (ch)',
          time: 'Sundays, 8:30 am (ch)',
        },
      ],
    },
  },
  ss: {
    en: {
      service: 'Sunset Servic (English/Mandarin)',
      main: [
        {
          name: 'Main Service',
          location: 'Main Sanctuary (level 2)',
          time: 'Sundays, 5:00 pm',
        },
      ],
    },
    ch: {
      service: getWord('Sunset Service (English/Mandarin)'),
      main: [
        {
          name: 'Main Service (ch)',
          location: 'Main Sanctuary (level 2) (ch)',
          time: 'Sundays, 5:00 pm (ch)',
        },
      ],
    },
  },
}

export default servicesData
