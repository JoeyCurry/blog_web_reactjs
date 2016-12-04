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
 * 公用的顶部导航条
 * activeKey
 * handleMainNavItemOne
 * handleMainNavItemTwo
 * isLogin
 * userName
 * handleUserInfo
 * handleUserMsg
 * handleUserCollect
 * handleQuit
 * handleAboutMe
 */


class NavLeader extends Component{

    constructor(props){
        super(props)
    }

    handleClick(item){

    }

    render(){
        return (
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            一个人的自言自语
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav activeKey={this.props.activeKey}>
                        <NavItem
                        onSelect={this.props.handleMainNavItemOne}
                        eventKey={1}
                        >自说自话</NavItem>
                        <NavItem
                            onSelect={this.props.handleMainNavItemTwo}
                            eventKey={2}>你问我答</NavItem>
                    </Nav>




                        {this.props.isLogin
                            ?
                            <Nav pullRight >
                                <NavItem
                                    eventKey={1}
                                    onSelect={this.props.handleLogin}
                                    >登录</NavItem>
                                <NavItem
                                    onSelect={this.props.handleRegister}
                                    eventKey={2} >注册</NavItem>
                                <NavItem
                                    onSelect={this.props.handleAboutMe}
                                    eventKey={3} >关于我</NavItem>
                             </Nav>
                            :
                            <Nav pullRight >
                                <NavDropdown
                                    title={this.props.userName}
                                    id="basic-nav-dropdown"
                                    eventKey={1} >
                                        <MenuItem
                                            onSelect={this.props.handleUserInfo}
                                            eventKey={1.1}>关于你</MenuItem>
                                        <MenuItem
                                            onSelect={this.props.handleUserMsg}
                                            eventKey={1.2}>你的消息</MenuItem>
                                        <MenuItem
                                            onSelect={this.props.handleUserCollect}
                                            eventKey={1.3}>你的收藏</MenuItem>
                                        <MenuItem divider />
                                        <MenuItem
                                            onSelect={this.props.handleQuit}
                                            eventKey={1.3}>不再登录</MenuItem>
                                </NavDropdown>
                                <NavItem
                                    onSelect={this.props.handleAboutMe}
                                    eventKey={2} >关于我</NavItem>
                            </Nav>
                        }
                        <Navbar.Form pullRight>
                          <FormGroup validationState="success" action={()=>{console.log("llddd");}}>
                            <FormControl
                                type="text"
                                placeholder="Search" />
                          </FormGroup>
                        </Navbar.Form>
                </Navbar>
        )
    }
}

function mapStateToProps(state,props) {
    return {
        // : state.get(''),
    }
}

function mapActionToProps(){
    return {

    }
}

export default connect(mapStateToProps, mapActionToProps())(NavLeader);
