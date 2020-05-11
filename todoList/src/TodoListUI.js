import React from 'react'

import { Input, List, Typography } from 'antd';
import 'antd/dist/antd.css';
import './css/todolist.css'

const { Search } = Input;

function TodoListUI(props) {
    // console.log(props);
    return (
        <div className='container'>
            {/* 输入框组件 */}
            <Search
                className='input'
                placeholder={props.inputValue}
                enterButton="Search"
                size="large"
                onSearch={value => console.log(value)}
                onChange = {props.inputChange}
            />
            {/* 列表组件 */}
            <List
                className='list'
                header={<div>Header</div>}
                footer={<div>Footer</div>}
                bordered
                dataSource={props.data}
                renderItem={item => (
                    <List.Item>
                        <Typography.Text mark>[ITEM]</Typography.Text> {item}
                    </List.Item>
                )}
            />
        </div>
    )
}
export default TodoListUI