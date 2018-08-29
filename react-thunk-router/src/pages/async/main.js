import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from './action';

class Main extends Component {
    constructor(props){
        super()
        console.log(props)
    }



    add = () => {
        this.props.dispatch(actions.add())
    }

    render(){
        return(
            <div>
                <h1>{this.props.number}</h1>
                <input type='button' value='点我异步获取' onClick={this.add}/>
            </div>    
        )
    }
}
export default connect((state)=>{
    return state;
})(Main)