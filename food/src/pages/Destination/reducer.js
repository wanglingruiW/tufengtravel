const defaultValue = {
    destinations: []
  
  }
//  import DESTINATION   from './actionTypes'
  // reducer是个同步方法，不能做异步操作
  // getData, 负责将action携带的数据取到， 去生成一个新的categroies
  const getData = (state = defaultValue, action) => {
    // console.log(action.data)
    if (action.type === 'DESTINATION') {
      console.log(action.data)
      return {
        // destinations:action.data
        destinations:[...action.data]
      }
    }
    return state
  }
  
  export default getData