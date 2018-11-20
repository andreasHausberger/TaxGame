// require the core node events module
import {LikeButton} from './like_button';
var Component = React.Component;

class Index extends Component {
    render() {
        return(
                <div>
                    <h1> whee </h1>
                    <LikeButton/>
                </div>
            );

    }
}

ReactDOM.render(<Index/>, document.getElementsById('jff_app'));