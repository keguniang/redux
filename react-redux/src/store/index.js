// 导入自己的reducer函数
import reducer from '../reducer'
import {createStore} from 'redux'
// 创建store
const store = createStore(reducer)
export default store