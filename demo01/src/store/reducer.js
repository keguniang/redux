// store通过dispatch发起action之后，最终是通过reducer指定如何修改state的


// 引入action_type文件
import {CHANGE_INPUT, ADD_ITEM, DEL_ITEM, GET_LIST} from './actionType'

const defaultState = {
    inputValue: 'Write Something',
    list: [
        'Racing car sprays burning fuel into crowd.',
        'Japanese princess to wed commoner.',
        'Australian walks 100km after outback crash.',
        'Man charged over missing wedding girl.',
        'Los Angeles battles huge wildfires.',
    ]
}

// reducer是一个纯函数，接收state和action作为参数，并返回一个新的state
const reducer = (state = defaultState, action) => {
    // console.log(state,action);
    // reducer里边只能接受state，不能改变state，所以需要新声明一个，对传过来的state进行一下深拷贝
    // action:{type: "changeInput", value: "1"} 
    if(action.type === CHANGE_INPUT){
        let newState = JSON.parse(JSON.stringify(state))
        // 现在只是redux中的inputValue
        newState.inputValue = action.value
        return newState 
    }
    if(action.type === ADD_ITEM){
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        // 添加之后把输入框置为空
        newState.inputValue = ''
        return newState
    }
    // 删除列表项
    if(action.type === DEL_ITEM){
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index,1)
        return newState
    }
    // 初始列表项
    if(action.type === GET_LIST){
        let newState = JSON.parse(JSON.stringify(state))
        newState.list = action.data
        return newState
    }
    if(action.type === GET_LIST){
        let newState = JSON.parse(JSON.stringify(state))
        newState.list = action.data
        return newState
    }
    // 必须有返回值，这样store才能获得数据
    return state
}
export default reducer