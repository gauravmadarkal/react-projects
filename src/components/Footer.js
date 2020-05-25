import React from 'react';
import "../css/cover.css"
import "../css/bootstrap.min.css"
import "../css/font-awesome.min.css"
class Footer extends React.Component{
    constructor(props) {
        super(props);
        this.state = {hidden : true};
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({hidden: false});
        }, this.props.waitBeforeShow);
    }
    render() {
        return(
            this.state.hidden ? <div id = "animation" class="shapeshifter play"></div> :
            // <footer class="mastfoot mt-auto">
            <footer class="footer">
                <div class="inner">
                <p>
                <a class="footerIcons" href="#"><i class="fa fa-instagram fa-3x" ></i></a>
                <a class="footerIcons" href="#"><i class="fa fa-facebook fa-3x"></i></a>
                <a class="footerIcons" href="#"><i class="fa fa-twitter fa-3x"></i></a>
                <a class="footerIcons" href="#"><i class="fa fa-dribbble fa-3x"></i></a>
                <p class="copyright-text"> Made with <i class="fa fa-heart"></i> by<a href="https://gaurav-madarkal.web.app"> Gaurav Madarkal</a>.</p>
                </p>
                {/* <p class="copyright-text">Made with <i class="fa fa-heart"></i> by<a href="https://gaurav-madarkal.web.app"> Gaurav Madarkal</a>.</p> */}
                </div>
            </footer>
        );
    }
}
export default Footer;