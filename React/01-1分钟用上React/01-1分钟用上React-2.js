'use strict';

// 定义class组件继承自React.Component
class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  // 重载render方法
  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    // JSX语法
    return (
      <button onClick={() => this.setState({ liked: true })}>
        Like
      </button>
    )
  }
}

// JSX语法
ReactDOM.render(
  <LikeButton />,
  document.getElementById("like_button_container")
)