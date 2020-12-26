import React, { Component } from 'react';

const  relations = [
    {label:'父', value:0},
    {label:'母', value:1},
    {label:'子', value:2},
    {label:'女', value:3},
];

class Dropdown extends Component {
    state = {
        rel:`${relations[0].value}`,
    };
    onChange = (e) =>{
        this.setState({
            rel:e.target.value,
        });
    };
    render() {
        const{rel}=this.state;
        return (
            <div>
                 <select value={rel} onChange={this.onChange}>
                   {relations.map((relation) =>(
                       <option 
                       value={relation.value}
                        key ={relation.label}
                        >{relation.label}</option>
                   ))}
          
          </select>
          {/* <h1>{relations.find((r) =>`${r.value}`=== rel).label}</h1> */}
          {/* <h1>{rel}</h1> */}
            </div>
        );
    }
}

export default Dropdown;