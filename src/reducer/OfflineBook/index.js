const ONLINEBOOK_ISOPEN = 'action/ISOPEN'

export const openModalAction = () => {
  return {
    type: ONLINEBOOK_ISOPEN,
  }
}

const isOpen = false

export const isChange  = ( state = isOpen, action ) =>{
  switch (action.type) {
    case ONLINEBOOK_ISOPEN : {
      const newState = !state;
      return newState
    }
    default: return state
  }
}