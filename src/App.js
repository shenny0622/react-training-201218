import './css/App.css';
import gotopIcon from './images/btn_goTop.png'
// import Buttons from './components/Buttons';
import List from './components/List';
import Dropdown from './components/Dropdown';
import Pagination from './components/Pagination';

function App() {
  return (
    <div className="App">
      <header className="banner">
        <div className="container">
            <h1>高雄旅遊資訊網</h1>
            <Dropdown/>
            {/* <select id="selectName">
          
            </select> */}
            <div className="menu">
                <p className="title-menu">熱門行政區</p>
                
                <List/>
                {/* <input type="button" value="苓雅區" style={{background:'#8A82CC'}}/>
                <input type="button" value="三民區" style={{background:'#FFA782'}}/>
                <input type="button" value="新興區" style={{background:'#F5D105'}}/>
                <input type="button" value="鹽埕區" style={{background:'#559AC8'}}/> */}
            </div>
            <div className="icon-menu">
                <hr />
            </div> 
        </div>
    </header>
    <div className="content container"> 
        <div className="main">
            {/* <h2>{rel}</h2> */}
            <h2>請先選擇區域</h2>
            <ul></ul>
        </div>
        <div className="goTop">
            <img src={gotopIcon}  alt="gotopIcon"/>
        </div>
        <Pagination/>
        {/* <ul className="page">
           <li><a href="https://hackmd.io/xG1tw_nER7Wu3xL1gbGYPQ?both">Prev </a></li>
           <li><a href="#">1</a></li>
           <li><a href="#">2</a></li>
           <li><a href="#">Next</a></li>
        </ul> */}
    </div>
    
    <footer>
        <div className="container">
            <p>高雄旅遊網</p>
            <p className="pStyle">資料來源: 高雄市政府</p>
        </div>
    </footer>
    
    </div>
  );
}

export default App;
