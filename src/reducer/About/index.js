export const USER_NAME = 'about/NAME'


export const userInputAction = (name) => ({
  type: USER_NAME,
  payload:{
    name,
  }
})

initialState = {
  name : '',

}
export const loginReducer = ( state = initialState, action) => {
  switch (action.type){
    case USER_NAME: {
      const { payload } = action
      const newState = { ...state }
      newState.name = payload.name
      return newState
    }
    default: return state
  }
}