import { connect } from 'react-redux'
import Assistant from './Assistant';
import { getAsistants } from '../actionCreator'

const mapState = (state) => { 
    return {
    //   Asistant: []
    }
  }
  
const mapDispatch = (dispatch) => {
return {
    // getData: (action) => {
    //     dispatch(getAsistants())
    // },
}
}

export default connect(mapState,mapDispatch)(Assistant)