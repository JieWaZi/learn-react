import React, { Component } from 'react'
import  { bindActionCreators } from 'redux'
import {connect } from 'react-redux';
import ReduxSlide from '../../components/Slide/ReduxSlide'
import * as actions from '../../action/ActionBox'
class ReduxBox extends Component{

    render() {
        return (
            <div>
                <div 
                    style={{
                        width:'100px',
                        height:'100px',
                        backgroundColor:`rgb(${this.props.state.r},${this.props.state.g},${this.props.state.b})`
                    }}
                >
                </div>
                <ReduxSlide change={this.props.actions.changeR}></ReduxSlide>

                {this.props.state.r}
                <br />
                <ReduxSlide change={this.props.actions.changeG}></ReduxSlide>
                {this.props.state.g}
                <br />
                <ReduxSlide change={this.props.actions.changeB}></ReduxSlide>
                {this.props.state.b}
                <br />
            </div>
        )
    }
}

export default connect(
    (state) => {
        return {state : state} 
    },
    (dispatch) => {
        return {
           actions : bindActionCreators(actions,dispatch)
        }
    }
)(ReduxBox)