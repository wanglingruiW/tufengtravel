const defaultValue = {
  gethot: []

}

// reducer是个同步方法，不能做异步操作
// getData, 负责将action携带的数据取到， 去生成一个新的categroies
const getHotData = (state = defaultValue, action) => {  
  if (action.type === 'GETHOT') {
    return {
      gethot: [...state.gethot, ...action.data]  
    }
  }
  return state
}

export default getHotData