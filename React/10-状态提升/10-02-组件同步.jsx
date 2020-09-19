const scaleNames = {
    c: "Celsius",
    f: "Fahrenheit"
};

function toCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return "";
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
}

class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        // this.state = {temperature: ''};
    }
    handleChange(e) {
        // this.setState({temperature: e.target.value});
        this.props.onTemperatureChange(e.target.value);
    }
    render() {
        // const temperature = this.state.temperature;
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input value={temperature} onChange={this.handleChange} />
            </fieldset>
        );
    }
}
class Calculator extends React.Component {
    // 构造函数
    constructor(props) {
        // 调用父亲的构造函数
        super(props);
        // 绑定this
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        // 数据初始化
        this.state = {
            temperature: "",
            scale: "c"
        };
    }

    // 处理摄氏度
    handleCelsiusChange(temperature) {
        this.setState({
            scale: "c",
            temperature
        });
    }

    // 处理华氏度
    handleFahrenheitChange(temperature) {
        this.setState({
            scale: "f",
            temperature
        });
    }

    render() {
        // 获取标记值
        const scale = this.state.scale;
        // 获取温度
        const temperature = this.state.temperature;
        // 判断标记值是否是f，转换华氏度为摄氏度
        const celsius = scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
        // 判断标记值是否是c，转换摄氏度为华氏度
        const fahrenheit = scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;
        return (
            <div>
                <TemperatureInput
                    scale="c"
                    temperature={celsius}
                    onTemperatureChange={this.handleCelsiusChange}
                />
                <TemperatureInput
                    scale="f"
                    temperature={fahrenheit}
                    onTemperatureChange={this.handleFahrenheitChange}
                />
                <BoilingVerdict celsius={parseFloat(celsius)} />
            </div>
        );
    }
}
ReactDOM.render(<Calculator />, document.getElementById("root"));
