import {
  RightCircleOutlined,
  OpenAIOutlined
} from '@ant-design/icons';
import '../App.css';
const Header =()=> {
    return (
        <header className="header">
            <RightCircleOutlined data-testid="right-circle-icon" style={{ fontSize: '40px', color: '#08c' }}/>
            <OpenAIOutlined  data-testid="openai-icon" style={{ fontSize: '40px', color: '#08c' }}/>
        </header>
    );
}

export default Header