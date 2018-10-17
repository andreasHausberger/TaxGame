var React = require('react');
var Component = React.Component;

export default class LikeButton extends Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render() {
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
