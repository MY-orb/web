import "./../scss/user.scss";
import "./../scss/commenheader.scss";
import React from "react";
import {hashHistory} from "react-router";
export default class User extends React.Component{
	constructor(props){
		super(props)
	}
	back(){
		window.history.go(-1);  //返回上一页
	}
	toCartFn(){
		hashHistory.push("/cart");
		}
	toLoginFn(){
		hashHistory.push("/login");
	}
	toRegisterFn(){
		hashHistory.push("/register");
	}
	toHomeFn(){
		hashHistory.push("/");
	}
	
	render(){
		
		return (
			<div className = "type">
				<header className ="commonheader">
					<i className = "iconfont " onClick={this.back.bind(this)}>&#xe661;</i>
					<span>我的蜂巢</span>
					<i className = "iconfont " onClick={this.toHomeFn.bind(this)}>&#xe633;</i>
				</header>
				<div id="usercontent">
					<div className="User">
						<div className="my"></div>
						<span onClick = {this.toLoginFn.bind(this)}>登录 </span>/<span onClick = {this.toRegisterFn.bind(this)}> 注册</span>
					</div>
					<div className="myorder">
						<span>我的订单  &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 全部订单 &gt;</span>
					</div>
					<div className="myshop">
						<span>
							<p className="iconfont">&#xe61f;</p>
							<p>待支付</p>
						</span>
						<span>
							<p className="iconfont">&#xe603;</p>
							<p>待收货</p>
						</span>
						<span>
							<p className="iconfont">&#xe662;</p>
							<p>待评价</p>
						</span>
					</div>
					<div className="myadess">
						<i className="iconfont">&#xe60e;</i>&nbsp;<span>收货地区</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3</span>&nbsp;&gt;
					</div>
					<div className="myflowerfan">
						<p><i className="iconfont">&#xe681;</i>&nbsp;<span>我的优惠券</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&gt;</p>
						<p><i className="iconfont">&#xe600;</i>&nbsp;<span>我的花粉</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&gt;</p>
					</div>
					<div className="mycause">
						<p><i className="iconfont">&#xe72d;</i>&nbsp;<span>我的收藏</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&gt;</p>
						<p><i className="iconfont">&#xe617;</i>&nbsp;<span>浏览记录</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&gt;</p>
					</div>
					<div className="opinion">
						<p><i className="iconfont">&#xe616;</i>&nbsp;<span>意见反馈</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&gt;</p>
						<p><i className="iconfont">&#xe674;</i>&nbsp;<span>在线客服</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&gt;</p>
						<p><i className="iconfont">&#xe632;</i>&nbsp;<span>关于乐蜂</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&gt;</p>
					</div>
				</div>
				<div className="xmrGUu">
								<aside className="left">
								<a onClick={this.toHomeFn.bind(this)}>首页</a>  <a onClick = {this.toCartFn.bind(this)}>购物车</a>  <a>客户端</a>
								</aside>
								<p>联系客服 <a>400-000-1818</a> </p>
								<p>Copyright © 2008-2017Lefeng.com All Rights Reserved</p>
					</div>

			</div>
		)
	}
}
