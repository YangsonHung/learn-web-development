"use strict";

// 定义class组件
class HelloMessage extends React.Component {
    render() {
        return React.createElement(
            "h1",
            null,
            "Hello ",
            this.props.name
        );
    }
}

// 渲染组件
ReactDOM.render(
    React.createElement(HelloMessage, { name: "Yangson" }),
    document.getElementById("hello")
);

