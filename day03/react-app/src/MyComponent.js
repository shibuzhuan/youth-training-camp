import {Component} from "react";
import React from 'react';
import {ThemeContext} from "./ThemeContext.js"

export class MyComponent extends Component {
    render(){
        console.log(this.context);
        return <div></div>;
    }
}

MyComponent.contextType = ThemeContext;