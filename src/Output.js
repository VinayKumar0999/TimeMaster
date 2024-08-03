
import './App.css';
import {
  BellOutlined
} from '@ant-design/icons';
import { useState } from 'react';
import WebSocketComponent from './Websocket';

function App() {
  const [isWebsocketShow, setIsWebsocketShow] = useState(false);
  const handleBellIconClick = () => {
    setIsWebsocketShow(prev => !prev)
  }

  return (
    <div className="App">
      <button onClick={handleBellIconClick}>
        <BellOutlined style={{ fontSize: '40px', color: '#08c' }}/>
      </button>
      {isWebsocketShow && <WebSocketComponent />}
      <table>
        <table>
          <tr>
            <th>Day</th>
            <th>Subject</th>
            <th>Chapters</th>
          </tr>
          <tr>
            <td rowspan="2">Day 1</td>
            <td>A</td>
            <td>1,2</td>
          </tr>
          <tr>
            <td>B</td>
            <td>1,2</td>
          </tr>
          <tr>
            <td rowspan="2">Day 2</td>
            <td>A</td>
            <td>1,2</td>
          </tr>
          <tr>
            <td>B</td>
            <td>1,2</td>
          </tr>
        </table>
      </table>
    </div>
  );
}

export default App;
