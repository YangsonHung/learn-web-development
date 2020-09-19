// 创建Context对象，传入默认值
const ThemeContext = React.createContext("light");
ThemeContext.displayName = "self";

class App extends React.Component {
  render() {
    return (
      // 调用Context对象的Provider组件，设置value属性的值
      <ThemeContext.Provider value="dark">
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
}

function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

class ThemedButton extends React.Component {
  // 初始化contextType
  static contextType = ThemeContext;

  render() {
    console.log(this.context);
    return <Button theme={this.context} />;
  }
}

function Button(props) {
  console.log(props);
  return <button>按钮</button>;
}

const ele = <App />;
const container = document.getElementById("app");

ReactDOM.render(ele, container);
