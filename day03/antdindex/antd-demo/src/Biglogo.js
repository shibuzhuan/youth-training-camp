import React from "react"
import { MailOutlined,AppstoreAddOutlined,SettingOutlined } from '@ant-design/icons';

const icons = [MailOutlined,AppstoreAddOutlined,SettingOutlined];
export class BigLogo extends React.Component{
    constructor(){
        super();
        setInterval(() => {
            if(!this.state)
                this.setState({current:1});
            else
                this.setState({current:(this.state.current + 1) % 3});
        }, 1000);
    }
    render(){
        let Icon = this.state ?
            icons[this.state.current]:
            AppstoreAddOutlined;

        return <div id = "biglogo" >
        {/* {this.state.current} */}
        <img alt = "logo" src = "https://gw.alipayobjects.com/zos/basement_prod/80e7d303-aa05-4c2d-94e9-2255ab5cea6c.svg" />
        <Icon id="dot"/>
        </div>
    }
}