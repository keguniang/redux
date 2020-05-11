const initState = {
    inputValue: 'write something',
    list: [
        'aaaa',
        'bbb',
        'ccc'
    ]
}

export default (state = initState, action) => {
    let newState
    switch (action.type) {
        // 输入框改变事件
        case 'inputChange_action':
            newState = JSON.parse(JSON.stringify(state))
            newState.inputValue = action.value
            return newState
        // 添加列表项事件
        case 'add_action':
            newState = JSON.parse(JSON.stringify(state))
            newState.list.push(action.value)
            newState.inputValue = ''
            return newState
        // 删除列表项事件
        case 'del_action':
            newState = JSON.parse(JSON.stringify(state))
            newState.list.splice(action.index, 1)
            return newState
        default:
            return state;
    }
}