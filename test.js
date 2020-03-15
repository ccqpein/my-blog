'use strict';

const e = React.createElement;

let t = document.createElement('div');
t.setAttribute("id", "menu");
let b = document.getElementsByTagName("body");
b[0].insertAdjacentElement("afterbegin", t);

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

ReactDOM.render(e(LikeButton), document.getElementById('menu'));
