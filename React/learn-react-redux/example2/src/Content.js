import React, { Component } from "react";
import PropTypes from "prop-types";
import ThemeSwitch from "./ThemeSwitch";
import { connect } from "./react-redux";

class Content extends Component {
	/**
	 * 声明 props 的 themeColor 类型是 string
	 */
	static propTypes = {
		themeColor: PropTypes.string
	};

	render() {
		return (
			<div>
				<p style={{ color: this.props.themeColor }}>React.js 小书内容</p>
				<ThemeSwitch />
			</div>
		);
	}
}

/**
 * 作用：告诉 connect 高阶组件应该从 store.state 里获取什么数据
 * @param {*} state 传入 store.getState() 的返回值
 * 函数返回一个对象，从 store.state 里获取的数据
 */
const mapStateToProps = state => {
	return {
		themeColor: state.themeColor
	};
};

Content = connect(mapStateToProps)(Content);

export default Content;
