import "./../scss/commenheader.scss";
import "./../scss/retrievePsd.scss";
import React from "react";
import {hashHistory} from "react-router";
export default class RetrievePsd extends React.Component{
	constructor(props){
		super(props)
	}
	back(){
		window.history.go(-1);  //返回上一页
	}
	toHomeFn(){
		hashHistory.push("/");
	}
	toLoginFn(){
		hashHistory.push("/login");
	}
	componentWillMount(){
	}
	render(){
		
		return (
			<div className = "type">
				<header className ="commonheader">
					<i className = "iconfont " onClick={this.back.bind(this)}>&#xe661;</i>
					<span>找回密码</span>
					<i className = "iconfont " onClick={this.toHomeFn.bind(this)} >&#xe633;</i>
				</header>
				<div id="retrievePsdcontent">
					<h2>暂时只支持通过手机找回密码</h2>
					<form className="findphone">
					<input type="text" placeholder="手机号"/>
					<button>获取验证码</button>
					</form>
				</div>
			</div>
		)
	}
	componentDidMount(){
	}
}
