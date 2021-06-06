import itemsService from '../services/itemsService'

const editSectionReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_EDIT_SECTION': {
      return action.data.editSection
    }
    default: {
      return state
    }
  }
}

export const setEditSection = (editSectionName) => {
  return async dispatch => {
    try {
      const items = await itemsService.getItems()
      const editSection = items.filter(item =>
        item.pageSection === editSectionName
      )

      dispatch({
        type: 'SET_EDIT_SECTION',
        data: {
          editSection,
        }
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export default editSectionReducer