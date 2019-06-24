import { connect } from 'react-redux'
import About from '../component/Content/About'
import { userInputAction } from '../reducer/About'
const mapStateToProps = state => {
  const { loginReducer } = state 

  return {
    user  : loginReducer
  }
}
const mapDispatchToProps = dispatch => {
  return{
    login: function(value){
      const action = userInputAction(value)
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(About)