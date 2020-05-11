// 如果箭头函数返回一个对象，则需要在对象外边用括号包裹，否则会报错
// 引入action_type文件
import { CHANGE_INPUT, ADD_ITEM, DEL_ITEM, GET_LIST } from './actionType'
import axios from 'axios'

export const changeInputAction = (e) => ({
    type: CHANGE_INPUT,
    value: e.target.value
})

export const addItemAction = () => ({
    type: ADD_ITEM
})

export const delItemAction = (index) => ({
    type: DEL_ITEM,
    index
})

export const getListAction = (data) => ({
    type: GET_LIST,
    data
})

// 因为有thunk，所以才可以返回一个函数，也就是store.dispatch()中原本只能是一个对象，有了thunk，可以接受一个函数
export const getTodoAction = () => {
    // 该函数有两个参数，dispatch,getState
    return (dispatch) => {
        axios.get('https://www.fastmock.site/mock/9f9ebea930fe30d2c63ad5e0dd8a4ee1/reduxTest/getList').then((res) => {
            let data = res.data.list
            const action = getListAction(data)
            dispatch(action)
        })
    }
}