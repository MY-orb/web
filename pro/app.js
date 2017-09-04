
import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, hashHistory, IndexRoute} from "react-router";

import "./scss/main.scss";

import App from "./my/App.js";
import Home from "./my/Home.js";
import User from "./my/User.js";
import Adress from "./my/Adress.js";
import Cart from "./my/Cart.js";
import More from "./my/More.js";
import Login from "./my/Login.js";
import Kind from "./my/Kind.js";
import Datails from "./my/Datails.js";
import List from "./my/List.js";
import List_h from "./my/List_h.js";
import List_b from "./my/List_b.js";
import RetrievePsd from "./my/RetrievePsd.js";
import Register from "./my/Register.js";
ReactDOM.render((
	<Router history = {hashHistory}>
		<Route	path = "/" component = {App}>
			<IndexRoute components = {{type:Home}} />
			<Route path = "user" components = {{type:User}}/>
			<Route path = "adress" components = {{type:Adress}}/>
			<Route path = "cart" components = {{type:Cart}}/>
			<Route path = "kind" components = {{type:Kind}}/>
			<Route path = "more" components = {{type:More}}/>
			<Route path = "login" components = {{type:Login}}/>
			<Route path = "list" components = {{type:List}}/>
			<Route path = "list_h" components = {{type:List_h}}/>
			<Route path = "list_b" components = {{type:List_b}}/>
			<Route path = "datails" components = {{type:Datails}}/>
			<Route path = "retrievePsd" components = {{type:RetrievePsd}}/>
			<Route path = "register" components = {{type:Register}}/>
		</Route>
	</Router>
),document.getElementById("app"));

