import { combineReducers } from 'redux'

import { reducer as home } from '../pages/home/'
import { reducer as wiki } from '../pages/wiki/'
import { hotreducer} from '../pages/wiki/'
import { reducer as destination} from '../pages/Destination/'
import { wikiActionCreator, wikiHotCreator} from '../pages/wiki/actionCreator';

// combineReducers,负责将各个子组件的reducer合并成一个总的reducer

// console.log(hotreducer);

export default combineReducers({
  home,
  wiki,
  hotreducer,
  destination
})

