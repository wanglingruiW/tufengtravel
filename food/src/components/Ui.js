import { connect } from 'react-redux'
import HotList from './Datalist'

export default connect(
  state => {
    return {
      destinations: state.destination.destinations
    }
  },
  dispatch => {
    return {}
  }
)(DataList)