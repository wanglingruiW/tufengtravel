import { connect } from 'react-redux'
import Destination from './Destination';
import { getDestinations } from '../actionCreator'

const mapState = (state) => { 
    return {
      destinations: []
    }
  }
  
const mapDispatch = (dispatch) => {
return {
    getData: (action) => {
        dispatch(getDestinations())
    },
}
}

export default connect(mapState,mapDispatch)(Destination)

