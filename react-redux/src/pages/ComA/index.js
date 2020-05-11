import React from 'react'
// 导入connect，使组件与store联系起来
import {connect} from 'react-redux'  

class ComA extends React.Component {
   constructor(props) {
        super(props)
        this.state = {}
   }
   render() {
       return <div>
           <button onClick={this.handleClick}>+</button>
       </div>
   }

   handleClick = ()=>{
       console.log('ComA:',this.props);
    //    发送action,一旦调用这个方法，就会去执行这个函数，就会执行dispatch，发送action，reducer就会接收到action
        this.props.sendAction()
   }
}

/**
 * 该函数要有一个返回值，且是一个对象
 * @param {*} dispatch 一个方法，本质上还是store.dispatch()
 * 作用：将这个action对象作为props绑定到自己的组件中
 */
const mapDispatchToProps = (dispatch)=>{
    return {
        sendAction: ()=>{
            // 利用dispatch发送一个action
            // 传递action对象，要定义一个type属性
            dispatch({
                type:'add_action'
            })
        }
    }
}

// A是发送方，所以要实现connect的第二个参数
export default connect(null,mapDispatchToProps)(ComA)