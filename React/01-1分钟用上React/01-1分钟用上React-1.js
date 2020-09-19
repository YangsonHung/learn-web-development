'use strict';

const e = React.createElement;

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

    // React语法
    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);
