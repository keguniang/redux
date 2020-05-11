import React from 'react'

// 可以省去index.js  webpack默认打包index.js
import store from '../store/index'

// 引入action_type文件
// import {CHANGE_INPUT, ADD_ITEM, DEL_ITEM} from '../store/actionType'
// 引入action
import {changeInputAction, addItemAction, delItemAction, getTodoAction  } from "../store/actionCreators";

import TodoListUI from './TodoListUI'

export default class TodoList extends React.Component {
    constructor(props) {
        super(props)
        // 使用store.getState()可以获取当前的state数
        // console.log(store.getState());
        this.state = store.getState()
        this.inputValueChange = this.inputValueChange.bind(this)
        // store注册监听器，state变化时执行回调函数，返回一个函数，用来注销监听器
        this.changeState = this.changeState.bind(this)
        store.subscribe(this.changeState)
    }
    render() {
        return <TodoListUI
        inputValue = {this.state.inputValue}
        inputValueChange = {this.inputValueChange}
        searchClick = {this.searchClick}
        list = {this.state.list}
        deleteItem = {this.deleteItem}
        />
    }

    //axios请求接口数据
    componentDidMount(){
        // 现在action是一个函数
        const action = getTodoAction()
        store.dispatch(action)
    } 


    // 输入框的改变事件
    inputValueChange(e){
        // 如果要延时输出，则需要添加e.persist()
        // 涉及到了react中的合成事件，异步的话，e.target为undefined
        // 异步访问事件属性，e.target，需要在事件中调用e.persist()此方法会从池中移除合成事件，允许用户代码保留对事件的引用。
        // e.persist()
        // setTimeout(()=>{
        //     console.log(e.target.value);
        // },1000)
       
        // console.log(e.target.value);

        // const action = {
        //     // type相当于自己起的名字
        //     // action对象中，type属性是必须的，且属性值为字符串，action其他的属性可以自定义
        //     type: CHANGE_INPUT,
        //     value: e.target.value
        // }

        const action = changeInputAction(e)

        // store提供了一个dispatch方法，可使用dispatch方法发送动作以修改store中的状态
        store.dispatch(action)
    }

    // store的监听事件
    changeState(){
        // this.setState({
        //     inputValue: store.getState().inputValue
        // })
        // 或者是全部覆盖  包括inputValue和list，其中任何一个变了，因为store订阅了这个事件，所以都会执行这个方法
        this.setState(store.getState())
    }

    // 点击搜索按钮时的触发事件
    searchClick = (value)=>{
        console.log(value);
        // const action = {
        //     type: ADD_ITEM
        // }
        const action = addItemAction()
        store.dispatch(action)
    }

    // 删除列表项的事件
    deleteItem = (index)=>{
        // console.log(index);
        // const action = {
        //     type: DEL_ITEM,
        //     index
        // }

        const action = delItemAction(index)
        store.dispatch(action)
    }
}

