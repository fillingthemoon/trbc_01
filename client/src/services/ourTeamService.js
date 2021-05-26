import axios from 'axios'
const baseUrl = '/api/our-team/'

const getOurTeam = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const ourTeamService = {
  getOurTeam,
}

export default ourTeamService
