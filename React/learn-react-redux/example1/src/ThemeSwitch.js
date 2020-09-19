import React, { Component } from "react";
import PropTypes from "prop-types";

class ThemeSwitch extends Component {
	static contextTypes = {
		store: PropTypes.object
	};

	constructor() {
		super();
		this.state = {
			themeColor: ""
		};
  }
  
  componentWillMount () {
    const { store } = this.context
    this._updateThemeColor()
    store.subscribe(() => this._updateThemeColor())
  }

	componentDidMount() {
		this._updateThemeColor();
	}

	/**
	 * 作用：组件挂载后被调用，设置自己状态的 themeColor 为 store 里的 state 的 themeColor
	 */
	_updateThemeColor() {
		const { store } = this.context;
		const state = store.getState();
		this.setState({
			themeColor: state.themeColor
		});
	}

	/**
	 * dispatch action 去改变颜色
	 * @param {*} color
	 */
	handleSwitchColor(color) {
    console.log(color)
		const { store } = this.context;
		store.dispatch({
			type: "CHANGE_COLOR",
			themeColor: color
		});
	}

	render() {
		return (
			<div>
				<button
					style={{ color: this.state.themeColor }}
					onClick={this.handleSwitchColor.bind(this, "red")}
				>
					Red
				</button>
				<button
					style={{ color: this.state.themeColor }}
					onClick={this.handleSwitchColor.bind(this, "Blue")}
				>
					Blue
				</button>
			</div>
		);
	}
}

export default ThemeSwitch;
