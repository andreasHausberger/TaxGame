'use strict';

class Question extends React.Component {

    handleSubmit() {
        alert("Hey there!");
    }
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}


class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render() {
        if (this.state.liked) {
            return <Question/>;
        }

        return(
            <div>
                <h1> Hello World! </h1>
                <button onClick={() => this.setState({ liked: true })}>
                    Start
                </button>
            </div>
        );

    }
}

const domContainer = document.querySelector('#app');
ReactDOM.render(<LikeButton/>, domContainer);