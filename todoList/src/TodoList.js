import React from 'react'
import { connect } from 'react-redux'

import { Input, List, Typography } from 'antd';
import 'antd/dist/antd.css';
import './css/todolist.css'

const { Search } = Input;
// import TodoListUI from './TodoListUI'

function TodoList(props) {
    // 解构赋值，省去this.props
    let { inputValue, addList, inputChange, list, itemClick } = props
    return <div className='container'>
        {/* 输入框组件 */}
        <Search
            className='input'
            placeholder={inputValue}
            enterButton="添加"
            size="large"
            onSearch={addList}
            onChange={inputChange}
            value={inputValue}
        />
        {/* 列表组件 */}
        <List
            className='list'
            header={<div>Header</div>}
            footer={<div>Footer</div>}
            bordered
            dataSource={list}
            renderItem={(item, index) => (
                <List.Item onClick={() => itemClick(index)}>
                    <Typography.Text mark>[ITEM]</Typography.Text> {item}
                </List.Item>
            )}
        />
    </div>
}

// 作为接收方
const mapStateToProps = (state) => {
    return state
}

// 作为发送方，返回一个对象
const mapDispatchToProps = (dispatch) => {
    return {
        inputChange: (e) => {
            const action = {
                type: 'inputChange_action',
                value: e.target.value
            }
            dispatch(action)
        },
        addList: (value) => {
            const action = {
                type: 'add_action',
                value
            }
            dispatch(action)
        },
        itemClick: (index) => {
            const action = {
                type: 'del_action',
                index
            }
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
