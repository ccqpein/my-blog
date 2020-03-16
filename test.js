'use strict';

//<script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
//<script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
//<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>

let t = document.createElement('div');
t.setAttribute("id", "menu");
t.setAttribute("display","inline-block");

let article = document.getElementsByClassName("markdown-body")[0];
article.setAttribute("display","inline-block");

let b = document.getElementsByTagName("body")[0];
//b.setAttribute("float","left");
b.insertAdjacentElement("afterbegin", t);

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return (
      <button onClick={() => this.setState({ liked: true })}>
        Like
      </button>
    );
  }
}

ReactDOM.render(<LikeButton />, document.getElementById('menu'));
