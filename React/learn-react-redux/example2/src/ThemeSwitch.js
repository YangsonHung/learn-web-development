import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "./react-redux";

class ThemeSwitch extends Component {
	static propTypes = {
		themeColor: PropTypes.string,
		onSwitchColor: PropTypes.func
	};

	handleSwitchColor(color) {
		console.log(color);
		if (this.props.onSwitchColor) {
			this.props.onSwitchColor(color);
		}
	}

	render() {
		return (
			<div>
				<button
					style={{ color: this.props.themeColor }}
					onClick={this.handleSwitchColor.bind(this, "red")}
				>
					Red
				</button>
				<button
					style={{ color: this.props.themeColor }}
					onClick={this.handleSwitchColor.bind(this, "Blue")}
				>
					Blue
				</button>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		themeColor: state.themeColor
	};
};

/**
 * 告诉 connect 高阶组件如何触发 action
 * @param {*} dispatch
 * 函数返回一个对象，对象内是一个函数
 */
const mapDispatchToProps = dispatch => {
	return {
		onSwitchColor: color => {
			dispatch({
				type: "CHANGE_COLOR",
				themeColor: color
			});
		}
	};
};

/**
 * 传入两个函数，再传入一个组件
 */
ThemeSwitch = connect(mapStateToProps, mapDispatchToProps)(ThemeSwitch);

export default ThemeSwitch;
