import { getWord } from '../helper-files/translate.js'

const servicesData = {
  en: {
    en: {
      service: 'English Service',
      main: [
        {
          name: 'English Service',
          location: 'Main Sanctuary (level 2)',
          time: 'Sundays, 8:30 am',
        },
      ],
    },
    ch: {
      service: getWord('English Service'),
      main: [
        {
          name: 'English Service (ch)',
          location: 'Main Sanctuary (level 2) (ch)',
          time: 'Sundays, 8:30 am (ch)',
        },
      ],
    },
  },
  tc: {
    en: {
      service: 'Teochew/Chinese Chinese Service',
      main: [
        {
          name: 'Teochew/Chinese Service',
          location: 'Main Sanctuary (level 2)',
          time: 'Sundays, 10:30 am',
        },
      ],
    },
    ch: {
      service: getWord('Teochew/Chinese Chinese Service'),
      main: [
        {
          name: 'Teochew/Chinese Service (ch)',
          location: 'Main Sanctuary (level 2) (ch)',
          time: 'Sundays, 10:30 am (ch)',
        },
      ],
    },
  },
  ss: {
    en: {
      service: 'Sunset Service (English/Mandarin)',
      main: [
        {
          name: 'Sunset Service',
          location: 'Main Sanctuary (level 2)',
          time: 'Sundays, 5:00 pm',
        },
      ],
    },
    ch: {
      service: getWord('Sunset Service (English/Mandarin)'),
      main: [
        {
          name: 'Sunset Service (ch)',
          location: 'Main Sanctuary (level 2) (ch)',
          time: 'Sundays, 5:00 pm (ch)',
        },
      ],
    },
  },
}

export default servicesData
