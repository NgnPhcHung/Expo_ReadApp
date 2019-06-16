import {connect} from 'react-redux'
import OfflineBook from '../component/Content/Content'
import { openModalAction } from '../reducer/OfflineBook'

const mapStateToProps = state => {
  const { isChange } = state
  return {
    isChange,
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