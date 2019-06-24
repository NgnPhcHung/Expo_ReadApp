import { connect } from 'react-redux'
import Note from '../component/Note'
import { noteInputAction, deleteAction } from '../reducer/Note'
const mapStateToProps = state => {
  const { addNoteReducer } = state
  return {
    note: addNoteReducer
  }
}
const mapDispatchToProps = dispatch => {
  return {
    submit: function (value) {
      const action = noteInputAction(value)
      dispatch(action)
    }, 
    del : function(i) {
      const action = deleteAction(i)
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Note)