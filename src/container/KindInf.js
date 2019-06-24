import {connect} from 'react-redux'
import KindInfo from '../component/BookContent/OfflineBook/KindInfo/KindInfo'
import { changeAction } from '../reducer/OfflineBook'

const mapStateToProps = (state) => {
  const { isLoading, isLoadingReducer } = state
  return {
    isLoading:isLoadingReducer
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    change : function(){
      const action = changeAction()
      dispatch(action)
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(KindInfo)