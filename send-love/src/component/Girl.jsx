import React from 'react'
import {connect} from 'react-redux'
// 导入图片
import defaultImg from '../assets/images/3.jpg'
import receiveImg from '../assets/images/4.jpg' 

class Girl extends React.Component {
   constructor(props) {
        super(props)
        this.state = {}
   }
   render() {
       return <div>
           <img src={this.props.status ? receiveImg : defaultImg}></img>
       </div>
   }
}

const mapStateToProps = (state)=>{
    // 这里边的state就是reducer返回过来的state
    console.log('girl:',state);
    return state
}

export default connect(mapStateToProps)(Girl)