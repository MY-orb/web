import "./../scss/login.scss";
import "./../scss/commenheader.scss";
import React from "react";
import {hashHistory} from "react-router";
import MyAjax from "./MyAjax.js";
import Toast from "./Toast.js";
export default class Login extends React.Component{
	constructor(props){
		super(props)
		this.state={
			check:"checked"
		}
	}
	back(){
		window.history.go(-1);  //返回上一页
	}
	toRegisterFn(){
		hashHistory.push("/register");
	}
	toRetrievePsdFn(){
		hashHistory.push("/retrievePsd");
	}
	toHomeFn(){
		hashHistory.push("/");
	}
	toValidateFn(){
		var that = this;
		var userID = this.refs.userID.value;
		var password = this.refs.password.value;
		if(userID == "" || password == ""){
			alert("信息不完整")
		}else{
			this.refs.btn.value = "正在登录..."
			this.refs.btn.disabled="disabled"
			var url ="http://datainfo.duapp.com/shopdata/userinfo.php?status=login&userID="+userID+"&password="+password;
					MyAjax.fetch(url,function(data){
						that.refs.btn.value = "登录"
						that.refs.btn.disabled=""
						if(data == "0"){
							Toast.makeText("用户不存在，请先注册",3000);
							that.refs.userID.value = "";
							that.refs.password.value = "";
							that.refs.userID.focus();
						}else if(data == "2"){
							Toast.makeText("密码错误",3000);
							that.refs.password.value = "";
							that.refs.password.focus();
						}else{
							Toast.makeText("成功登录",1000);
							localStorage.setItem("isLogin","1");
							localStorage.setItem("userID",userID);		
						}
					},function(err){
						that.refs.btn.value = "登录"
						that.refs.btn.disabled=""
						Toast.makeText("登录超时，请检查您的网络",2000);
					});
				}
	}
	componentWillMount(){
	}
	render(){
		return (
			<div className = "type">
				<header className ="commonheader">
					<i className = "iconfont " onClick={this.back.bind(this)}>&#xe661;</i>
					<span>登录</span>
					<i className = "iconfont " onClick={this.toHomeFn.bind(this)}>&#xe633;</i>
				</header>
				<div id="logincontent">
					<form>
						<input type="text" ref="userID" placeholder="已验证手机号/邮箱" />
						<input type="password" ref="password" placeholder="密码" />
						<div><input type="checkbox"  ref="box"/><p>一个月免登陆</p></div>
						<input type="button" ref="btn" value="登录" onClick ={this.toValidateFn.bind(this)} />
						<span onClick = {this.toRegisterFn.bind(this)}>立即注册</span><span onClick ={this.toRetrievePsdFn.bind(this)} >忘记密码</span>
					</form>
				</div>
			</div>
		)
	}
	
	componentDidMount(){
		this.refs.box.checked=this.state.check;
	}
}
