import React, { Component } from "react";
import PropTypes from "prop-types";

/**
 * connect 高阶组件
 * 传入一个函数 mapStateToProps 告诉 connect 获取 store 里的什么数据
 * 传入一个函数 mapDispatchToProps 告诉 connect 需要如何触发 dispatch
 * 然后返回一个函数，返回的函数，参数又接受一个组件，将刚刚获取的数据通过 props 方式传给进来的组件
 * 这个进来的组件是 Dumb 组件，然后将包装组件 Connect 返回
 * @param {*} mapStateToProps
 */
export const connect = (
	mapStateToProps,
	mapDispatchToProps
) => WrappedComponent => {
	class Connect extends Component {
		static contextTypes = {
			store: PropTypes.object
		};

		constructor() {
			super();
			// 初始化一个 allProps，用来保存需要传给被包装组件 WrappedComponent 的所有参数
			this.state = {
				allProps: {}
			};
		}

		componentWillMount() {
			const { store } = this.context;
			this._updateProps();
			store.subscribe(() => this._updateProps());
		}

		_updateProps() {
			const { store } = this.context;
			// this.props 额外传入
			let stateProps = mapStateToProps
				? mapStateToProps(store.getState(), this.props)
				: {};
			let dispatchProps = mapDispatchToProps
				? mapDispatchToProps(store.dispatch, this.props)
				: {};
			this.setState({
				allProps: {
					...stateProps,
					...dispatchProps,
					...this.props
				}
			});
		}

		render() {
			// 下列3行代码被重构
			// const { store } = this.context;
			// let stateProps = mapStateToProps(store.getState());
			// {...stateProps} 意思是把这个对象里面的属性全部通过 `props` 方式传递进去
			// return <WrappedComponent {...stateProps} />;
			return <WrappedComponent {...this.state.allProps} />;
		}
	}
	return Connect;
};

export class Provider extends Component {
	static propTypes = {
		store: PropTypes.object,
		children: PropTypes.any
	};

	static childContextTypes = {
		store: PropTypes.object
	};

	getChildContext() {
		return {
			store: this.props.store
		};
	}

	render() {
		return <div>{this.props.children}</div>;
	}
}
