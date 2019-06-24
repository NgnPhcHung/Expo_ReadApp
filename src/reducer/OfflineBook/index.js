const BOOK_CHANGELOADING = 'action/CHANGELOADING'

export const isLoading = false 

export const changeAction = () =>{
  return {
    type:BOOK_CHANGELOADING
  }
}
export const isLoadingReducer = ( state = isLoading,action )=>{
  switch(action.type){
    case BOOK_CHANGELOADING:{
      const newState = !state
      console.log("NewState  " +newState)
      return newState
    }
    default: return state
  }
}