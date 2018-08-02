import { connect } from 'react-redux'
import Mine from './Mine';
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

export default connect(mapState,mapDispatch)(Mine)