import React, { Component } from 'react'
import {PropTypes} from "prop-types"


class Slide extends Component{
    static propType ={
        change : PropTypes.func.isRequired,
    }

    render() {
        return (
        <input type="range" defaultValue={0} min={0} max={255} onChange={ (e) => {this.props.change(e.target.value,this.props.type)}} />
        )
    }
    
}

export default Slide