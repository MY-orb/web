import "./../scss/login.scss";
import "./../scss/commenheader.scss";
import React from "react";
import {hashHistory} from "react-router";
import MyAjax from "./MyAjax.js";
import Toast from "./Toast.js";
export default class Register extends React.Component{
	constructor(props){
		super(props)
		this.state={
			check:"checked"
		}
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
	toValidateFn(){
		var that = this;
		var userID = this.refs.userID.value;
		var password = this.refs.password.value;
		if(userID == "" || password == ""){
			Toast.makeText("信息不完整",2000)
		}else{	
				this.refs.btn.value = "正在注册..."
				this.refs.btn.disabled="disabled"
				var userObj= {
					url:"http://datainfo.duapp.com/shopdata/userinfo.php",
					data:{
						status:"register",
						userID:userID,
						password:password
					},
					dataType:"JSON"
				}
				MyAjax.zeptoAjax(userObj,function(data){
					that.refs.btn.value = "注册"
					that.refs.btn.disabled=""
					if(data == "0"){
						Toast.makeText("用户名重名",2000)
					}else if(data == "1"){
						Toast.makeText("注册成功",2000)
					}else{
						Toast.makeText("注册失败",2000)
					}
				})
			}
	}
	componentWillMount(){
	}
	render(){
		
		return (
			<div className = "type">
				<header className ="commonheader">
					<i className = "iconfont " onClick={this.back.bind(this)}>&#xe661;</i>
					<span>注册</span>
					<i className = "iconfont " onClick={this.toHomeFn.bind(this)} >&#xe633;</i>
				</header>
				<div id="logincontent">
					<form>
						<input ref="userID" type="text" placeholder="请输入手机号/邮箱" />
						<input ref="password" type="password" placeholder="密码" />
						<div><input type="checkbox" ref="box"/><p>已同意协议</p></div>
						<input type="button" ref="btn" value="注册" onClick ={this.toValidateFn.bind(this)}/>
						<span onClick = {this.toLoginFn.bind(this)}>立即登录</span>
					</form>
				</div>
			</div>
		)
	}
	componentDidMount(){
		this.refs.box.checked=this.state.check;
	}
}
