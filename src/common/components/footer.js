import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    Button,
    Navbar,
    NavItem,
    Nav,
    NavDropdown,
    MenuItem,
    FormGroup,
    FormControl,
} from 'react-bootstrap';

/**
 * 公用的底部条
 */


class Footer extends Component{

    constructor(props){
        super(props)
    }



    render(){
        return (
                <div className="blog-footer">
                     <p>Blog template built for <a href="http://getbootstrap.com">Bootstrap</a> by <a href="https://twitter.com/mdo">@给我一颗葱</a>.</p>
                     <p>
                       <a href="#">Back to top</a>
                     </p>
                </div>



        )
    }
}


export default Footer;
