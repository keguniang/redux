import React from 'react'
import { connect } from 'react-redux'

// 导入图片
import defaultImg from '../assets/images/1.jpg'
import sendImg from '../assets/images/2.jpg'

class Boy extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // UI级别的state
            isSend: false
        }
    }
    render() {
        return <div>
            <img src={this.state.isSend ? sendImg : defaultImg}></img>
            <div>
                <button onClick={this.sendLove}>{this.state.isSend ? '停止发射' : '发射爱心'}</button>
            </div>
        </div>
    }

    sendLove = () => {
        let { isSend } = this.state
        // 发送action
        isSend ?  this.props.stopAction() : this.props.sendAction()
        this.setState({
            isSend: !isSend
        })
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendAction: () => {
            dispatch({
                type: 'send_love'
            })
        },
        stopAction: () => {
            dispatch({
                type: 'stop_love'
            })
        },
    }
}

export default connect(null, mapDispatchToProps)(Boy)