import React, { Component } from 'react'
import Slide from '../../components/Slide/Slide'
class Box extends Component{

    constructor(){
        super();
        this.state = {
            r: 0,
            g: 0,
            b: 0,
        }
    }

    change = (value, type) => {
        switch (type){
            case 'r':
                this.setState({r: value});
                break
            case 'g':
                this.setState({g: value});
                break
            case 'b':
                this.setState({b: value});
                break
            default:
                break
            
        }
    }

    render() {
        return (
            <div>
                <div 
                    style={{width:'100px',height:'100px',backgroundColor:`rgb(${this.state.r},${this.state.g},${this.state.b})`}
                }>
                </div>
                <Slide change={this.change} type='r'></Slide>
                <span>{this.state.r}</span>
                <br />
                <Slide change={this.change} type='g'></Slide>
                <span>{this.state.g}</span>
                <br />
                <Slide change={this.change} type='b'></Slide>
                <span>{this.state.b}</span>
                <br />
            </div>
        )
    }
}

export default Box