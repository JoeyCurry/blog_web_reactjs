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
 * 公用的顶部导航条 定在顶部
 * activeKey:选中的项
 * isLogin:用户是否已登录
 * userName:用户的名字
 */


class NavLeader extends Component{

    constructor(props){
        super(props)
    }

    handleClick(type){
        switch (type) {
            case "blog":
                console.log("blog");
                break;
            case "ask":
                console.log("ask");
                break;
            case "login":
                console.log("login");
                break;
            case "register":
                console.log("register");
                break;
            case "quit":
                console.log("quit");
                break;
            case "userInfo":
                console.log("userInfo");
                break;
            case "userMsg":
                console.log("userMsg");
                break;
            case "aboutMe":
                console.log("aboutMe");
                break;
            default:

        }
    }

    render(){
        return (
                <Navbar fixedTop>
                    <Navbar.Header>
                        <Navbar.Brand>
                            一个人的自言自语
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav activeKey={this.props.activeKey}>
                        <NavItem
                        onSelect={()=>this.handleClick("blog")}
                        eventKey={1}
                        >自说自话</NavItem>
                        <NavItem
                            onSelect={()=>this.handleClick("ask")}
                            eventKey={2}>你问我答</NavItem>
                    </Nav>
                        {!this.props.isLogin
                            ?
                            <Nav pullRight >
                                <NavItem
                                    eventKey={1}
                                    onSelect={()=>this.handleClick("login")}
                                    >登录</NavItem>
                                <NavItem
                                    onSelect={()=>this.handleClick("register")}
                                    eventKey={2} >注册</NavItem>
                                <NavItem
                                    onSelect={()=>this.handleClick("aboutMe")}
                                    eventKey={3} >关于我</NavItem>
                             </Nav>
                            :
                            <Nav pullRight >
                                <NavDropdown
                                    title={this.props.userName}
                                    id="basic-nav-dropdown"
                                    eventKey={1} >
                                        <MenuItem
                                            onSelect={()=>this.handleClick("userInfo")}
                                            eventKey={1.1}>关于你</MenuItem>
                                        <MenuItem
                                            onSelect={()=>this.handleClick("userMsg")}
                                            eventKey={1.2}>你的消息</MenuItem>
                                        <MenuItem
                                            onSelect={()=>this.handleClick("userCollect")}
                                            eventKey={1.3}>你的收藏</MenuItem>
                                        <MenuItem divider />
                                        <MenuItem
                                            onSelect={()=>handleClick("quit")}
                                            eventKey={1.3}>不再登录</MenuItem>
                                </NavDropdown>
                                <NavItem
                                    onSelect={()=>handleClick("aboutMe")}
                                    eventKey={2} >关于我</NavItem>
                            </Nav>
                        }
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
