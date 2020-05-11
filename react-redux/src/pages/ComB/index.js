import React from 'react'
import {connect} from 'react-redux'  

class ComB extends React.Component {
   constructor(props) {
        super(props)
        this.state = {}
   }
   render() {
       console.log('ComB:',this.props);
       return <div>
           {this.props.count}
       </div>
   }
}

const mapStateToProps = (state)=>{
    return state
}

// B组件是接收方，所以要实现第一个参数
export default connect(mapStateToProps)(ComB)