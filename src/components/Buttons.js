import React, { Component } from 'react';
// import styled from 'styled-compoenets';



class Buttons extends Component {
    //在`class`中宣告一個事件
    // writeConsole() {
    //     console.log('點了點了點了')
    // }
    
    render() {
        const { 
            color,
            content,
            ...Props
          } = this.props;
          
        return (
            // <button>{this.props.text} </button>
            // <button className={color} {...Props} onClick={() => alert(color)}>
            <button className={color} {...Props} >
            {content}
          </button>
        
          
            
        );
    }
}




export default Buttons;