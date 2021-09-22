
import './App.css';
import { Row,Col, DatePicker,Input,Menu } from 'antd'
import 'antd/dist/antd.css'
import { UnorderedListOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

function App() {
  return (
    <div className="App">
      <Row>
        <Col>
      
      <h1><a id = "logo"><img alt = "logo" src = 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg' />Ant Design</a></h1>
      </Col>
      <Col flex="1" >
        <div id="searchbox">
      <Input placeholder="搜索" />
        </div>
      </Col>
      <Col>
      <Menu id="menu" mode = "horizontal">
        <Menu.Item>设计</Menu.Item>
        <Menu.Item>文档</Menu.Item>
        <Menu.Item>组件</Menu.Item>
        <Menu.Item>资源</Menu.Item>
        <Menu.Item>国内镜像</Menu.Item>
        <SubMenu title="" icon = {<UnorderedListOutlined />}>
          <Menu.Item>子菜单项</Menu.Item>
        </SubMenu>
      </Menu>
      </Col>
      </Row>
    </div>
  );
}

export default App;
