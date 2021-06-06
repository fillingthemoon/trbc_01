import { convertName } from '../helper-files/helperFunctions'

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

const sectionGetFuncs = (pageSection) => {
  return {
    'cec': {
      func: getCec(),
      camelCase: convertName('dashed', 'camel', pageSection),
    },
    'discipleship': {
      func: getDiscipleship(),
      camelCase: convertName('dashed', 'camel', pageSection),
    },
    'announcements': {
      func: getAnnouncements(),
      camelCase: convertName('dashed', 'camel', pageSection),
    },
    'events': {
      func: getEvents(),
      camelCase: convertName('dashed', 'camel', pageSection),
    },
    'upcoming-sermons': {
      func: getUpcomingSermons(),
      camelCase: convertName('dashed', 'camel', pageSection),
    },
    'im-new': {
      func: getImNew(),
      camelCase: convertName('dashed', 'camel', pageSection),
    },
    'missions': {
      func: getMissions(),
      camelCase: convertName('dashed', 'camel', pageSection),
    },
    'our-history': {
      func: getOurHistory(),
      camelCase: convertName('dashed', 'camel', pageSection),
    },
    'administrative': {
      func: getOurTeam('administrative'),
      camelCase: 'ourTeam',
    },
    'ministry': {
      func: getOurTeam('ministry'),
      camelCase: 'ourTeam',
    },
    'pastoral': {
      func: getOurTeam('pastoral'),
      camelCase: 'ourTeam',
    },
    'children': {
      func: getOutreach('children'),
      camelCase: 'outreach',
    },
    'community': {
      func: getOutreach('community'),
      camelCase: 'outreach',
    },
    'interest-groups': {
      func: getOutreach('interest-groups'),
      camelCase: 'outreach',
    },
    'english-service': {
      func: getServices('english-service'),
      camelCase: 'services',
    },
    'sunset-service-english-mandarin': {
      func: getServices('sunset-service-english-mandarin'),
      camelCase: 'services',
    },
    'teo-chew-chinese-service': {
      func: getServices('teo-chew-chinese-service'),
      camelCase: 'services',
    },
    'statement-of-faith': {
      func: getStatementOfFaith(),
      camelCase: 'statementOfFaith',
    },
  }
}

export {
  sectionGetFuncs,
}