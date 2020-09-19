function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
}
class Calculator extends React.Component {
    // 构造函数
    constructor(props) {
        // 传值给父亲，调用父亲的构造函数
        super(props);
        // 用class定义的组件要绑定this
        this.handleChange = this.handleChange.bind(this);
        // 初始化数据
        this.state = { temperature: "" };
    }

    handleChange(e) {
        this.setState({
            temperature: e.target.value
        });
    }

    render() {
        const temperature = this.state.temperature;
        return (
            <fieldset>
                <legend>Enter temperature in Celsius:</legend>
                <input value={temperature} onChange={this.handleChange} />
                <BoilingVerdict celsius={parseFloat(temperature)} />
            </fieldset>
        );
    }
}
ReactDOM.render(<Calculator />, document.getElementById("root"));
