
import React from "react";
import { Route, Switch } from "react-router-dom";
import axios from "axios";
// reactstrap components
import { Container } from "reactstrap";
// core components
import UserNavbar from "../components/Navbars/UserNavbar.jsx";
import UserFooter from "../components/Footers/UserFooter.jsx";
import Sidebar from "../components/Sidebar/Sidebar.jsx";

import routes from "../routes.js";

class Admin extends React.Component {
    state = {
        user: {}
    }
    componentDidMount() {
        console.log('Mounted Teacher Component');
        let token = localStorage.getItem("token")
        if (token) {
            axios.post(`${process.env.REACT_APP_API_PORT}/auth`, {}, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
                .then(res => {
                    if (res.data.role === "student") {
                        this.props.history.push({
                            pathname: `/student/${this.props.location.pathname.split('/')[2]}`
                        })
                    } else {
                        let user = res.data
                        this.setState({ user })
                        console.log('User is - ', user);
                    }
                })
                .catch(err => {
                    console.log(err)
                })
        } else {
            this.props.history.push({
                pathname: `/student/${this.props.location.pathname.split('/')[2]}`
            })
        }
    }
    componentDidUpdate(e) {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        this.refs.mainContent.scrollTop = 0;
    }
    getRoutes = routes => {

        return routes.map((prop, key) => {

            if (prop.layout === "/teacher") {
                console.log('Here in teacher layout');
                return (
                    <Route

                        path={prop.layout + prop.path}
                        component={prop.component}
                        key={key}
                    />
                );
            } else {
                return null;
            }
        });
    };
    getBrandText = path => {
        for (let i = 0; i < routes.length; i++) {
            if (
                this.props.location.pathname.indexOf(
                    routes[i].layout + routes[i].path
                ) !== -1
            ) {
                return routes[i].name;
            }
        }
        return "Brand";
    };
    render() {
        return (
            <>
                <Sidebar
                    {...this.props}
                    user={this.state.user}
                    routes={routes}
                    logo={{
                        innerLink: "/admin/index",
                        imgSrc: require("../assets/img/brand/argon-react.png"),
                        imgAlt: "..."
                    }}
                />
                <div className="main-content" ref="mainContent">
                    <UserNavbar
                        {...this.props} user={this.state.user}
                        brandText={this.getBrandText(this.props.location.pathname)}
                    />
                    <Switch>{this.getRoutes(routes)}</Switch>
                    <Container fluid>
                        <UserFooter />
                    </Container>
                </div>
            </>
        );
    }
}

export default Admin;
