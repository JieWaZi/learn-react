import React, { Component } from 'react'
import {PropTypes} from "prop-types"


class ReduxSlide extends Component{
    static propType ={
        change : PropTypes.func.isRequired,
    }

    render() {
        return (
        <input type="range" defaultValue={0} min={0} max={255} onChange={ (e) => {this.props.change(e.target.value)}} />
        )
    }
    
}

export default ReduxSlide