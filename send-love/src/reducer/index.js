const initState = {
    status: false
}

export default (state = initState, action) => {
    switch (action.type) {
        case 'send_love'://要发射爱心
            return {
                status: true
            }
        case 'stop_love':
            return {
                status: false
            }
        default:
            return state
    }
}