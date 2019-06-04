import {connect} from 'react-redux'
import OfflineBook from '../component/BookContent/OfflineBook'
import { openModalAction } from '../reducer/OfflineBook'

const mapStateToProps = state => {
  const { isOpenModalReducer } = state
  return {
    isOpenModalReducer,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    change : function() {
      const action = openModalAction()
      dispatch(action)
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps )(OfflineBook)