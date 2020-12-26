import React, { Component } from 'react';
import Buttons from './Buttons';
// import '../css/App.css';

class List extends Component {
    render() {
        return (
            <ul className="buttonList">
               <li><Buttons content="苓雅區" color="purple" /></li>
               <li><Buttons content="三民區" color="orange"/></li>
               <li><Buttons content="新興區" color="yellow" /></li>
               <li><Buttons content="鹽埕區" color="blue" /></li>
            </ul>
         
          //四個 Buttons 外層好像一定要包一個標籤，因為 return 只能回傳一個元素
          // React 提供另外一種解法 :Fragments
        );
    }
}

export default List;