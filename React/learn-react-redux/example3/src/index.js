import React, { Component } from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Header from "./Header";
import Content from "./Content";
import "./index.css";

const themeReducer = (state, action) => {
	console.log(state);
	if (!state)
		return {
			themeColor: "red"
		};

	switch (action.type) {
		case "CHANGE_COLOR":
			console.log(action.themeColor);
			return { ...state, themeColor: action.themeColor };
		default:
			return state;
	}
};

const store = createStore(themeReducer);

class Index extends Component {
	render() {
		return (
			<div>
				<Header />
				<Content />
			</div>
		);
	}
}

ReactDOM.render(
	<Provider store={store}>
		<Index />
	</Provider>,
	document.getElementById("root")
);
