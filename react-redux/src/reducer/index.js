const initState = {
    count: 0
}

// reducer接收action，之后进行逻辑处理
const reducer = (state = initState, action) => {
    console.log('reducer:', action);
    // 判断发送过来的action是不是需要的type
    // 如果是的话，就返回新的state
    switch (action.type) {
        case 'add_action':
            return {
                count : state.count + 1
            }
        default:
            return state
    }
}
export default reducer