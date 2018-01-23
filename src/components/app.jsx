import React from 'react'

export default class App extends React.Component{
    state = {
        num:0,
        optNum:1
    }

    handleAdd = (optNum)=>{
        const {num} = this.state
        this.setState({num:num+optNum})
    }
    handleDelete = (optNum)=>{
        const {num} = this.state
        const number = num-optNum
        if (number<0){

        }
        console.log(number);
        this.setState({num:number})
    }
    handleOdd = (optNum)=>{
        const {num} = this.state
        if (num % 2 === 0){
            this.setState({num:num})
        }else{
            this.setState({num:num+optNum})
        }
    }
    handleAsy = (optNum)=>{
        const {num} = this.state
        setTimeout(() =>{
            this.setState({num:num+optNum})
        }, 1000)

    }
    handleChange =(e)=>{
        let num = e.target.value*1
        this.setState({optNum:num})
    }

    render(){
        const {num,optNum} = this.state
        return(
            <div>
                <h3>click {num} times</h3>

                <select onChange={this.handleChange}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>&nbsp;&nbsp;
                <button onClick={()=>{this.handleAdd(optNum)}}>+</button>&nbsp;&nbsp;
                <button onClick={()=>this.handleDelete(optNum)}>-</button>&nbsp;&nbsp;
                <button onClick={()=>this.handleOdd(optNum)}>increment if odd </button>&nbsp;&nbsp;
                <button onClick={()=>this.handleAsy(optNum)}>increment async </button>&nbsp;&nbsp;
            </div>
            
        )
    }
}