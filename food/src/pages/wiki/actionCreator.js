// creator可以返回两种数据：
// 一种是扁平的action
// 一种是一个函数
// 要得益于redux-thunk 中间件

export const wikiActionCreator = (data) => {
  return {
    type: 'GETCATEGORIES',
    data
  }
}
export const wikiHotCreator = (data) => {
  return {
    type: 'GETHOT',
    data
  }
}

export const getCategories = () => {
  // 这里为什么可以使用dispatch？
  // 原因返回的方法被redux-thunk中间件调用了
  return (dispatch) => {
    fetch('/api/homepage/banner/v1.5.0')
    .then(res => res.json())
    .then(result => {
      dispatch(wikiActionCreator(result.data.hot_destination))
      
    })
  }
}

export const getHot = () => {
  // 这里为什么可以使用dispatch？
  // 原因返回的方法被redux-thunk中间件调用了
  return (dispatch) => {
    fetch('/api/homepage/banner/v1.5.0')
    .then(res => res.json())
    .then(result => {
      dispatch(wikiHotCreator(result.data.recommend_products))
      // console.log(result.data.recommend_products)
    })
  }
}