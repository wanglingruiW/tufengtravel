// import {DESTINATION} from './actionTypes'
const destinationCreator = (data) => {
    return {
      type: 'DESTINATION',
      data
    }
  }
  
const getDestinations = () => {
  // 这里为什么可以使用dispatch？
  // 原因返回的方法被redux-thunk中间件调用了
  return (dispatch) => {
    fetch('/api/destination')
    .then(res => res.json())
    .then(result => {
      dispatch(destinationCreator(result.data))
      // console.log(result.data)
    })
  }
}

export {
  getDestinations,
  destinationCreator
}