import React from "react";
import ReactDOM from "react-dom";
// import Icon from './lib/icon/icon';

import { HashRouter as Router, Route, Link } from "react-router-dom";
import IconExample from "./lib/icon/icon.example";
import ButtonExample from "./lib/button.example";
import DialogExample from "./lib/dialog/dialog.example";
import LayoutExample from "./lib/layout/layout.example";
import {
    Layout,
    Header,
    Aside,
    Content,
    Footer,
} from "./lib/layout/layout";
import "./example.scss";
import logo from "./logo_name.png";
// import * as logo from "./logo_image.svg";

// const logo = require("./logo.png");
console.log(logo);
ReactDOM.render(
    <Router>
        <Layout className="page" style={{ border: "1px solid blue" }}>
            <Header style={{ border: "1px solid purple" }}>
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
            </Header>
            <Layout>
                <Aside style={{ border: "1px solid pink" }}>
                    <h2>Introduction</h2>

                    <h2>Component</h2>
                    <ul>
                        <li>
                            <Link to="/icon">Icon</Link>
                        </li>
                        <li>
                            <Link to="/button">Button</Link>
                        </li>
                        <li>
                            <Link to="/dialog">Dialog</Link>
                        </li>
                        <li>
                            <Link to="/layout">Layout</Link>
                        </li>
                    </ul>
                </Aside>
                <Content>
                    <Route
                        path="/icon"
                        component={IconExample}
                    ></Route>
                    <Route
                        path="/button"
                        component={ButtonExample}
                    ></Route>
                    <Route
                        path="/dialog"
                        component={DialogExample}
                    ></Route>
                    <Route
                        path="/layout"
                        component={LayoutExample}
                    ></Route>
                </Content>
            </Layout>
            <Footer style={{ border: "1px solid black" }}>
                Footer
            </Footer>
        </Layout>
    </Router>,
    document.querySelector("#root")
);
