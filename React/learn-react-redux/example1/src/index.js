import React, { Component } from "react";
import { PropTypes } from "prop-types";
import ReactDOM from "react-dom";
import Header from "./Header";
import Content from "./Content";
import "./index.css";

function createStore(reducer) {
	let state = null;
	const listeners = [];
	const subscribe = listener => listeners.push(listener);
	const getState = () => state;
	const dispatch = action => {
		state = reducer(state, action);
		listeners.forEach(listener => listener());
	};
	// 初始化state
  dispatch({});
  console.log(state)
	return { getState, dispatch, subscribe };
}

const themeReducer = (state, action) => {
	console.log(state);
	if (!state)
		return {
			themeColor: "red"
		};

	switch (action.type) {
		case "CHANGE_COLOR":
      console.log(action.themeColor)
			return { ...state, themeColor: action.themeColor };
		default:
			return state;
	}
};

const store = createStore(themeReducer);

class Index extends Component {
	/**
	 * 作用：声明和验证
	 * 声明子组件的 context 的 store 的类型是 object
	 */
	static childContextTypes = {
		store: PropTypes.object
	};

	/**
	 * 作用：设置 context 的过程，它返回的对象就是 context
	 */
	getChildContext() {
		return { store };
	}

	render() {
		return (
			<div>
				<Header />
				<Content />
			</div>
		);
	}
}

ReactDOM.render(<Index />, document.getElementById("root"));
