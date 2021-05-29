import { convertSectionNameCamelCase } from '../helper-files/helperFunctions'

/* get functions for various items */
import { getCec } from '../reducers/cecReducer'
import { getDiscipleship } from '../reducers/discipleshipReducer'
import { getAnnouncements } from '../reducers/announcementsReducer'
import { getEvents } from '../reducers/eventsReducer'
import { getUpcomingSermons } from '../reducers/upcomingSermonsReducer'
import { getImNew } from '../reducers/imNewReducer'
import { getMissions } from '../reducers/missionsReducer'
import { getOurHistory } from '../reducers/ourHistoryReducer'
import { getOurTeam } from '../reducers/ourTeamReducer'
import { getOutreach } from '../reducers/outreachReducer'
import { getServices } from '../reducers/servicesReducer'
import { getStatementOfFaith } from '../reducers/statementOfFaithReducer'

const sectionGetFuncs = (sectionName) => {
  return {
    'cec': {
      func: getCec,
      camelCase: convertSectionNameCamelCase(sectionName),
    },
    'discipleship': {
      func: getDiscipleship,
      camelCase: convertSectionNameCamelCase(sectionName),
    },
    'announcements': {
      func: getAnnouncements,
      camelCase: convertSectionNameCamelCase(sectionName),
    },
    'events': {
      func: getEvents,
      camelCase: convertSectionNameCamelCase(sectionName),
    },
    'upcoming-sermons': {
      func: getUpcomingSermons,
      camelCase: convertSectionNameCamelCase(sectionName),
    },
    'im-new': {
      func: getImNew,
      camelCase: convertSectionNameCamelCase(sectionName),
    },
    'missions': {
      func: getMissions,
      camelCase: convertSectionNameCamelCase(sectionName),
    },
    'our-history': {
      func: getOurHistory,
      camelCase: convertSectionNameCamelCase(sectionName),
    },
    'administrative': {
      func: getOurTeam,
      camelCase: 'ourTeam',
    },
    'ministry': {
      func: getOurTeam,
      camelCase: 'ourTeam',
    },
    'pastoral': {
      func: getOurTeam,
      camelCase: 'ourTeam',
    },
    'children': {
      func: getOutreach,
      camelCase: 'outreach',
    },
    'community': {
      func: getOutreach,
      camelCase: 'outreach',
    },
    'interest-groups': {
      func: getOutreach,
      camelCase: 'outreach',
    },
    'english-service': {
      func: getServices,
      camelCase: 'services',
    },
    'sunset-service-english-mandarin': {
      func: getServices,
      camelCase: 'services',
    },
    'teo-chew-chinese-service': {
      func: getServices,
      camelCase: 'services',
    },
    'statement-of-faith': {
      func: getStatementOfFaith,
      camelCase: 'statementOfFaith',
    },
  }
}

export {
  sectionGetFuncs,
}