"use strict"

// class方式定义组件
class HelloMessage extends React.Component {
    // 重载render方法
    render() {
        // 返回一个DOM元素，接收参数
        return (
            <h1>Hello, {this.props.name}</h1>
        )
    }
}

// 将组件赋值给定义的变量，组件首字母是大写的
const element = <HelloMessage name="Yangson" />

// 将目标容器赋值给定义的变量
const domContainer = document.getElementById("root")

// 渲染组件
ReactDOM.render(
    element,
    domContainer
)