// 建立一个数据仓库
// 从redux中引入createStore方法
import { createStore, applyMiddleware,compose } from 'redux'
// 引入react-thunk中间件
import thunk from 'redux-thunk'
import reducer from './reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose

// 增强函数
const enhancer = composeEnhancers(applyMiddleware(thunk))

// 直接用createStore()方法生成store实例，创建数据存储仓库，只接受两个函数
const store = createStore(
    reducer,
    enhancer
    // applyMiddleware(thunk)
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store