import {
  RightCircleOutlined,
  OpenAIOutlined
} from '@ant-design/icons';
import '../App.css';
const Header =()=> {
    return (
        <header className="header">
            <RightCircleOutlined style={{ fontSize: '40px', color: '#08c' }}/>
            <OpenAIOutlined style={{ fontSize: '40px', color: '#08c' }}/>
        </header>
    );
}

export default Header