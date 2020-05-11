import React from 'react'
import { Input, List } from 'antd';
import 'antd/dist/antd.css';
import './../css/todolist.css'

const { Search } = Input;

// 无状态组件  适用于只有UI
export default function TodoListUI(props) {
    return (
        <div className='container'>
            {/* 这里相当于<Input.Search> */}
            <Search
                placeholder={props.inputValue}
                enterButton="添加"
                size="large"
                className='input'
                value={props.inputValue}
                onChange={props.inputValueChange}
                // 点击搜索或按下回车键时的回调 function(value, event)
                onSearch={props.searchClick}
            />
            <br />
            <List
                size="large"
                header={<div>开始</div>}
                footer={<div>结束</div>}
                bordered
                dataSource={props.list}
                // 使用箭头函数绑定this并传参
                renderItem={(item, index) => <List.Item onClick={() => props.deleteItem(index)}>{item}</List.Item>}
                className='list'
            />
        </div>
    )
}