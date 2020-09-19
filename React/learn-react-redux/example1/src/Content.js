import React, { Component } from "react";
import PropTypes from "prop-types";
import ThemeSwitch from "./ThemeSwitch";

class Content extends Component {
	/**
	 * 作用：声明 context 里的 store 的类型是 object
	 */
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

	render() {
		return (
			<div>
				<p style={{ color: this.state.themeColor }}>React.js 小书内容</p>
				<ThemeSwitch />
			</div>
		);
	}
}

export default Content;
