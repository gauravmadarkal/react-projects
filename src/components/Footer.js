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
            <footer class="footer" style={{paddingTop:"0px"}}>
                <div class="inner">
                <p>
                {this.props.showAddress?
                    <div class="footer-information row">
                        <img class="address-flag-icon" src = {require("../assets/img/flag.png")}></img>
                        <p class="my-address">Bangalore, KA <br />
                            560076, IN</p></div>:
                    <p></p>    
                }
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